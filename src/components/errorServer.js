import React from "react";
import "./loading.css";

function ErrorServer() {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <h1>Servidor echo percha</h1>
          <h5>No se pudo conectar a la api</h5>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ErrorServer;
