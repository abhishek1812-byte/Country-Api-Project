import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import SearchMenu from "./components/SeachMenu"
// import CountriesList from "./components/CountriesList";
import "./App.css"
import {Outlet} from "react-router-dom"

export default function App() {
   
  return (
    <>
    <Header/>
    <Outlet/>
    
 
    </>
  )
}
