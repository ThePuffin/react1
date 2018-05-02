import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Routes from "./routes";

class App extends Component {
  render() {
    return <div>
        {Routes()}
        <div>
          <NavLink to="/"> Accueil </NavLink>
          <NavLink to="/notre-histoire"> Notre Histoire </NavLink>
        </div>
      </div>;
  }
}

export default App;
