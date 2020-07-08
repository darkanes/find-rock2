import React, { Component } from "react";

class Bar extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { handlePush } = this.props;
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
          <button className="btng" onClick={handlePush} type="submit">
            Buscar artista similar
          </button>
          <button className="btng">Kindev</button>
        </div>
      </form>
    );
  }
}
export default Bar;
