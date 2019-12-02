import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Component/Cards/Cards";
import Nav from "./Component/NavBar/Nav";
import DNav from "./Component/NavBar/DNav";
import Search from "./Component/Search/Search";
import Color from "./Component/ColorButton/Color";

class App extends React.Component {
  state = {
    val: "",
    background: "green"
  };
  chercher = e => {
    console.log(e.target.value);
    this.setState({ val: e.target.value });
  };
  changer = color => {
    this.setState({ background: color.hex });
  };
  render() {
    return (
      <div className="App">
        <Search fct={this.chercher} />
        <Color fctt={this.changer} />
        <div className="row ml-5">
          <Cards val={this.state.val} vall={this.state.background} />
        </div>
      </div>
    );
  }
}

export default App;
