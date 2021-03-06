import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import HistoricLineChart from './HistoricLineChart';
import HistoricDeathIncreases from './HistoricDeathIncreases';

// Create onClick function that selects state when state is clicked and documentId into a variable

// Add data to modal function/component that plugs in that documentId variable

function State({ historicData, state, data, isOpen }) {

  const [hidden, setHidden] = useState(isOpen);
  const [visibleBar, setVisibleBar] = useState(false);
  const [visibleDoughnut, setVisibleDoughnut] = useState(false);
  const [visibleHistoricLineChart, setVisibleHistoricLineChart] = useState(false);
  const [visibleHistoricDeathIncrease, setVisibleHistoricDeathIncrease] = useState(false);

  const toggle = () => setHidden(!hidden);

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

  // console.log(visibleBar, "bar")
  // console.log(visibleDoughnut, "doughnut")
  // console.log(visibleHistoricLineChart, "linechart")
  // console.log(visibleHistoricDeathIncrease, "death")
  return (
    <div>

      <Modal isOpen={hidden} toggle={toggle}>
        <ModalHeader toggle={toggle}>{state.state}</ModalHeader>
        <ModalBody>
          {state.death ?
            <h4>Number of deaths: <span style={{ color: "red" }}>{state.death.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
            :
            null
          }
          {state.positve ?
            <h4>Positive results: <span style={{ color: "red" }}>{state.positive.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
            :
            null
          }
          {state.negative ?
          <h4>Negative results: <span style={{ color: "red" }}>{state.negative.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
            :
            null
          }
          {state.totalTestResults ?
          <h4>Total test results: <span style={{ color: "red" }}>{state.totalTestResults.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
            :
            null
          }
          <div className="btn-group">
            <button type="button" className="btn btn-secondary" onClick={barFunction} >Test Results Bar Chart</button>
            <button type="button" className="btn btn-secondary" onClick={donughtFunction}>Test Results Pie Chart</button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary" onClick={historyFunction}>Deaths</button>
            <button type="button" className="btn btn-secondary" onClick={deathFunction}>Death Increase/Decrease</button>
          </div>
          {visibleBar ? (<BarChart data={data} />) : (null)}
          {visibleDoughnut ? (<DoughnutChart data={data} />) : (null)}
          {visibleHistoricLineChart ? (<HistoricLineChart data={historicData} />) : (null)}
          {visibleHistoricDeathIncrease ? (<HistoricDeathIncreases data={historicData} />) : (null)}

        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button> */}
          <Button className="close-btn" color="danger" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>

    </div>
  )

}

export default State;

// {hidden ? (
//   <div>
//     <Button>Push</Button>
//     <h4>Number of deaths: <span style={{ color: "red" }}>{state.death}</span></h4>
//     <h4>Positive results: <span style={{ color: "red" }}>{state.positive}</span></h4>
//     <h4>Total test results: <span style={{ color: "red" }}>{state.totalTestResults}</span></h4>
//   </div>
// ) : (
//     null)}