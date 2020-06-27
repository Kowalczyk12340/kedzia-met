import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{ lat: 51.753776, lng: 18.547402 }}
        containerStyle={this.props.containerStyle}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Kędzia-Met"}
          position={{ lat: 51.754031, lng: 18.547956 }}
        />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Kędzia-Met</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCybtdeQ_4YPm2SX3Yi-m4c3rMOO72O7GM",
})(MapContainer);
