import React, { Component } from "react";
import logo from "./logo.svg";

class Nav extends Component {
  render() {
    return (
      <div className="test">
        <nav className="navbar navbar-light bg-secondary">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt=""
              width="30"
              height="30"
            />
            React JS
          </a>

          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
export default Nav;
