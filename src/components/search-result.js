import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";
import ErrorServer from "./errorServer.js";

class SearchResult extends Component {
  state = {
    serverError: null,
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    console.log(termino, "llega hasta search", e);
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=dd81a6cf39b3e1379487f91b14346814&format=json"
    );
  }
  //componentDidMount() {
  //  this.setState({
  //    loading: true,
  //  });
  //}
  fetchData = async (url) => {
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
        {this.state.loading && <Loading></Loading>}
        {this.state.error && <Error errorMessage={this.state.errorMessage} />}
        {this.state.serverError && <ErrorServer></ErrorServer>}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[2]["#text"]}
                  titulo={artista.name}
                  key={i}
                />
              );
            })}

            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
