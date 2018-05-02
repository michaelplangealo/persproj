import React from "react";
import "./About.css";
import purpp from "./purpp.mp4";

function About() {
  return (
    <div className="about-page">
      <p className="about-text-box">
        <p className="actual-about">About</p>
      </p>
      <div className="next2u">
        <video preload="auto" autoPlay loop id="purpp">
          <source src={purpp} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
export default About;
