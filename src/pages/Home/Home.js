import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="container">
      <header>
        <div className="Navbar">
          <div className="logocontainer">
            <input className="logo" src=".." placeholder="logo"></input>
          </div>
          <div className="icons">
            <a href="#" className="el1">Play</a>
            <a href="#" className="el2">Login</a>
            <a href="#" className="el3">SignUp</a>
          </div>
        </div>
      </header>

        <div className="title">
          <div>
          <input className="PIN" placeholder="Enter your PIN" ></input>
          </div>
          <button className="Enter">Enter</button>
        </div>
    </div>
  );
}

export default Home;
