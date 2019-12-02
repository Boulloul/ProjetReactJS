import React, { Component } from "react";
import logo from "./logo.svg";

class Cards extends Component {
  state = {
    data: [
      {
        nom: "Mehdi",
        mail: "boulloul.123@gmail.com",
        photo: "https://robohash.org/543"
      },
      {
        nom: "Hicham",
        mail: "hicham.douche@gmail.com",
        photo: "https://robohash.org/563"
      },
      {
        nom: "Zouhair",
        mail: "zouhaair@gmail.com",
        photo: "https://robohash.org/573"
      },
      {
        nom: "Rango",
        mail: "rangoo1@gmail.com",
        photo: "https://robohash.org/569"
      },
      {
        nom: "Khalid",
        mail: "lidlissi@gmail.com",
        photo: "https://robohash.org/5323"
      },
      {
        nom: "Hassan",
        mail: "boulloul.hassan@gmail.com",
        photo: "https://robohash.org/543213"
      },
      {
        nom: "Jamal",
        mail: "jamalboulloul@gmail.com",
        photo: "https://robohash.org/5321363"
      },
      {
        nom: "Nassim",
        mail: "hajji@gmail.com",
        photo: "https://robohash.org/57333"
      },
      {
        nom: "Mustapha",
        mail: "boulloul.123@gmail.com",
        photo: "https://robohash.org/52269"
      },
      {
        nom: "Taher",
        mail: "boulloul.123@gmail.com",
        photo: "https://robohash.org/555323"
      }
    ]
  };

  // Affiche = () => {
  //   let a =;
  //   return a;
  // };
  render() {
    let a = this.state.data.filter(rob => {
      return rob.nom.toLowerCase().indexOf(this.props.val.toLowerCase()) !== -1;
    });
    return a.map((item, key) => (
      <div key={key} className="col-sm-4 mb-4">
        <div
          className="card "
          style={{
            width: "19rem",
            backgroundColor: this.props.vall,
            borderRadius: "13px",
            boxShadow: "5px 10px #888888",
            color: "black"
          }}
        >
          <img src={item.photo} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.nom}</h5>
            <p className="card-text">{item.mail}</p>
          </div>
        </div>
      </div>
    ));
    // <div className="card" style={{ width: "19rem" }}>
    //   <img src={logo} className="card-img-top" alt="" />
    //   <div className="card-body">
    //     <h5 className="card-title">Card title</h5>
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //   </div>
    // </div>
  }
}

export default Cards;
