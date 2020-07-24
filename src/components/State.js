import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GridMap from './GridMap';

// Create onClick function that selects state when state is clicked and documentId into a variable

// Add whatever to modal function/component that plugs in that documentId variable

function State({ state, isOpen }) {

  // state = currentState;

  const [hidden, setHidden] = useState(isOpen);

  const toggle = () => setHidden(!hidden);

  return (
    <div>
      
      <Modal isOpen={hidden} toggle={toggle}>
        <ModalHeader toggle={toggle}>{state.state}</ModalHeader>
        <ModalBody>
          <h4>Number of deaths: <span style={{ color: "red" }}>{state.death}</span></h4>
          <h4>Positive results: <span style={{ color: "red" }}>{state.positive}</span></h4>
          <h4>Negative results: <span style={{ color: "red" }}>{state.negative}</span></h4>
          <h4>Total test results: <span style={{ color: "red" }}>{state.totalTestResults}</span></h4>
          <img src="https://picsum.photos/200"></img>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
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