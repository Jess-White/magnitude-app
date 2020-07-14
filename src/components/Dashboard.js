import React, { useEffect, useState } from "react";
import StatesList from "./StatesList";

function Dashboard() {

  const [covidData, setCovidData] = useState([])

  function fetchData() {
    fetch("https://covidtracking.com/api/states")
      .then(response => response.json())
      .then(response => setCovidData(response))
  }

  useEffect(() => {
    fetchData() 
  }, [])

  return (
    <div className="dashboard">
      <h1>This is our dashboard.</h1>

      <StatesList states={covidData}/>

    </div>

    )

}

export default Dashboard;