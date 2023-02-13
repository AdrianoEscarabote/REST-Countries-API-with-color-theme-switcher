import { MainStyled } from "../styles/MainStyled";
import Country from "./Country";
import useFetch from "../custom/useFetch";
import { Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import exclamationMark from "../assets/exclamation-mark.png";

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
  const [selectClass, setSelectClass] = useState("");
  const [urlNameFilter, setUrlNameFilter] = useState("")

  useEffect(() => {
    if (effectRan.current === true) {
      try {
        if (urlRegion === "") {
          refetch("https://restcountries.com/v3.1/all")
        } else {
          refetch(`https://restcountries.com/v3.1/region/${urlRegion}`);
        }
      } catch (e) {
        console.log(error)
      }
    };
    return () => {
      effectRan.current = true;
    };
  }, [urlRegion]);

  useEffect(() => {
    if (effectRan.current === true) {
      if ([""].includes(urlNameFilter)) {
        refetch(`https://restcountries.com/v3.1/all`)
      } else {
        refetch(`https://restcountries.com/v3.1/name/${urlNameFilter}`)
      }
    };
    return () => {
      effectRan.current = true;
    };
  }, [urlNameFilter]);
    
  if (!error) {
    objData = data    
  }
  
  return (
    <MainStyled>
      <div className="container">
        <form noValidate>
          <label htmlFor="name" aria-label="Enter the name of the city you want to find">
            <input type="text" value={urlNameFilter} onChange={(e) => {
              setUrlNameFilter(e.currentTarget.value)
            }} name="name" placeholder="Search for a country…" id="name"/>  
          </label>
          <select onClick={() => 
            selectClass === "open" ? setSelectClass("") : setSelectClass("open")
          } className={selectClass} onChange={(e) => {
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
        <section>
          {
            objData && <Country data={objData} />
          } 
          {
            error ? 
            <div className="error"> 
              <img src={exclamationMark} alt="" aria-hidden="true" />
              <p className="error_p">We couldn't find the country with the name {urlNameFilter} !</p> 
            </div> 
            : null
          }
        </section>
      </div>
    </MainStyled>
  )
};              