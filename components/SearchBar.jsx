import React from "react";

export default function SearchBar({setquery}) {
  return (
    
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="search for a country...." onChange={(e) => setquery(e.target.value.toLowerCase())} />
      </div>
     
    
  );
}
