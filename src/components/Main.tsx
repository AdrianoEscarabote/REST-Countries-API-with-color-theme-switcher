import { MainStyled } from "../styles/MainStyled";
import Country from "./Country";
import useFetch from "../custom/useFetch";
import { Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface Data {
  name: {common: string},
  flags: {svg: string},
  region: string,
  capital: string,  
  population: string,
  index: number
};

export const Main = () => {

  const effectRan = useRef(false);

  let objData: Data[] = [];
    
  const {data, loading, error, refetch} = useFetch("https://restcountries.com/v3.1/all");
  
  const [urlRegion, setUrlRegion] = useState("");

  useEffect(() => {
    if (effectRan.current === true) {
      try {
        if (urlRegion === "") {
          refetch("https://restcountries.com/v3.1/all")
        } else {
          refetch(`https://restcountries.com/v3.1/region/${urlRegion}`);
        }
      } catch (e) {
        console.log(e)
      }
    }
    return () => {
      effectRan.current = true;
    }
  }, [urlRegion]);

  const [urlNameFilter, setUrlNameFilter] = useState("")

  useEffect(() => {
    if (effectRan.current === true) {
      console.log(urlNameFilter)
      refetch(`https://restcountries.com/v3.1/name/${urlNameFilter}`)
    } 
    return () => {
      effectRan.current = true;
    }
  }, [urlNameFilter]);
    
  if (loading !== true) {
    objData = data
  } 
  if (error) return <h1>{error}</h1>

  return (
    <MainStyled>
      <div className="container">
        <form noValidate>
          <label htmlFor="name" aria-label="Enter the name of the city you want to find">
            <input type="text" value={urlNameFilter} onChange={(e) => {
              setUrlNameFilter(e.currentTarget.value)
            }} name="name" placeholder="Search for a country…" id="name"/>  
          </label>
          <select onChange={(e) => {
            setUrlRegion(e.currentTarget.selectedOptions[0].value)
          }}>
            <option defaultValue={"Filter by Region"} style={{display: "none"}}>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        <section id="countries">
          {
            objData && <Country data={objData} />
          } 
        </section>
      </div>
    </MainStyled>
  )
};              