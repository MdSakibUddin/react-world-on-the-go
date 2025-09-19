import React, { use, useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesContent = use(countriesPromise);
  const countries = countriesContent.countries;
  //   console.log(countries);

  //countries visited counted state
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Handle visited countries", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  //practicing lifting up the state
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };

  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h3>Total country visited: {visitedCountries.length}</h3>
      <h4>Total Flags Visited: {visitedFlags.length}</h4>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flag-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt="" />
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
