import React, { Component } from "react";

class Author extends Component {
  fonctionAuClic() {
    alert(`mon nom est ${this.props.name}`);
  }

  render() {
    return (
      <div onClick={this.fonctionAuClic.bind(this)}>
        <button type="button" className="btn btn-info">
          clique ici !
        </button>
      </div>
    );
  }
}

export default Author;
