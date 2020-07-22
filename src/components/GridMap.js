import React, { useState } from 'react';
// import StatesList from './StatesList';
import State from './State';

function handleClick(e) {
    console.log(e.target.id);
  }

function GridMap({ state }) {
  const [selectedState, selectState] = useState("");
  const [hidden, setHidden] = useState(false);

  const toggle = () => setHidden(!hidden);

  return (
    <div className="grid-container">
      <div id="AK" className="state">
        <span onClick={() => setHidden(!hidden)}>AK</span>
      </div>
      <div id="ME" onClick={handleClick}className="state">ME</div>
      <div id="VT" className="state">VT</div>
      <div id="NH" className="state">NH</div>
      <div id="WA" className="state">WA</div>
      <div id="ID" className="state">ID</div>
      <div id="MT" className="state">MT</div>
      <div id="ND" className="state">ND</div>
      <div id="MN" className="state">MN</div>
      <div id="WI" className="state">WI</div>
      <div id="MI" className="state">MI</div>
      <div id="NY" className="state">NY</div>
      <div id="MA" className="state">MA</div>
      <div id="CT" className="state">CT</div>
      <div id="RI" className="state">RI</div>
      <div id="OR" className="state">OR</div>
      <div id="NV" className="state">NV</div>
      <div id="WY" className="state">WY</div>
      <div id="SD" className="state">SD</div>
      <div id="IA" className="state">IA</div>
      <div id="IL" className="state">IL</div>
      <div id="IN" className="state">IN</div>
      <div id="OH" className="state">OH</div>
      <div id="PA" className="state">PA</div>
      <div id="NJ" className="state">NJ</div>
      <div id="CA" className="state">CA</div>
      <div id="UT" className="state">UT</div>
      <div id="CO" className="state">CO</div>
      <div id="NE" className="state">NE</div>
      <div id="MO" className="state">MO</div>
      <div id="KY" className="state">KY</div>
      <div id="WV" className="state">WV</div>
      <div id="VA" className="state">VA</div>
      <div id="MD" className="state">MD</div>
      <div id="DE" className="state">DE</div>
      <div id="AZ" className="state">AZ</div>
      <div id="NM" className="state">NM</div>
      <div id="KS" className="state">KS</div>
      <div id="AR" className="state">AR</div>
      <div id="TN" className="state">TN</div>
      <div id="NC" className="state">NC</div>
      <div id="SC" className="state">SC</div>
      <div id="DC" className="state">DC</div>
      <div id="OK" className="state">OK</div>
      <div id="LA" className="state">LA</div>
      <div id="MS" className="state">MS</div>
      <div id="AL" className="state">AL</div>
      <div id="GA" className="state">GA</div>
      <div id="HI" className="state">HI</div>
      <div id="TX" className="state">TX</div>
      <div id="FL" className="state">FL</div>
      <div id="PR" className="state">PR</div>
    </div>
  )
}

export default GridMap;