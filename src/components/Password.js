import React, { Component } from "react";

const testregex = value => /\W/gi.test(value);

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      passwordText: "est à créer",
      proposition: "",
      validation: "",
      disabled: "true"
    };

    this.statusPassword = this.statusPassword.bind(this);
    this.validPassword = this.validPassword.bind(this);
  }

  statusPassword(event, func) {
    const newText = event.target.value;
    const obj = {
      value: newText,
      passwordText: "est à créer",
      proposition: "",
      validation: "",
      disabled: "true"
    };
    if (newText.length >= 6 && func(newText)) {
      obj.passwordText = "fort";
      obj.proposition = " Et il comporte des caractères spéciaux";
      obj.disabled = "";
    } else if (newText.length >= 6) {
      obj.passwordText = "moyen";
      obj.proposition = " Tu pourrais ajouter des caractères spéciaux";
      obj.disabled = "";
    } else if (newText.length > 0) {
      obj.passwordText = "faible";
      obj.proposition =
        " Tu pourrais ajouter d'autres caractères pour l'allonger";
      obj.disabled = "true";
    }
    this.setState(obj);
  }

  validPassword(event) {
    event.preventDefault();
    alert(`
    Tu viens de soumettre le mot de passe: 
    ${this.state.value}
    Oups, il ne fallait pas le dire ???
    `);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.validPassword}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.value}
              onChange={e => this.statusPassword(e, testregex)}
            />
          </label>
          <input type="submit" value="Submit" disabled={this.state.disabled} />
        </form>
        <p
          className="textMDP"
          onChange={e => {
            this.statusPassword(e);
          }}
        >
          Mot de passe {this.state.passwordText} car sa longueur est de :{" "}
          {this.state.value.length} caractère(s) !
          {this.state.proposition}
        </p>
      
      </div>
    );
  }
}

export default Password;
