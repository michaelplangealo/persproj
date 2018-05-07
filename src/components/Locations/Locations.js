import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Locations.css";
import { DeviceLocationDisabled } from "material-ui";
import CommunicationLocationOn from "material-ui/svg-icons/communication/location-on";
import RenderToLayer from "material-ui/internal/RenderToLayer";
import { Card, CardHeader, CardText } from "material-ui/Card";
import DallasMap from "../Maps/DallasMap.js";
import ArlingtonMap from "../Maps/ArlingtonMap.js";
import TorontoMap from "../Maps/TorontoMap";
import AmsterdamMap from "../Maps/AmsterdamnMap.js";

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        buttonColor: "black",
        buttonHover: "gray",
        buttonSize: "0 0 24 24",
        width: "20%",
        expanded1: false,
        expanded2: false,
        expanded3: false,
        expanded4: false
      }
    };
  }
  handleExpandChange1 = expanded => {
    this.setState({ expanded1: expanded });
  };
  handleExpandChange = expanded => {
    this.setState({ expanded2: expanded });
  };
  handleExpandChange3 = expanded => {
    this.setState({ expanded3: expanded });
  };
  handleExpandChange4 = expanded => {
    this.setState({ expanded4: expanded });
  };
  render() {
    var { styles } = this.state;
    return (
      <div className="locations-page">
        <div className="title-bar">
          <span>
            <span className="lochome">
              <Link to="/"> h o m e .</Link>
            </span>
            /
            <span className="loc">l o c a t i o n s .</span>
          </span>
          <hr className="title-line" />
        </div>
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
            <Card
              expanded={this.state.expanded}
              onExpandChange={this.handleExpandChange1}
            >
              <CardHeader
                actAsExpander={true}
                showExpandableButton={true}
                children={
                  <div style={{ fontSize: "1.5em", color: "black" }}>
                    <CommunicationLocationOn
                      color={styles.buttonColor}
                      hoverColor={styles.buttonHover}
                      viewBox={styles.buttonSize}
                    />
                  </div>
                }
              />

              <CardText expandable={true}>
                <div className="map-container">
                  <DallasMap />
                </div>
              </CardText>
            </Card>
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
            <Card
              expanded={this.state.expanded}
              onExpandChange={this.handleExpandChange}
            >
              <CardHeader
                actAsExpander={true}
                showExpandableButton={true}
                children={
                  <div style={{ fontSize: "1.5em", color: "black" }}>
                    <CommunicationLocationOn
                      color={styles.buttonColor}
                      hoverColor={styles.buttonHover}
                      viewBox={styles.buttonSize}
                    />
                  </div>
                }
              />
              <CardText expandable={true}>
                <div className="map-container">
                  <ArlingtonMap />
                </div>
              </CardText>
            </Card>
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
            <Card
              expanded={this.state.expanded3}
              onExpandChange={this.handleExpandChange3}
            >
              <CardHeader
                actAsExpander={true}
                showExpandableButton={true}
                children={
                  <div style={{ fontSize: "1.5em", color: "black" }}>
                    <CommunicationLocationOn
                      color={styles.buttonColor}
                      hoverColor={styles.buttonHover}
                      viewBox={styles.buttonSize}
                    />
                  </div>
                }
              />

              <CardText expandable={true}>
                <div className="map-container">
                  <TorontoMap />
                </div>
              </CardText>
            </Card>
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
            <Card
              expanded={this.state.expanded4}
              onExpandChange={this.handleExpandChange4}
            >
              <CardHeader
                actAsExpander={true}
                showExpandableButton={true}
                children={
                  <div style={{ fontSize: "1.5em", color: "black" }}>
                    <CommunicationLocationOn
                      color={styles.buttonColor}
                      hoverColor={styles.buttonHover}
                      viewBox={styles.buttonSize}
                    />
                  </div>
                }
              />

              <CardText expandable={true}>
                <div className="map-container">
                  <AmsterdamMap />
                </div>
              </CardText>
            </Card>
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
          </div>
        </div>
      </div>
    );
  }
}
export default Locations;
