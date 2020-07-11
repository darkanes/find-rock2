import React, { Component } from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import Bar from "./bar";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {};
  // handleChange = (e) => {
  //   this.setState({ busqueda: e.target.value });
  //   console.log(e.target.name, e.target.value);
  // };
  //handleClick = (e) => {
  //  e.preventDefault();
  //  console.log(e.target.name, "ayyy gonorreeaaaa");
  //};
  handleSubmit = (a) => {
    a.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2 logo-barra">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            {/*<Bar />*/}
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="formulario"
            >
              <div className="busqueda">
                <input
                  type="text"
                  id="buscar"
                  placeholder="Buscar banda"
                  name="busqueda"
                  value={this.props.busqueda}
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
