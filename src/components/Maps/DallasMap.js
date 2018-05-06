import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class DallasMap extends Component {
  render() {
    const style = {
      width: "35%",
      height: "30%"
    };
    console.log(this.props.google);
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{ lat: 32.7773313, lng: -96.7954995 }}
        zoom={16}
      >
        <Marker onClick={this.onMarkerClick} name={"Dallas Location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(DallasMap);
