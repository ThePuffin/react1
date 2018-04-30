import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Author from "./components/Author";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Vinz's React</h1>
        </header>
        <p className="App-intro">Coucou tu veux voir mon prénom ?</p>
        <div>
          <Author name="bob" />
        </div>
      </div>
    );
  }
}

export default App;
