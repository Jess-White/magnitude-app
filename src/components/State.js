import React from "react";

function State({state}) {
  return (
    <div>
      <h4>State: {state.state}</h4>
      <h4>Number of deaths:  <span style={{color: "red"}}>{state.death}</span></h4>
    </div>
  )
    
}

export default State;