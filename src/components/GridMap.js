import React, { useState } from 'react';
import State from './State';
// import Chart from './Chart';

function GridMap({ states }) {
  const [stateComponent, setStateComponent] = useState(null);

  function handleClick(e) {

    const clickedState = e.target.id;

    const matchedState = states.find((state) => state.state === clickedState)

    if (matchedState) {
      fetch(`https://api.covidtracking.com/v1/states/${matchedState.state.toLowerCase()}/daily.json`)
        .then(response => response.json())
        .then(response => {
          const historicData = response;
          // console.log(historicData);
          setStateComponent(<State historicData={historicData.reverse()} data={matchedState} state={matchedState} key={matchedState.state} isOpen={true} />);
        })
    } else {
      // console.log("whoops!");
    }
  }

  function checkStateExists(currentState) {
    return states.find((state) => state.state === currentState)
  }

  return (
    <div className="flex-container">
      <div className="grid-container ">

        <div style={checkStateExists("AK") ? { display: "flex" } : { opacity: .1 }} id="AK" onClick={handleClick} className="state">AK</div>
        <div style={checkStateExists("ME") ? { display: "flex" } : { opacity: .1 }} id="ME" onClick={handleClick} className="state">ME</div>
        <div style={checkStateExists("VT") ? { display: "flex" } : { opacity: .1 }} id="VT" onClick={handleClick} className="state">VT</div>
        <div style={checkStateExists("NH") ? { display: "flex" } : { opacity: .1 }} id="NH" onClick={handleClick} className="state">NH</div>
        <div style={checkStateExists("WA") ? { display: "flex" } : { opacity: .1 }} id="WA" onClick={handleClick} className="state">WA</div>
        <div style={checkStateExists("ID") ? { display: "flex" } : { opacity: .1 }} id="ID" onClick={handleClick} className="state">ID</div>
        <div style={checkStateExists("MT") ? { display: "flex" } : { opacity: .1 }} id="MT" onClick={handleClick} className="state">MT</div>
        <div style={checkStateExists("ND") ? { display: "flex" } : { opacity: .1 }} id="ND" onClick={handleClick} className="state">ND</div>
        <div style={checkStateExists("MN") ? { display: "flex" } : { opacity: .1 }} id="MN" onClick={handleClick} className="state">MN</div>
        <div style={checkStateExists("WI") ? { display: "flex" } : { opacity: .1 }} id="WI" onClick={handleClick} className="state">WI</div>
        <div style={checkStateExists("MI") ? { display: "flex" } : { opacity: .1 }} id="MI" onClick={handleClick} className="state">MI</div>
        <div style={checkStateExists("NY") ? { display: "flex" } : { opacity: .1 }} id="NY" onClick={handleClick} className="state">NY</div>
        <div style={checkStateExists("MA") ? { display: "flex" } : { opacity: .1 }} id="MA" onClick={handleClick} className="state">MA</div>
        <div style={checkStateExists("CT") ? { display: "flex" } : { opacity: .1 }} id="CT" onClick={handleClick} className="state">CT</div>
        <div style={checkStateExists("RI") ? { display: "flex" } : { opacity: .1 }} id="RI" onClick={handleClick} className="state">RI</div>
        <div style={checkStateExists("OR") ? { display: "flex" } : { opacity: .1 }} id="OR" onClick={handleClick} className="state">OR</div>
        <div style={checkStateExists("NV") ? { display: "flex" } : { opacity: .1 }} id="NV" onClick={handleClick} className="state">NV</div>
        <div style={checkStateExists("WY") ? { display: "flex" } : { opacity: .1 }} id="WY" onClick={handleClick} className="state">WY</div>
        <div style={checkStateExists("SD") ? { display: "flex" } : { opacity: .1 }} id="SD" onClick={handleClick} className="state">SD</div>
        <div style={checkStateExists("IA") ? { display: "flex" } : { opacity: .1 }} id="IA" onClick={handleClick} className="state">IA</div>
        <div style={checkStateExists("IL") ? { display: "flex" } : { opacity: .1 }} id="IL" onClick={handleClick} className="state">IL</div>
        <div style={checkStateExists("IN") ? { display: "flex" } : { opacity: .1 }} id="IN" onClick={handleClick} className="state">IN</div>
        <div style={checkStateExists("OH") ? { display: "flex" } : { opacity: .1 }} id="OH" onClick={handleClick} className="state">OH</div>
        <div style={checkStateExists("PA") ? { display: "flex" } : { opacity: .1 }} id="PA" onClick={handleClick} className="state">PA</div>
        <div style={checkStateExists("NJ") ? { display: "flex" } : { opacity: .1 }} id="NJ" onClick={handleClick} className="state">NJ</div>
        <div style={checkStateExists("CA") ? { display: "flex" } : { opacity: .1 }} id="CA" onClick={handleClick} className="state">CA</div>
        <div style={checkStateExists("UT") ? { display: "flex" } : { opacity: .1 }} id="UT" onClick={handleClick} className="state">UT</div>
        <div style={checkStateExists("CO") ? { display: "flex" } : { opacity: .1 }} id="CO" onClick={handleClick} className="state">CO</div>
        <div style={checkStateExists("NE") ? { display: "flex" } : { opacity: .1 }} id="NE" onClick={handleClick} className="state">NE</div>
        <div style={checkStateExists("MO") ? { display: "flex" } : { opacity: .1 }} id="MO" onClick={handleClick} className="state">MO</div>
        <div style={checkStateExists("KY") ? { display: "flex" } : { opacity: .1 }} id="KY" onClick={handleClick} className="state">KY</div>
        <div style={checkStateExists("WV") ? { display: "flex" } : { opacity: .1 }} id="WV" onClick={handleClick} className="state">WV</div>
        <div style={checkStateExists("VA") ? { display: "flex" } : { opacity: .1 }} id="VA" onClick={handleClick} className="state">VA</div>
        <div style={checkStateExists("MD") ? { display: "flex" } : { opacity: .1 }} id="MD" onClick={handleClick} className="state">MD</div>
        <div style={checkStateExists("DE") ? { display: "flex" } : { opacity: .1 }} id="DE" onClick={handleClick} className="state">DE</div>
        <div style={checkStateExists("AZ") ? { display: "flex" } : { opacity: .1 }} id="AZ" onClick={handleClick} className="state">AZ</div>
        <div style={checkStateExists("NM") ? { display: "flex" } : { opacity: .1 }} id="NM" onClick={handleClick} className="state">NM</div>
        <div style={checkStateExists("KS") ? { display: "flex" } : { opacity: .1 }} id="KS" onClick={handleClick} className="state">KS</div>
        <div style={checkStateExists("AR") ? { display: "flex" } : { opacity: .1 }} id="AR" onClick={handleClick} className="state">AR</div>
        <div style={checkStateExists("TN") ? { display: "flex" } : { opacity: .1 }} id="TN" onClick={handleClick} className="state">TN</div>
        <div style={checkStateExists("NC") ? { display: "flex" } : { opacity: .1 }} id="NC" onClick={handleClick} className="state">NC</div>
        <div style={checkStateExists("SC") ? { display: "flex" } : { opacity: .1 }} id="SC" onClick={handleClick} className="state">SC</div>
        <div style={checkStateExists("DC") ? { display: "flex" } : { opacity: .1 }} id="DC" onClick={handleClick} className="state">DC</div>
        <div style={checkStateExists("OK") ? { display: "flex" } : { opacity: .1 }} id="OK" onClick={handleClick} className="state">OK</div>
        <div style={checkStateExists("LA") ? { display: "flex" } : { opacity: .1 }} id="LA" onClick={handleClick} className="state">LA</div>
        <div style={checkStateExists("MS") ? { display: "flex" } : { opacity: .1 }} id="MS" onClick={handleClick} className="state">MS</div>
        <div style={checkStateExists("AL") ? { display: "flex" } : { opacity: .1 }} id="AL" onClick={handleClick} className="state">AL</div>
        <div style={checkStateExists("GA") ? { display: "flex" } : { opacity: .1 }} id="GA" onClick={handleClick} className="state">GA</div>
        <div style={checkStateExists("HI") ? { display: "flex" } : { opacity: .1 }} id="HI" onClick={handleClick} className="state">HI</div>
        <div style={checkStateExists("TX") ? { display: "flex" } : { opacity: .1 }} id="TX" onClick={handleClick} className="state">TX</div>
        <div style={checkStateExists("FL") ? { display: "flex" } : { opacity: .1 }} id="FL" onClick={handleClick} className="state">FL</div>
        <div style={checkStateExists("PR") ? { display: "flex" } : { opacity: .1 }} id="PR" onClick={handleClick} className="state">PR</div>
        {stateComponent}

      </div>
    </div>
  )
}

export default GridMap;