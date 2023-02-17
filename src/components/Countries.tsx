import {FunctionComponent } from "react"
import { Link } from "react-router-dom";
import { CountriesStyled } from "../styles/Countries";

interface Data {
  name: { common: string },
  flags: {png: string},
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
    const name = e.currentTarget.children[1]?.children[0].textContent
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
                  <img src={element.flags.png} alt="" aria-hidden="true" />
                </div>
                
                <div className="text">
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
                </div>
              </Link>
            </CountriesStyled>)
          })
        }
    </ul>
  );
};

export default Countries;