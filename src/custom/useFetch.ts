import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url: string) {

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    setLoading(true)
    axios
    .get(url)
    .then((response) => {
      setData(response.data)
    })
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [url])

  const refetch = (urlRegion: string) => {
    setLoading(true)
    axios
    .get(urlRegion)
    .then((response) => {
      console.log(response.data)
      setData(response.data)
    })
    .catch((err) => {
      if (err.response.status) {
        console.log("acho que posso controlar daqui")
      }
      setError(err.response.status)
    })
    .finally(() => {
      setLoading(false)
    })
  }
  return { data, loading, error, refetch}
}