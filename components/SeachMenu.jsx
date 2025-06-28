

export default function SeachMenu({setquery}) {
  return (
    <select class="filter-by-region" onChange={(e)=>setquery(e.target.value.toLowerCase())}>
    <option hidden>filter by region</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
    
</select>
  )
}
