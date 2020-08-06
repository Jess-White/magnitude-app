import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import GridMap from './GridMap';
// import { Bar } from 'react-chartjs-2';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import HistoricLineChart from './HistoricLineChart';

function NationalData() {

  const [hidden, setHidden] = useState(false);
  const [nationalHistoricData, setNationalHistoricData] = useState([])
  const [todaysNationalData, setTodaysNationalData] = useState({})
  const toggle = () => setHidden(!hidden);

  function fetchHistoricData() {
    fetch('https://covidtracking.com/api/v1/us/daily.json')
      .then(response => response.json())
      .then(response => {
        const nationalCovidData = response;
        const todaysData = response.shift();
        setNationalHistoricData(nationalCovidData);
        setTodaysNationalData(todaysData);
      })
  }

  // console.log(nationalHistoricData);
  // console.log(todaysNationalData);

  useEffect(() => {
    fetchHistoricData()
  }, [])

  return (
    <div>
      <button onClick={toggle}>National Data</button>
      <Modal isOpen={hidden} toggle={toggle}>
        <ModalHeader toggle={toggle}>National Data</ModalHeader>
        <ModalBody>
          <h4>Number of deaths: <span style={{ color: "red" }}>{todaysNationalData.death}</span></h4>
          <h4>Positive results: <span style={{ color: "red" }}>{todaysNationalData.positive}</span></h4>
          <h4>Negative results: <span style={{ color: "red" }}>{todaysNationalData.negative}</span></h4>
          <h4>Total test results: <span style={{ color: "red" }}>{todaysNationalData.totalTestResults}</span></h4> */}
          <BarChart data={todaysNationalData} />
          <DoughnutChart data={todaysNationalData} />
          <HistoricLineChart data={nationalHistoricData} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )

}

export default NationalData;
