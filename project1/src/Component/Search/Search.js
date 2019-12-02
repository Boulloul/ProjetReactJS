import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="field">
        <div className="control">
          <input
            className="input is-success"
            type="text"
            placeholder="Rechercher"
            style={{
              width: "500px",
              marginLeft: "500px",
              marginTop: "50px",
              marginBottom: "25px"
            }}
            onChange={this.props.fct}
          />
        </div>
      </div>
    );
  }
}
