import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../custom/useFetch"
import { CountryStyled } from "../styles/Country";

interface objData {
  flags: {svg: string},
  name: {common: string},
  nativeName: {nativeName: string},
  population: string,
  region: string,
  subregion: string,
  capital: string,
  currencies: "",
  languages: string[] | string
  borders: string[]
}

interface Data {
  nameToSearch: string,
  objData?: objData[]
}

interface imgProps {
  src: string,
  alt: string | undefined,
} 

const Img: React.FC<imgProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

export const Country: React.FC<Data> = ({  nameToSearch })  => {
    
  const [infos, setInfos] = useState<objData>({ 
    flags: {svg: ""},
    name: {common: ""},
    nativeName: {nativeName: ""},
    population: "",
    region: "",
    subregion: "",
    capital: "",
    currencies: "",
    languages: "",
    borders: []})

  const {data} = useFetch(`https://restcountries.com/v3.1/name/${nameToSearch}`);

  useEffect(() => {
    if (data && data.length > 0) {
      const countryInfos = data.map((element: any) => ({
        flags: { svg: element.flags.svg },
        name: { common: element.name.common },
        nativeName: element.official,
        population: element.population,
        region: element.region,
        subregion: element.subregion,
        capital: element.capital,
        borders: element.borders,
        currencies: element.currencies.BRL.name,
        languages: element.languages.por
      }));
      setInfos(countryInfos[0]);
    }
  }, [data])
  
  return (
    <>
      {
        infos &&
        <CountryStyled>
          <div className="container">
            <Link to="/">Back</Link>
            <div className="content">
              <div className="flag">
                <Img src={infos.flags.svg} alt="" aria-hidden="flag of the country" />
              </div>
              <div className="details">
                <h2>{infos.name.common}</h2>
                <div className="info">
                  <ul className="column">
                    <li><p>Native Name <span>{}</span></p></li>
                    <li><p>Population <span>{infos.population}</span></p></li>
                    <li><p>Region <span>{infos.region}</span></p></li>
                    <li><p>Sub region <span>{infos.subregion}</span> </p></li>
                    <li><p>Capital <span>{infos.capital}</span></p></li>
                  </ul>
                  <ul className="column2">
                    <li><p>Top Level Domain <span>{}</span> </p></li>
                    <li><p>Currencies <span>{infos.currencies}</span></p></li>
                    <li><p>Languages <span>{infos.languages}</span></p></li>
                  </ul>
                </div>
                <div className="borders">
                  <p>Borders: { infos.borders.map((item, index) => <span key={index}>{item}</span>) }</p>
                </div>
              </div>
            </div>
          </div>
        </CountryStyled> 
      }
    </>
  );
};