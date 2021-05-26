import React from "react";
import State from "./State";

function StatesList({states}) {
  return (
    states.map((state, index) => {
      return <State state={state} key={index}/> 
    })
  ) 
}

export default StatesList;