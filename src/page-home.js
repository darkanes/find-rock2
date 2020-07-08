import React, { Component } from "react";
import "./page-home.css";
import logo from "./logo.svg";
import Bar from "./components/bar";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-3"></div>
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <Bar />
            {/*<form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="formulario"
            >
              <div className="busqueda">
                <input
                  type="text"
                  id="buscar"
                  placeholder="Buscar banda"
                  onChange={this.onChange}
                  name="busqueda"
                  value={this.state.busqueda}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Buscar artista similar
                </button>
                <button className="btng">Kindev</button>
              </div>
            </form>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
