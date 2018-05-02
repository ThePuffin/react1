import React, { Component } from "react";

const testRegexMaj = value => /[A-Z]/g.test(value)
const testRegexSpe = value => /\W/g.test(value);

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

  statusPassword(event, func, funct) {
    const newText = event.target.value;
    const obj = {
      value: newText,
      passwordText: "est à créer",
      proposition: "",
      validation: "",
      disabled: "true"
    };
    if (newText.length >= 6 && func(newText) && funct(newText)) {
      obj.passwordText = "fort";
      obj.proposition = " Et il comporte des caractères spéciaux et des majuscules";
      obj.disabled = "";
    } else if (newText.length >= 6 && funct(newText)) {
      obj.passwordText = "moyen";
      obj.proposition = " Tu pourrais ajouter des caractères spéciaux";
      obj.disabled = "";
    } else if (newText.length > 0) {
      obj.passwordText = "faible";
      obj.proposition =
        " Tu pourrais ajouter d'autres caractères pour l'allonger et ajouter des majuscules ou des caractères spéciaux";
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
              onChange={e => this.statusPassword(e, testRegexSpe, testRegexMaj)}
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
