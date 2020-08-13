import React from "react";
import '../App.css';

function Header() {

  return (
    <div className="header">
      <div>
        <h1>
          <img className="logo" src="./Magnitude.png" alt="" />
        </h1>
        <h3 align='center'>Track Covid Results</h3>
      </div>
    </div>
  )
}

export default Header;