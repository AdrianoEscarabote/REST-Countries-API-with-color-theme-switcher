import { useEffect, useState, DetailedHTMLProps, HTMLAttributes } from "react";
import { MainStyled } from "../styles/MainStyled";
import Country from "./Country";
import useFetch from "../custom/useFetch";

interface Data {
  name: {common: string},
  flags: {svg: string},
  region: string,
  capital: string,  
  population: string,
  index: number
}

export const Main = () => {

  let objData: Data[] = []
    
  const {data, loading, error} = useFetch("https://restcountries.com/v3.1/all");

  if (loading !== true) {
    objData = data
    console.log(objData)
  } 
  if (error) return <h1>{error}</h1>
  
  return (
    <MainStyled>
      <div className="container">
        <form noValidate>
          <label htmlFor="name" aria-label="Enter the name of the city you want to find">
            <input type="text" name="name" placeholder="Search for a country…" id="name"/>  
          </label>
          <select name="cars" id="cars">
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
}              