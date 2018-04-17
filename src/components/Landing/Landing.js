import React from "react";
import squid from "./squiddy.jpg"
import squiddy from "./squiddyviddy.mp4"

function Landing() {
  return (
  <div className="videobox">
    <video preload="auto" autoPlay loop id="squiddy">
    <source src={squiddy} type="video/mp4"/>
    </video>
  </div>
  )
}
export default Landing;
