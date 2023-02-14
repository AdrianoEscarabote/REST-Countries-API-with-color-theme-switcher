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
    .then(response => {
      setData(response.data)
    })
    .catch(err => {
      setError(err)
      return;
    })
    .finally(() => {
      setLoading(false)
    })
  }, [url]);

  const refetch = (urlName: string | boolean, urlRegion: string | boolean) => {

    setLoading(true);
    let url: string = ""

    if (urlRegion) {
      url = `https://restcountries.com/v3.1/region/${urlRegion}`;
    } else if (urlName) {
      url = `https://restcountries.com/v3.1/name/${urlName}`
    } else {
      url = "https://restcountries.com/v3.1/all"
    }

    axios
    .get(url)
    .then(response => {
      if (response.status === 404) {
        setError("Não foi encontrado nenhum país com esse nome");
      } else {
        setData(response.data);
        setError("");
      }
    })
    .catch(err => {
      setError(err.response.status);
    })
    .finally(() => {
      setLoading(false);
    });
    
  }

  return { data, loading, error, refetch}
}