import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import GridMap from './GridMap';
// import { Bar } from 'react-chartjs-2';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import HistoricLineChart from './HistoricLineChart';
import HistoricDeathIncreases from './HistoricDeathIncreases';

// Create onClick function that selects state when state is clicked and documentId into a variable

// Add whatever to modal function/component that plugs in that documentId variable

function State({ historicData, state, data, isOpen }) {

  const [hidden, setHidden] = useState(isOpen);
  const [visibleBar, setVisibleBar] = useState(false);
  const [visibleDoughnut, setVisibleDoughnut] = useState(false);
  const [visibleHistoricLineChart, setVisibleHistoricLineChart] = useState(false);
  const [visibleHistoricDeathIncrease, setVisibleHistoricDeathIncrease] = useState(false);

  const toggle = () => setHidden(!hidden);
  const toggleBar = () => setVisibleBar(!visibleBar);
  const toggleDoughnut = () => setVisibleDoughnut(!visibleDoughnut);
  const toggleHistoricLineChart = () => setVisibleHistoricLineChart(!visibleHistoricLineChart);
  const toggleHistoricDeathIncrease = () => setVisibleHistoricDeathIncrease(!visibleHistoricDeathIncrease);

  return (
    <div>

      <Modal isOpen={hidden} toggle={toggle}>
        <ModalHeader toggle={toggle}>{state.state}</ModalHeader>
        <ModalBody>
          <h4>Number of deaths: <span style={{ color: "red" }}>{state.death.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
          <h4>Positive results: <span style={{ color: "red" }}>{state.positive.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
          <h4>Negative results: <span style={{ color: "red" }}>{state.negative.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
          <h4>Total test results: <span style={{ color: "red" }}>{state.totalTestResults.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h4>
          <button onClick={toggleBar} >Test Results Bar Chart</button>
          <button onClick={toggleDoughnut}>Test Results Pie Chart</button>
          <button onClick={toggleHistoricLineChart}>Deaths</button>
          <button onClick={toggleHistoricDeathIncrease}>Death Increase/Decrease</button>
          {visibleBar ? (
            <BarChart data={data} 
              // toggleBar={ !visibleBar ? setVisibleBar() : null }
              toggleDoughnut={ visibleDoughnut ? setVisibleDoughnut() : null}
              toggleHistoricLineChart={visibleHistoricLineChart ? setVisibleHistoricLineChart() : null}
              toggleHistoricDeathIncrease={ visibleHistoricDeathIncrease ? setVisibleHistoricDeathIncrease() : null}
            />
            
          ) : (null)
          }
          {visibleDoughnut ? (
            <DoughnutChart data={data} 
              
              // toggleDoughnut={ !visibleDoughnut ? setVisibleDoughnut() : null }
              toggleBar={ visibleBar ? setVisibleBar() : null }
              toggleHistoricLineChart={visibleHistoricLineChart ? setVisibleHistoricLineChart() : null}
              toggleHistoricDeathIncrease={ visibleHistoricDeathIncrease ? setVisibleHistoricDeathIncrease() : null}
            />
          ) : (null)
          }
          {visibleHistoricLineChart ? (
            <HistoricLineChart data={historicData} />
          ) : (null)
          }
          {visibleHistoricDeathIncrease ? (
            <HistoricDeathIncreases data={historicData} />
          ) : (null)
          }
          
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button> */}
          <Button color="secondary" onClick={toggle}>Close</Button>
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