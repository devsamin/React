import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedcountry] = useState([]);
  const [visitedflags, setvisitedflag] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handelvisitedcountry = (country) => {
    const newCountry = [...visitedCountry, country];
    setVisitedcountry(newCountry);
  };
  const addvisitedflag = flag =>{
    const newflag = [...visitedflags, flag]
    setvisitedflag(newflag)
  }
  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      <div>
        <h3>Visited Country : {visitedCountry.length}</h3>
        <ul>
          {visitedCountry.map(country => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      {/* Add Visited Flag */}
      <div className="flag-container">
        {
            visitedflags.map((flag, idx)=><img key={idx} src={flag} alt="" />)
        }
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handelvisitedcountry={handelvisitedcountry}
            addvisitedflag={addvisitedflag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
