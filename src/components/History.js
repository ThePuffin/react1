import React, { Component } from "react";
import logo from "../logo.svg";

class History extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Les quêtes React de Vinz </h1>
        </header>
        <hr />
        <br />
        <p> Il est possible d'accéder à différentes routes</p>
      </div>
    );
  }
}

export default History;
