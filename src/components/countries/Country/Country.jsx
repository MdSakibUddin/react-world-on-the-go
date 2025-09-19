import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);

  //   console.log(country.area.area);
  //Event Handler for button
  const handleVisited = () => {
    //if else condition(basic)
    //System-1
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    //Using ternary operator
    //System-2
    // setVisited(visited ? false : true);

    //System-3
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    // <div
    //   className={`country ${
    //     visited ? "country-visited" : "country-not-visited"
    //   }`}
    <div className={`country ${visited && "country-visited"} flag`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <h4>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}
      </h4>
      <h3>Capital: {country.capital.capital}</h3>
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlag(country?.flags?.flags?.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
