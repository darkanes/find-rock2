import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";
import ErrorServer from "./components/errorServer.js";

class PageSearchResult extends Component {
  state = {
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },

    busqueda: "",
    error: null,
    loading: false,
    serverError: null,
  };
  componentDidUpdate(prevProps) {
    if (this.props.location != prevProps.location) {
      console.log(this.props.location, "coso");
      this.fetchData();
    }
  }
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    let artista = this.props.history.location.search.substr(1);
    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artista +
      "&api_key=dd81a6cf39b3e1379487f91b14346814&format=json";

    try {
      this.setState({
        loading: true,
      });
      const Response = await fetch(url);
      const data = await Response.json();
      console.log(data, "lo que trae la api");
      if (data.error) {
        this.setState({
          error: true,
          loading: false,
          errorMessage: data.message,
        });
      } else {
        this.setState({
          error: false,
          loading: false,
          data: data,
        });
      }
    } catch (error) {
      this.setState({
        serverError: true,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading></Loading>}
        {this.state.error && <Error errorMessage={this.state.errorMessage} />}
        {this.state.serverError && <ErrorServer></ErrorServer>}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[2]["#text"]}
                alt=""
                className="pic-artist margenes50"
              />

              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
