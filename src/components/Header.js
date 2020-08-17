import React from "react";
import '../App.css';

function Header() {

  return (
    <div className="header">
      <div>
        <h1>
          <img className="logo" src="./magnitude_logo_lrg.png" alt="" />
        </h1>
        <h1 align='center'>Covid Data Tracker</h1>
      </div>
    </div>
  )
}

export default Header;