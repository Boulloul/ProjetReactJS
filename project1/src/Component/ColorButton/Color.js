import React, { Component } from "react";
import { SketchPicker } from "react-color";

export default class Color extends Component {
  state = {
    display: "none"
  };
  show = () => {
    if (this.state.display == "none") {
      this.setState({ display: "block" });
    } else {
      this.setState({ display: "none" });
    }
  };
  AffCol = () => {
    return <SketchPicker onChange={this.props.fctt} />;
  };
  render() {
    return (
      <div class="dropdown">
        <div class="dropdown-trigger">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
            onClick={this.show}
            style={{ marginBottom: "30px", paddingRight: "5px" }}
          >
            <span>Changer</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="dropdown-menu"
          id="dropdown-menu3"
          role="menu"
          style={{ display: this.state.display }}
        >
          <div class="dropdown-content">
            <div className="columns is-multiline">{this.AffCol()}</div>
          </div>
        </div>
      </div>
    );
  }
}
