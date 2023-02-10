import {FunctionComponent} from "react"
import { CountryStyled } from "../styles/Country";

interface Data {
  name: { common: string },
  flags: {svg: string},
  region: string,
  capital: string,  
  population: string,
  index: number
}

interface CountryProps {
  data: Data[]
}

const Country: FunctionComponent<CountryProps> = ({ data }) => {

  return (
    <ul id="countries">
      <>
      {data.map((element, index) => {
        return (
          <CountryStyled key={index}>
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
          </CountryStyled>)
        })
      }
      </>
    </ul>
  );
};

export default Country;