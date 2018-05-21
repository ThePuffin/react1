import React, { Component } from "react";
import logo from "../puffin.png";
import Author from "./Author";
import Password from "./Password";
import Timer from "./Timer";


class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Les quêtes React de Vinz</h1>
        </header>

        <h2> Bienvenue sur l'accueil </h2>

        <p className="App-intro">Coucou tu veux voir mon prénom ?</p>
        <div>
          <Author name="bob" />
        </div>
        <div>
          <br />
          <hr />
          <br />
          <p> et si nous rentrions un mot de passe pour sécuriser tout ça ?</p>
          <Password />
        </div>
        <div>
        <br/>
        <Timer />
        <hr/>
        </div>
        <br />
        <hr />
        <br />
        <p> Il est possible d'accéder à différentes routes</p>
      </div>

      
    );
  }
}

export default Home;
