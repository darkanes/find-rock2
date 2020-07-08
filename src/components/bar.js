import React, { Component } from "react";

class Bar extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda");
  };
  render() {
    return (
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
            onChange={this.props.onChange}
            name="busqueda"
            value={this.props.busqueda}
          />
        </div>
        <div className="actions">
          <button className="btng" onClick={this.handleSubmit} type="submit">
            Buscar artista similar
          </button>
          <button className="btng">Kindev</button>
        </div>
      </form>
    );
  }
}
export default Bar;
