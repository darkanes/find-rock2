import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="https://c-sf.smule.com/sf/s25/arr/b1/d9/f770b66e-f35a-4a0a-8264-b4f7f439039c.jpg"
                alt=""
                className="pic-artist margenes50"
              />

              <h2>Gustavo Cerati</h2>
              <p>
                Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de
                1959-ibidem, 4 de septiembre de 2014)3​4​5​ fue un músico,
                cantautor, compositor y productor discográfico argentino. Obtuvo
                reconocimiento internacional por haber sido el cantante,
                guitarrista y compositor principal de la banda de rock Soda
                Stereo. Es considerado uno de los músicos más importantes,
                populares e influyentes del rock latinoamericano
              </p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
