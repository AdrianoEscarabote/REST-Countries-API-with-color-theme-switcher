import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url: string) {

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

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

  return { data, loading, error }
}