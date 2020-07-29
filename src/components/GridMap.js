import React, { useState } from 'react';
import State from './State';
// import Chart from './Chart';

function GridMap({ states }) {
  const [stateComponent, setStateComponent] = useState(null);

  function handleClick(e) {

    const clickedState = e.target.id;

    const matchedState = states.find((state) => state.state === clickedState)

    if (matchedState) {
      console.log("waffle");
      console.log(matchedState);
      fetch(`https://covidtracking.com/api/v1/states/${matchedState.state.toLowerCase()}/daily.json`)
        .then(response => response.json())
        .then(response => {
          const historicData = response;
          console.log(historicData);
        });
      setStateComponent(<State data={matchedState} state={matchedState} key={matchedState.state} isOpen={true} />);
      console.log(matchedState);
    } else {
      console.log("whoops!");
    }
  }


  return (
    <div className="grid-container">

      <div id="AK" onClick={handleClick} className="state">AK</div>
      <div id="ME" onClick={handleClick} className="state">ME</div>
      <div id="VT" onClick={handleClick} className="state">VT</div>
      <div id="NH" onClick={handleClick} className="state">NH</div>
      <div id="WA" onClick={handleClick} className="state">WA</div>
      <div id="ID" onClick={handleClick} className="state">ID</div>
      <div id="MT" onClick={handleClick} className="state">MT</div>
      <div id="ND" onClick={handleClick} className="state">ND</div>
      <div id="MN" onClick={handleClick} className="state">MN</div>
      <div id="WI" onClick={handleClick} className="state">WI</div>
      <div id="MI" onClick={handleClick} className="state">MI</div>
      <div id="NY" onClick={handleClick} className="state">NY</div>
      <div id="MA" onClick={handleClick} className="state">MA</div>
      <div id="CT" onClick={handleClick} className="state">CT</div>
      <div id="RI" onClick={handleClick} className="state">RI</div>
      <div id="OR" onClick={handleClick} className="state">OR</div>
      <div id="NV" onClick={handleClick} className="state">NV</div>
      <div id="WY" onClick={handleClick} className="state">WY</div>
      <div id="SD" onClick={handleClick} className="state">SD</div>
      <div id="IA" onClick={handleClick} className="state">IA</div>
      <div id="IL" onClick={handleClick} className="state">IL</div>
      <div id="IN" onClick={handleClick} className="state">IN</div>
      <div id="OH" onClick={handleClick} className="state">OH</div>
      <div id="PA" onClick={handleClick} className="state">PA</div>
      <div id="NJ" onClick={handleClick} className="state">NJ</div>
      <div id="CA" onClick={handleClick} className="state">CA</div>
      <div id="UT" onClick={handleClick} className="state">UT</div>
      <div id="CO" onClick={handleClick} className="state">CO</div>
      <div id="NE" onClick={handleClick} className="state">NE</div>
      <div id="MO" onClick={handleClick} className="state">MO</div>
      <div id="KY" onClick={handleClick} className="state">KY</div>
      <div id="WV" onClick={handleClick} className="state">WV</div>
      <div id="VA" onClick={handleClick} className="state">VA</div>
      <div id="MD" onClick={handleClick} className="state">MD</div>
      <div id="DE" onClick={handleClick} className="state">DE</div>
      <div id="AZ" onClick={handleClick} className="state">AZ</div>
      <div id="NM" onClick={handleClick} className="state">NM</div>
      <div id="KS" onClick={handleClick} className="state">KS</div>
      <div id="AR" onClick={handleClick} className="state">AR</div>
      <div id="TN" onClick={handleClick} className="state">TN</div>
      <div id="NC" onClick={handleClick} className="state">NC</div>
      <div id="SC" onClick={handleClick} className="state">SC</div>
      <div id="DC" onClick={handleClick} className="state">DC</div>
      <div id="OK" onClick={handleClick} className="state">OK</div>
      <div id="LA" onClick={handleClick} className="state">LA</div>
      <div id="MS" onClick={handleClick} className="state">MS</div>
      <div id="AL" onClick={handleClick} className="state">AL</div>
      <div id="GA" onClick={handleClick} className="state">GA</div>
      <div id="HI" onClick={handleClick} className="state">HI</div>
      <div id="TX" onClick={handleClick} className="state">TX</div>
      <div id="FL" onClick={handleClick} className="state">FL</div>
      <div id="PR" onClick={handleClick} className="state">PR</div>

      {stateComponent}
      {/* {chartComponent} */}

    </div>



  )
}

export default GridMap;