import React, { useEffect, useState } from "react";
// import countriesdata from "../countriesdata";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({query}) {

    const[countriesdata , setCountriesdata] = useState([])
  
   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all').then((res)=>{
        return res.json()
    }).then((data)=>{
        setCountriesdata(data)
         console.log(countriesdata)
    })
},[ ])

   
   

  const array =countriesdata.filter((country)=>country.name.common.toLowerCase().includes(query))
  .map((country) => {
    console.log(country);
    return (
      <CountryCard
        name={country.name.common}
        flag={country.flags.svg}
        population={Number(country.population).toLocaleString("en-IN")}
        region={country.region}
        capital={country.capital}
      />
    );
  });
  return countriesdata.length === 0 ? (
    <CountriesListShimmer />
  ) : (
    <div className="countries-container">{array}</div>
  );

}
