import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import GridMap from './GridMap';
// import { Bar } from 'react-chartjs-2';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import HistoricLineChart from './HistoricLineChart';
import HistoricDeathIncreases from './HistoricDeathIncreases';

function NationalData() {

  const [hidden, setHidden] = useState(false);
  const [nationalHistoricData, setNationalHistoricData] = useState([])
  const [todaysNationalData, setTodaysNationalData] = useState({})
  const toggle = () => setHidden(!hidden);

  function fetchHistoricData() {
    fetch('https://api.covidtracking.com/v1/us/daily.json')
      .then(response => response.json())
      .then(response => {
        const nationalCovidData = response;
        const todaysData = response.shift();
        setNationalHistoricData(nationalCovidData.reverse());
        setTodaysNationalData(todaysData);
      })
  }

  const [visibleBar, setVisibleBar] = useState(false);
  const [visibleDoughnut, setVisibleDoughnut] = useState(false);
  const [visibleHistoricLineChart, setVisibleHistoricLineChart] = useState(false);
  const [visibleHistoricDeathIncrease, setVisibleHistoricDeathIncrease] = useState(false);

  const barFunction = () => {
    setVisibleBar(true);
    setVisibleDoughnut(false);
    setVisibleHistoricLineChart(false);
    setVisibleHistoricDeathIncrease(false);
    // console.log("word")
  }

  const donughtFunction = () => {
    setVisibleBar(false);
    setVisibleDoughnut(true);
    setVisibleHistoricLineChart(false);
    setVisibleHistoricDeathIncrease(false);
    // console.log("donu")
  }

  const historyFunction = () => {
    setVisibleBar(false);
    setVisibleDoughnut(false);
    setVisibleHistoricLineChart(true);
    setVisibleHistoricDeathIncrease(false);
    // console.log("history")
  }

  const deathFunction = () => {
    setVisibleBar(false);
    setVisibleDoughnut(false);
    setVisibleHistoricLineChart(false);
    setVisibleHistoricDeathIncrease(true);
    // console.log("death")
  }

  useEffect(() => {
    fetchHistoricData()
  }, [])

  return (
    <div>
      <button className="btn-default" onClick={toggle}>National Data</button>
      <Modal isOpen={hidden} toggle={toggle}>
        <ModalHeader toggle={toggle}>Daily National Data</ModalHeader>
        <ModalBody>

          <h4>Number of deaths: <span style={{ color: "red" }}>{todaysNationalData.death ? todaysNationalData.death.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'error'}</span></h4>
          <h4>Positive results: <span style={{ color: "red" }}>{todaysNationalData.positive ? todaysNationalData.positive.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'error'}</span></h4>
          <h4>Negative results: <span style={{ color: "red" }}>{todaysNationalData.negative ? todaysNationalData.negative.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'error'}</span></h4>
          <h4>Total test results: <span style={{ color: "red" }}>{todaysNationalData.totalTestResults ? todaysNationalData.totalTestResults.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'error'}</span></h4>
          <button type="button" className="btn btn-secondary" onClick={barFunction}>Test Results Bar Chart</button>
          <button type="button" className="btn btn-secondary" onClick={donughtFunction}>Test Results Pie Chart</button>
          <button type="button" className="btn btn-secondary" onClick={historyFunction}>Deaths</button>
          <button type="button" className="btn btn-secondary" onClick={deathFunction}>Death Increase/Decrease</button>
          {visibleBar ? (
            <BarChart data={todaysNationalData} />
          ) : (null)
          }
          {visibleDoughnut ? (
            <DoughnutChart data={todaysNationalData} />
          ) : (null)
          }
          {visibleHistoricLineChart ? (
            <HistoricLineChart data={nationalHistoricData} />
          ) : (null)
          }
          {visibleHistoricDeathIncrease ? (
            <HistoricDeathIncreases data={nationalHistoricData} />
          ) : (null)
          }


        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )

}

export default NationalData;
