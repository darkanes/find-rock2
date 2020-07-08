import React, { Component } from "react";
import ArtistCard from "./artist-card";
class SimilarArtist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row centrar margenes50">
            <div className="col-md-12">
              <h5>Similar Artist</h5>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <ArtistCard
                img="https://place-hold.it/350x350"
                titulo="test loco"
              />
            </div>
            <div className="col-md-3">
              <ArtistCard
                img="https://place-hold.it/350x350"
                titulo="test loco"
              />
            </div>
            <div className="col-md-3">
              <ArtistCard
                img="https://place-hold.it/350x350"
                titulo="test loco"
              />
            </div>
            <div className="col-md-3">
              <ArtistCard
                img="https://place-hold.it/350x350"
                titulo="test loco"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SimilarArtist;
