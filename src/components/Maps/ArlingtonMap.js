import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class ArlingtonMap extends Component {
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
        initialCenter={{ lat: 32.6382974, lng: -97.07966850000003 }}
        zoom={16}
      >
        <Marker onClick={this.onMarkerClick} name={"Arlington Location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(ArlingtonMap);
