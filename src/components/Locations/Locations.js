import React from "react";
import "./Locations.css";
import { DeviceLocationDisabled } from "material-ui";

function Locations() {
  return (
    <div className="locations-page">
      <div className="title-bar">l o c a t i o n s.</div>
      <div className="wrapper">
        <div className="box">
          <div className="img-container">
            <img
              className="locationimage a"
              src="https://cdn.shopify.com/s/files/1/0094/2252/t/110/assets/location-2.jpg?6304290836930155706"
            />
            <div className="overlay" />
            <div className="img-text"> DALLAS </div>
          </div>
          <div style={{ fontSize: "1.5em", color: "black" }}>
            <i class="material-icons">place</i>
          </div>
          <div className="address">500 S Ervay St, Dallas, TX 75201 </div>
          <hr className="diviline" />
          <div className="locations-details-container">
            <div className="locations-piece"> MONDAY - SATURDAY:</div>
            <div className="locations-detail"> 10AM - 9AM</div>
            <div className="locations-piece"> SUNDAY:</div>
            <div className="locations-detail"> 11AM - 8PM</div>
            <div className="locations-piece"> PHONE :</div>
            <div className="locations-detail"> 111 . 111 . 1111</div>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              className="locationimage b"
              src="https://cdn.shopify.com/s/files/1/0094/2252/t/110/assets/kith-manhattan.jpg?6304290836930155706"
            />
            <div className="overlay" />
            <div className="img-text">ARLINGTON</div>
          </div>
          <div style={{ fontSize: "1.5em", color: "black" }}>
            <i class="material-icons">place</i>
          </div>
          <div className="address">
            6702 Prairie Fire Rd, Arlington, TX 76002
          </div>
          <hr className="diviline" />
          <div className="locations-details-container">
            <div className="locations-piece"> MONDAY - SATURDAY:</div>
            <div className="locations-detail"> 10AM - 9AM</div>
            <div className="locations-piece"> SUNDAY:</div>
            <div className="locations-detail"> 11AM - 8PM</div>
            <div className="locations-piece"> PHONE :</div>
            <div className="locations-detail"> 222 . 222 . 2222</div>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              className="locationimage c"
              src="https://cdn.shopify.com/s/files/1/0094/2252/files/hirshleifers-treats_48f5cd3e-90ca-4825-b366-22276a51eac1.jpg?6304290836930155706"
            />
            <div className="overlay" />
            <div className="img-text">TORONTO</div>
          </div>
          <div style={{ fontSize: "1.5em", color: "black" }}>
            <i class="material-icons">place</i>
          </div>
          <div className="address">1364 Weston Rd, York, ON M6M 4R8</div>
          <hr className="diviline" />
          <div className="locations-details-container">
            <div className="locations-piece"> MONDAY - SATURDAY:</div>
            <div className="locations-detail"> 10AM - 9AM</div>
            <div className="locations-piece"> SUNDAY:</div>
            <div className="locations-detail"> 11AM - 8PM</div>
            <div className="locations-piece"> PHONE :</div>
            <div className="locations-detail"> 333 . 333 . 3333</div>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              className="locationimage d"
              src="https://cdn.shopify.com/s/files/1/0094/2252/files/kids_location.png?5547222051476358901"
            />
            <div className="overlay" />
            <div className="img-text">AMSTERDAM</div>
          </div>
          <div style={{ fontSize: "1.5em", color: "black" }}>
            <i class="material-icons">place</i>
          </div>
          <div className="address">
            Herengracht 49, Amsterdam, Noord-Holland, 1015 BT
          </div>
          <hr className="diviline" />
          <div className="locations-details-container">
            <div className="locations-piece"> MONDAY - SATURDAY:</div>
            <div className="locations-detail"> 10AM - 9AM</div>
            <div className="locations-piece"> SUNDAY:</div>
            <div className="locations-detail"> 11AM - 8PM</div>
            <div className="locations-piece"> PHONE :</div>
            <div className="locations-detail"> 333 . 333 . 3333</div>
          </div>
          <div className="address" />
          <div className="hours" />
        </div>
      </div>
    </div>
  );
}
export default Locations;
