import React from 'react'
import { Link} from 'react-router-dom'

export default function CountryCard({name,flag,population,region,capital}) {
  return (
    <>
  <Link to={`./${name}`} className="country-card">
    <img src={flag} alt="flag" />
    <div className="card-text">
    <h3> <b>{name}</b> </h3>
      <p>
        <b>Population :</b>{population}
      </p>
      <p>
        <b>Region :</b>{region}
      </p>
      <p>
        <b>Capital :</b>{capital}
      </p>
    </div>
  </Link>{" "}
  --&gt;
</>

   
  )
}
