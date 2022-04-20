import React from 'react'
//import './Homescreen.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const Homescreen = () => {
  return (
    <div>
      <div className="imgg">
        <Carousel
          autoPlay
          // interval="5000"
          // transitionTime="5000"
          showThumbs={false}
        >
          <img
            src="covid7.jpg"
            className="img"
            alt="Background"
            style={{ height: "449px", width: "1350px" }}
          />
          <img
            src="covid6.jpg"
            className="img"
            alt="Background"
            style={{ height: "449px", width: "1350px" }}
          />
          <img
            src="covid5.jpg"
            className="img"
            alt="Background"
            style={{ height: "449px", width: "1350px" }}
          />
          <img
            src="covid8.jpg"
            className="img"
            alt="Background"
            style={{ height: "449px", width: "1350px" }}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Homescreen