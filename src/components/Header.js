import React from "react";
import '../App.css';


function Header() {

  return(

    <div className="header">
      <div>
        <h1 style={{color: "#248f72", }}> Good Morning Inmates</h1>
      </div>

      <div>
        <h1>
          <img className="logo" src="./Magnitude.png"   alt="" />
        </h1>
      </div>

    </div>


    ) 

}

export default Header;