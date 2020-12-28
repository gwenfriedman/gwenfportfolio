import React, { useState } from "react";
import Home from "./Home.js";
import b1 from "./images/branding/peacock2.png";
import b2 from "./images/branding/MM2.png";
import b3 from "./images/branding/MM3.png";
import b4 from "./images/branding/hat1.png";
import b5 from "./images/branding/hat2.png";
import b13 from "./images/branding/hat6.png";
import b14 from "./images/branding/hat7.png";
import b15 from "./images/branding/hat8.png";
import b9 from "./images/branding/pe1.png";
import b10 from "./images/branding/pe2.png";
import b11 from "./images/branding/pe3.png";
import b12 from "./images/branding/pe4.png";
import ImgComponent from "./ImgComponent";
import helloFresh from "./images/branding/hellofresh-extension.pdf";
import stitchKid from "./images/branding/stitch-kid.pdf";
import nooworks from "./images/branding/nooworks-extension.pdf";
import wonder from "./images/branding/wonder.pdf";
import designfirm from "./images/branding/designfirm.pdf";
import sofar from "./images/branding/sofar-extension.pdf";
import essie from "./images/branding/essie-extension.pdf";
import youthclub from "./images/branding/youthclub.pdf";
import PdfComponent from "./PdfComponent";

class Branding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 1,
      pageNumber: 1,
    };
  }

  setNumPages(numPages) {
    this.setState({
      numPages: numPages,
    });
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setNumPages(numPages);
  }
  render() {
    return (
      <div>
        <Home open={"branding"} />

        <PdfComponent
          fileName={stitchKid}
          text={"Identity and brand design for Stitch Kid."}
        />

        <PdfComponent
          fileName={helloFresh}
          text={"Brand extension for Hello Fresh."}
        />

        <PdfComponent
          fileName={nooworks}
          text={"Brand extension for nooworks."}
        />

        <div className={"group-project"}>
          <PdfComponent fileName={wonder} text={"Rebranding for Wonderbread"} />
        </div>

        <div className={"group-project"}>
          <PdfComponent
            fileName={designfirm}
            text={"Branding for a design firm called Sehnucht Design"}
          />
        </div>

        <PdfComponent
          fileName={sofar}
          text={"Brand extension for Sofar Sounds."}
        />

        <div className={"group-project"}>
          <PdfComponent
            fileName={youthclub}
            text={"Rebranding for Boys & Girls Club of America"}
          />
        </div>

        <PdfComponent fileName={essie} text={"Brand extension for essie."} />

        <ImgComponent
          images={[b4, b15, b5, b13, b14]}
          text={
            "Branding and logo for Hatsassy. An instagrammer who specialized in vintage hats. The logo" +
            " is based off of hatsassy herself. The color are inspired by the account's fun feel."
          }
        />

        <ImgComponent
          images={[b1, b2, b3]}
          text={
            "Logo for offshoot project of Mango and Marigold Press. This logo works off the" +
            " company's color scheme and shapes. Mango and Marigold Press publishes children's books with a focus on diversity," +
            " especially Hinduism. In hinduism, peacocks are associated with the Goddess Saraswati" +
            " (a deity representing patience, kindness, and knowledge). We chose to use a peacock in the logo because" +
            " the message of knowledge and kindness aligns well with Mango and Marigold. Click through the carousel" +
            " to see our work flow."
          }
        />

        <ImgComponent
          images={[b9, b10, b11, b12]}
          text={
            "Branding and logo for the website Picky Eater. Done for Interaction" +
            " Design 1 class. The fork and food logo represents the websites goal," +
            " to make people less picky with their food and to give them more" +
            " options for meals. The clean green color and thin font makes the" +
            " website seem like it offers healthy and light recipes. Click through" +
            " the carousel to see my workflow."
          }
        />
      </div>
    );
  }
}
export default Branding;
