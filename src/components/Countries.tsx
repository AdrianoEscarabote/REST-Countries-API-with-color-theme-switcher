import {FunctionComponent, SetStateAction } from "react"
import { Link } from "react-router-dom";
import { useName, useSetName } from "../context";
import { CountriesStyled } from "../styles/Countries";

interface Data {
  name: { common: string },
  flags: {svg: string},
  region: string,
  capital: string,  
  population: string,
  index: number
}

interface CountryProps {
  setName: React.Dispatch<React.SetStateAction<string>>,
  data: Data[]
}

const Countries: FunctionComponent<CountryProps> = ({ setName, data }) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const name = e.currentTarget.children[1]?.textContent
    if (name) {
      setName(name)
    }
  }
  
  return (
    <ul id="countries">
        {data.map((element, index) => {
          return (
            <CountriesStyled key={index}>
              <Link to="/country" onClick={handleClick}>
                <div className="img">
                  <img src={element.flags.svg} alt="" aria-hidden="true" />
                </div>
                
                <h2>{element.name.common}</h2>
                <ul className="about">
                  <li key={index + 0.1}>
                    <p>Population: <span>{element.population}</span></p>
                  </li>
                  <li key={index + 0.2}>
                    <p>Region: <span>{element.region}</span></p>
                  </li>
                  <li key={index + 0.3}>
                    <p>Capital: <span>{element.capital}</span></p>
                  </li>
                </ul>
              </Link>
            </CountriesStyled>)
          })
        }
    </ul>
  );
};

export default Countries;