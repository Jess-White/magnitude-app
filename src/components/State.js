import React from "react";

function handleToggleState() {
  const toggleState = toggleState;
  toggleState === !toggleState

}



function State({state}) {
  return (
        <div onClick={handleToggleState()}>State: {state.state}>
          <div>
          {this.toggleState === true && 
            <h4>Number of deaths:  <span style={{color: "red"}}>{state.death}</span></h4>
            <h4>Number of positive tests:  <span style={{color: "red"}}>{state.positive}</span></h4>
            <h4>Number of negative tests:  <span style={{color: "red"}}>{state.negative}</span></h4>
            <h4>Number of tests total:  <span style={{color: "red"}}>{state.total}</span></h4>
            <h4>Last updated:  <span style={{color: "red"}}>{state.date}</span></h4>
            }
          </div>
        </div>
  )
    
}

export default State;