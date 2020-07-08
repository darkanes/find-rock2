import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home";
import PageArtist from "./page-artist";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/busqueda" component={PageSearchResult} />
          <Route path="/artista" component={PageArtist} />
          <Route path="/" component={PageHome} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
