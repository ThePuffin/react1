import React, { Component } from "react";
import logo from "../puffin.png";

class ErrorRoute extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Mauvaise adresse </h1>
        </header>
        <br />
        <br />
        <img src="https://media.giphy.com/media/26gYERtrrzIEg6oKI/giphy.gif" alt="GIF" />
        <br />
        <br />
      </div>;
  }
}

export default ErrorRoute;
