import React, { useEffect, useState } from 'react'

import './CountryDetail.css'
import { Link, useParams } from 'react-router-dom'


export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get('name')
  const params = useParams()
  const countryName = params.country
  console.log(countryName);

  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
          borders: [ ]
        })
        if(!data.borders){
          data.borders = []
        }
        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
          setCountryData((prevState) => ({...prevState, borders }))
        })
      })
      .catch((err) => {
        setNotFound(true)
      })
  }, [countryName])

  if(notFound) {
    return <div>Country Not Found</div>
  }

  return countryData === null ? (
    'loading...'
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>{border}</Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// export default function CountryDetail() {
//   const params = useParams()
//   const countryName = params.country

//   const [countryData, setCountryData] = useState(null)
//   const [notFound, setNotFound] = useState(false)

//   console.log(countryData?.borders);

//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
//       .then((res) => res.json())
//       .then(([data]) => {
//         setCountryData({
//           name: data.name.common,
//           nativeName: Object.values(data.name.nativeName)[0].common,
//           population: data.population,
//           region: data.region,
//           subregion: data.subregion,
//           capital: data.capital,
//           flag: data.flags.svg,
//           tld: data.tld,
//           languages: Object.values(data.languages).join(', '),
//           currencies: Object.values(data.currencies)
//             .map((currency) => currency.name)
//             .join(', '),
//           borders: []
//         })

//         if(!data.borders) {
//           data.borders = []
//         }

//         Promise.all(data.borders.map((border) => {
//           return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
//           .then((res) => res.json())
//           .then(([borderCountry]) => borderCountry.name.common)
//         })).then((borders) => {
//           setCountryData((prevState) => ({...prevState, borders }))
//         })
//       })
//       .catch((err) => {
//         console.log(err);
//         setNotFound(true)
//       })
//   }, [countryName])

//   if(notFound) {
//     return <div>Country Not Found</div>
//   }

//   return countryData === null ? (
//     'loading...'
//   ) : (
//     <main>
//       <div className="country-details-container">
//         <span className="back-button" onClick={() => history.back()}>
//           <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
//         </span>
//         <div className="country-details">
//           <img src={countryData.flag} alt={`${countryData.name} flag`} />
//           <div className="details-text-container">
//             <h1>{countryData.name}</h1>
//             <div className="details-text">
//               <p>
//                 <b>Native Name: {countryData.nativeName}</b>
//                 <span className="native-name"></span>
//               </p>
//               <p>
//                 <b>
//                   Population: {countryData.population.toLocaleString('en-IN')}
//                 </b>
//                 <span className="population"></span>
//               </p>
//               <p>
//                 <b>Region: {countryData.region}</b>
//                 <span className="region"></span>
//               </p>
//               <p>
//                 <b>Sub Region: {countryData.subregion}</b>
//                 <span className="sub-region"></span>
//               </p>
//               <p>
//                 <b>Capital: {countryData.capital.join(', ')}</b>
//                 <span className="capital"></span>
//               </p>
//               <p>
//                 <b>Top Level Domain: {countryData.tld}</b>
//                 <span className="top-level-domain"></span>
//               </p>
//               <p>
//                 <b>Currencies: {countryData.currencies}</b>
//                 <span className="currencies"></span>
//               </p>
//               <p>
//                 <b>Languages: {countryData.languages}</b>
//                 <span className="languages"></span>
//               </p>
//             </div>
//            { countryData.borders.length !== 0 && <div className="border-countries">
//               <b>Border Countries: </b>&nbsp;
//               {
//                 countryData.borders.map((border) => <Link key={border} to={`./${border}`}>{border}</Link>)
//               } 
//             </div>}
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }