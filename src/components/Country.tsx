import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../custom/useFetch"
import { CountryStyled } from "../styles/Country";
import axios from "axios";

interface objData {
  flags: {svg: string},
  name: {common: string},
  nativeName: {random: {official: string}},
  domain: string
  population: string,
  region: string,
  subregion: string,
  capital: string,
  currencies: string[],
  languages: string[] | string
  borders: string[]
}

interface Data {
  setName: React.Dispatch<React.SetStateAction<string>>,
  nameToSearch: string | null,
  objData?: objData[]
}

interface imgProps {
  src: string,
  alt: string | undefined,
} 

const Img: React.FC<imgProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

interface Country {
  nativeName: string,
}

interface ApiResponse {
  nativeName: string
}

export const Country: React.FC<Data> = ({ setName, nameToSearch })  => {

  useEffect(() => {
    if (nameToSearch) {
      localStorage.setItem("nameToSearch", nameToSearch)
    }
  }, [])
    
  const [infos, setInfos] = useState<objData>({ 
    flags: {svg: ""},
    name: {common: ""},
    nativeName: {random: {official: ""}},
    domain: "",
    population: "",
    region: "",
    subregion: "",
    capital: "",
    currencies: [],
    languages: "",
    borders: []})

  const {data} = useFetch(`https://restcountries.com/v3.1/name/${nameToSearch ? nameToSearch : localStorage.getItem("nameToSearch")}`);

  useEffect(() => {
    if (data && data.length > 0) {
      const countryInfos = data.map((element: any) => ({
        flags: { svg: element.flags.svg },
        name: { common: element.name.common },
        nativeName: element.name.nativeName,
        domain: element.tld,
        population: element.population,
        region: element.region,
        subregion: element.subregion,
        capital: element.capital,
        borders: element.borders,
        currencies: element.currencies,
        languages: element.languages,
      }));
      setInfos(countryInfos[0]);
      setBorderList(countryInfos[0].borders)
    }
  }, [data])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const name = e.currentTarget.textContent
    if (name) {
      setName(name)
    }
  }

  const [bordersCountries, setBordersCountries] = useState<Country[]>([])
  const [borderList, setBorderList] = useState<string[]>(infos.borders)

  useEffect(() => {
    const getBorderCountryData = async () => {
      const countryDataList: Country[] = [];
      for (const border of borderList) {
        try {
          const response = await axios.get<ApiResponse>(`https://restcountries.com/v2/alpha/${border}`);
          countryDataList.push({ nativeName: response.data.nativeName });
        } catch (error) {
          console.error(error);
        }
      }
      setBordersCountries(countryDataList);
    };
    if (borderList) {
      getBorderCountryData();
    }
  }, [borderList]);

  return (
    <>
      {
        infos &&
        <CountryStyled className="singleCountry">
          <div className="container">
            <Link className="link_back" to="/">Back</Link>
            <div className="content">
              <div className="flag">
                <Img src={infos.flags.svg} alt="" aria-hidden="flag of the country" />
              </div>
              <div className="details">
                <h2>{infos.name.common}</h2>
                <div className="info">
                  <ul className="column">
                    <li><p>Native Name <span>{Object.values(infos.nativeName)[0].official}</span></p></li>
                    <li><p>Population <span>{infos.population}</span></p></li>
                    <li><p>Region <span>{infos.region}</span></p></li>
                    <li><p>Sub region <span>{infos.subregion}</span> </p></li>
                    <li><p>Capital <span>{infos.capital}</span></p></li>
                  </ul>
                  <ul className="column2">
                    <li><p>Top Level Domain <span>{infos.domain}</span> </p></li>
                    <li><p>Currencies <span>{Object.keys(infos.currencies).join(", ")}</span></p></li>
                    <li><p>Languages <span>{Object.values(infos.languages).join(", ")}</span></p></li>
                  </ul>
                </div>
                <div className="borders">
                  <p>Borders: { bordersCountries && borderList ? bordersCountries.map((country, index) => <Link to="/country" onClick={handleClick} key={index}>{country.nativeName}</Link>) : "No borders..." }</p>
                </div>
              </div>
            </div>
          </div>
        </CountryStyled> 
      }
    </>
  );
};