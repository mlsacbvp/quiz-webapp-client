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
    </div>
  );
}

export default Home;
