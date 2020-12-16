import React from "react";
import Home from "./Home.js";
import { Carousel } from "react-responsive-carousel";
import m1 from "./images/misc/cb1.png";
import m2 from "./images/misc/cb2.png";
import m3 from "./images/misc/cb3.png";
import m4 from "./images/misc/cb4.png";
import m5 from "./images/misc/dragon2.png";
import m6 from "./images/misc/dragon1.png";
import m7 from "./images/misc/octopus.png";
import ImgComponent from "./ImgComponent";

class Mics extends React.Component {
  render() {
    return (
      <div>
        <Home open={"misc"} />

        <ImgComponent
          images={[m1, m2, m3, m4]}
          text={
            "Cookbook filled with recipes for family favorites. Egg illustration made with Illustrator, book made with InDesign."
          }
        />

        <ImgComponent
          images={[m6, m5]}
          text={"Lost wax casting sculpture of a dragon."}
        />

        <img className={"sewing-carousel"} src={m7} />

        <p className={"carousel-text ff-text"}>Wax sculpture of an octopus.</p>
      </div>
    );
  }
}
export default Mics;
