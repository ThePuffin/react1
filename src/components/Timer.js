import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: "il est l'or Monseigneur"
    };
    this.horloge = this.horloge.bind(this);
  }

  // componentWillMount() {
  //   console.log("la création va avoir lieu");
  // }

  componentDidMount() {
    // console.log("la création a eu lieu");
     setInterval(() => this.horloge(), 1000);
  }

  // componentWillUnmount() {
  //   console.log("le composant va être retiré");
  // }

  // componentWillUpdate() {
  //   console.log("la mise à jour va se faire");
  // }

  componentDidUpdate() {
    console.log("un update a eu lieu");
  }
  horloge() {
    //recuperation de la date
    const laDate = new Date();
    // mise en forme de l'heure
    const laMaintenant = `il est : ${laDate.getHours()}h:${laDate.getMinutes()}min:${laDate.getSeconds()}s`;
    //changement du state
    this.setState({ time: laMaintenant });
  }

  render() {
   
    return (
      <div>
        <h4>{this.state.time}</h4>
      </div>
    );
  }
}

export default Timer;
