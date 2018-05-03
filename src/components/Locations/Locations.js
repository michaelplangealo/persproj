import React from "react";
import "./Locations.css";
import { DeviceLocationDisabled } from "material-ui";

function Locations() {
  return (
    <div className="locations-page">
      <div className="title-bar">
        <div className="title">locations.</div>
      </div>
      <div className="wrapper">
        <div className="box a">
          <img
            className="locationimage a"
            src="https://cdn.shopify.com/s/files/1/0094/2252/t/110/assets/location-2.jpg?6304290836930155706"
          />
          <div className="address">337 Lafayette St. NY, NY 10012</div>
          <div className="hours" />
        </div>
        <div className="box b">
          <img
            className="locationimage a"
            src="https://cdn.shopify.com/s/files/1/0094/2252/t/110/assets/kith-manhattan.jpg?6304290836930155706"
          />
          <div className="address" />
          <div className="hours" />
        </div>
        <div className="box c">
          <img
            className="locationimage a"
            src="https://cdn.shopify.com/s/files/1/0094/2252/files/hirshleifers-treats_48f5cd3e-90ca-4825-b366-22276a51eac1.jpg?6304290836930155706"
          />
          <div className="address" />
          <div className="hours" />
        </div>
        <div className="box d">
          <img
            className="locationimage a"
            src="https://cdn.shopify.com/s/files/1/0094/2252/files/kids_location.png?5547222051476358901"
          />
          <div className="address" />
          <div className="hours" />
        </div>
      </div>
    </div>
  );
}
export default Locations;
