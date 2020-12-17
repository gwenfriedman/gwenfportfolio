import React from "react";
import Home from "./Home.js";
import "./Home.css";

import homeImg from "./images/webDesign/home.png";
import selectorImg from "./images/webDesign/selector.png";
import img0 from "./images/0.jpg";
import img1 from "./images/1.PNG";
import img2 from "./images/2.PNG";
import img3 from "./images/3.PNG";
import img4 from "./images/4.PNG";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import Gallery from "react-photo-gallery";

import covid1 from "./images/webDesign/1.png";
import covid2 from "./images/webDesign/2.png";
import covid3 from "./images/webDesign/3.png";
import covid4 from "./images/webDesign/4.png";

const IMAGES = [
  {
    src: img0,
    width: 750,
    height: 1334,
  },
  {
    src: img1,
    width: 750,
    height: 1334,
  },
  {
    src: img2,
    width: 750,
    height: 1334,
  },
  {
    src: img3,
    width: 750,
    height: 1334,
  },
  {
    src: img4,
    width: 750,
    height: 1334,
  },
  {
    src: img5,
    width: 750,
    height: 1334,
  },
  {
    src: img6,
    width: 750,
    height: 1334,
  },
];

const CovidImages = [
  {
    src: covid1,
    width: 600,
    height: 1200,
  },
  {
    src: covid2,
    width: 600,
    height: 1200,
  },
  {
    src: covid3,
    width: 600,
    height: 1200,
  },
  {
    src: covid4,
    width: 600,
    height: 1200,
  },
];

class WebDesign extends React.Component {
  render() {
    return (
      <div>
        <Home open={"webdesign"} />

        <h2 className={"app-name covid"}> COVID-19 Tracing App</h2>
        <div className={"gallery-computer"}>
          <Gallery
            photos={CovidImages}
            direction={"row"}
            targetRowHeight={500}
          />
        </div>
        <a
          target="_blank"
          className={"app-description"}
          href={
            "https://www.figma.com/proto/ye6LFBbaLjuMfxFeEJDJ9f/HCI-FP9-FINAL?node-id=220%3A2&scaling=scale-down"
          }
        >
          Click here to view app prototype
        </a>
        <p className={"app-description"}>
          With schooling continuing and adjusting amidst a pandemic dealing with
          COVID-19, students are constantly looking for ways to ensure safety
          during this unprecedented time. The goal of this project was to
          develop a COVID-19 tracing smartphone application that enables
          individuals to self-screen, schedule tests, report information, and
          learn more about COVID-19 and the ways a student can deal with it. We
          began the human-centered design and evaluation process with interviews
          of target users. Through these interviews, we were able to get a good
          understanding of students’ needs and expectations during this
          pandemic. From there, we began to sketch some user interfaces. With a
          series of iterations of the design and evaluations, we came to a final
          design which was tested in a summative evaluation with target users.{" "}
        </p>

        <h2 className={"app-name"}> Howlerr</h2>
        <p className={"app-description"}>
          {" "}
          iOS app that generates a theme song for your dog. Available on the App
          Store.{" "}
        </p>
        <div className={"gallery-computer"}>
          <Gallery photos={IMAGES} direction={"row"} targetRowHeight={500} />
        </div>

        <h2 className={"app-name pe"}> Picky Eater</h2>
        <div className={"row web-images d-none d-md-none d-lg-block"}>
          <img src={homeImg} className={"home-img column"} />
          <img src={selectorImg} className={"home-img column"} />
        </div>

        <div className={"web-images d-none d-md-block d-lg-none"}>
          <img src={homeImg} className={"home-img-md"} />
          <img src={selectorImg} className={"home-img-md"} />
        </div>

        <div className={"d-block d-md-none d-lg-none"}>
          <img src={homeImg} className={"home-img-sm"} />
          <img src={selectorImg} className={"home-img-sm"} />
        </div>

        <p className={"webDesign"}>
          Web design for the site Picky Eater. For picky eaters and parents of
          picky eaters who are looking for new recipes and trying to expand
          their/their kid’s palette, Picky Eater is a recipe finding website
          that lets users search for recipes based on their dietary
          restrictions, allergies, foods they love, and foods they hate. Unlike
          AllRecipes and recipe blogs, Picky Eater has more precise filters, the
          ability to input everything into a profile, and the ability to slowly
          add food aversions back into the users diet.
        </p>
        <p className={"webDesign p2"}>
          The design process for this site included work flow sketches, creating
          personas, interviews, a site map, wireframes, looking at benchmarks,
          usability tests, story boards, and a final design prototype. My design
          changed throughout the process to better accommodate the users.
        </p>
        <a
          className={"invisionLink"}
          target="_blank"
          href={"https://invis.io/E8Y5DTQ695B"}
        >
          {" "}
          Click here to walk through final prototype on inVision.{" "}
        </a>
      </div>
    );
  }
}
export default WebDesign;
