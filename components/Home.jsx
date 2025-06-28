
import SearchBar from "./SearchBar";
import SearchMenu from "./SeachMenu"
import CountriesList from "./CountriesList";
// import "../App.css"
import { useState } from "react";

export default function Home() {
    const[query ,setQuery] = useState("")
  return (
    <>
   
    
    <main>
    <div className="search-filter-container">
    <SearchBar setquery = {setQuery}/>
    <SearchMenu setquery = {setQuery} />
     </div>
     <CountriesList query={query} />
    </main>
   



    </>
  )
}
