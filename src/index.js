import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//js vanilla!!!!!!!!!!!!!!!!!!!!!!!!!
//let elemento = document.createElement("p");
//elemento.innerHTML = "Que onda bebetooo";
//let contenedor = document.getElementById("root");
//contenedor.appendChild(elemento);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//let nombre = "kindre";
//let elemento = (
//  <div>
//    <h1>Concha tuya bobo</h1>
//    <p>Hola desde JSX</p>
//    <h2>{nombre} sos un capo</h2>
//  </div>
//);
//let container = document.getElementById("root");
//ReactDOM.render(elemento, container);
