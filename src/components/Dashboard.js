import React, { useEffect, useState } from "react";
import Search from './Search';
import StatesList from "./StatesList";

function Dashboard() {

  const [covidData, setCovidData] = useState([])
  const [query, setQuery] = useState('')

  function fetchData() {
    fetch("https://covidtracking.com/api/states")
      .then(response => response.json())
      .then(response => setCovidData(response))
  }

  function handleChange(event) {
    console.log(event.target.value);
    setQuery(event.target.value)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="dashboard">

      <Search query={query} handleChange={handleChange} />

      <h1>This is our dashboard.</h1>

      <StatesList states={covidData.filter(state => state.state.includes(query))} />
    </div>

  )

}

export default Dashboard;