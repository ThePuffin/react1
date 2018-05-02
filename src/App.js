import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div>
        {Routes()}
        <div className="divRoutes">
          <NavLink
            activeClassName="activeRoute"
            className="routes"
            exact
            to="/"
          >
            {" "}
            Accueil{" "}
          </NavLink>
          <NavLink
            activeClassName="activeRoute"
            className="routes"
            exact
            to="/notre-histoire"
          >
            {" "}
            Notre Histoire{" "}
          </NavLink>
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
