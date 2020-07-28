import React from 'react';
import Home from './Home.js'
import d1 from './images/GD/grandpa.png';
import d2 from './images/GD/noah4.png';
import d3 from './images/GD/face.jpg';
import d4 from './images/GD/squam.png';
import d5 from './images/GD/eliza.png';
import d6 from './images/GD/mosque.png';
import d7 from './images/GD/tshirt.png';
import d8 from './images/GD/gwen.png';
import d9 from './images/GD/daph2.png';
import d10 from './images/GD/Noah1.png';
import d11 from './images/GD/gwen2.png';
import d12 from './images/GD/daph1.png';
import d13 from './images/GD/zazu.png';
import d14 from './images/GD/gwen3.png';
import d15 from './images/GD/noah3.png';
import d16 from './images/GD/ernie.png';
import d17 from './images/GD/gwen4.png';
import d18 from './images/GD/2d.png';
import d19 from './images/GD/daph.png';
import d20 from './images/GD/barn.png';
import d21 from './images/GD/boston.png';
import d22 from './images/GD/boston2.png';
import d23 from './images/GD/copilot2.png';
import d24 from './images/GD/copilot.png';
import d25 from './images/GD/dog.png';
import d26 from './images/GD/flowers.png';
import d27 from './images/GD/france.png';
import d28 from './images/GD/geese.png';
import d29 from './images/GD/hotel.png';
import d30 from './images/GD/kalei.png';
import d31 from './images/GD/rats.png';
import d32 from './images/GD/room.png';
import d33 from './images/GD/self.png';
import d34 from './images/GD/teddy.png';
import d35 from './images/GD/winnie.png';
import d36 from './images/GD/jan.png';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const IMAGES =
    [
        {
            src: d33,
            width: 571,
            height: 785,
            caption: "Self portrait - drawn with Procreate"
        },
        {
            src: d20,
            width: 720,
            height: 540,
            caption: "Barn - drawn with Procreate"
        },
        {
            src: d21,
            width: 810,
            height: 605,
            caption: "View from the T - drawn with Procreate"
        },
        {
            src: d24,
            width: 785,
            height: 785,
            caption: "Copilot tshirt design contest winner - drawn with Procreate"
        },
        {
            src: d22,
            width: 720,
            height: 716,
            caption: "Boston buildings - drawn with Procreate"
        },
        {
            src: d25,
            width: 720,
            height: 720,
            caption: "Sleeping dog in Beacon Hill- drawn with Procreate"
        },
        {
            src: d36,
            width: 720,
            height: 720,
            caption: "Janice the bull terrior - drawn with Procreate"
        },
        {
            src: d23,
            width: 785,
            height: 785,
            caption: "Copilot tshirt design contest entry - drawn with Procreate"
        },
        {
            src: d26,
            width: 720,
            height: 720,
            caption: "flowers - drawn with Procreate"
        },
        {
            src: d27,
            width: 720,
            height: 720,
            caption: "Paris, France - drawn with Procreate"
        },
        {
            src: d28,
            width: 720,
            height: 720,
            caption: "Geese in the rain - drawn with Procreate"
        },
        {
            src: d29,
            width: 720,
            height: 720,
            caption: "The Grand Budapest Hotel - drawn with Procreate"
        },
        {
            src: d30,
            width: 720,
            height: 720,
            caption: "Kalei - drawn with Procreate"
        },
        {
            src: d31,
            width: 1080,
            height: 608,
            caption: "Halloween rats - drawn with Procreate"
        },
        {
            src: d32,
            width: 867,
            height: 682,
            caption: "Home - drawn with Procreate"
        },
        {
            src: d34,
            width: 720,
            height: 720,
            caption: "Challah the teddy bear - drawn with Procreate"
        },
        {
            src: d35,
            width: 916,
            height: 666,
            caption: "Winnie - drawn with Procreate"
        },
     {
        src: d1,
        width: 792,
        height: 533,
         caption: "Grandpa - drawn with Procreate"
    },
    {
        src: d2,
        width: 792,
        height: 533,
        caption: "Noah - drawn with Illustrator"
    },
    {
        src: d3,
        width: 491,
        height: 730,
        caption: "Self portrait - drawn with Illustrator"
    },
    {
        src: d4,
        width: 423,
        height: 653,
        caption: "Sail Squam Lake poster - drawn with Illustrator"
    },
    {
        src: d5,
        width: 929,
        height: 687,
        caption: "Eliza - drawn with Illustrator"
    },
    {
        src: d6,
        width: 545,
        height: 733,
        caption: "Mosque in Paris - drawn with Illustrator"
    },
    {
        src: d7,
        width: 532,
        height: 630,
        caption: "t-shirt design for Experience Squam - drawn with Photoshop"
    },
    {
        src: d8,
        width: 792,
        height: 527,
        caption: "Self portrait - drawn with Illustrator"
    },
    {
        src: d9,
        width: 796,
        height: 532,
        caption: "Daphnie - drawn with Illustrator"
    },
    {
        src: d10,
        width: 792,
        height: 612,
        caption: "Noah - drawn with Illustrator"
    },
    {
        src: d11,
        width: 680,
        height: 612,
        caption: "Self Portrait - drawn with Illustrator"
    },
    {
        src: d12,
        width: 850,
        height: 642,
        caption: "Daphnie - drawn with Illustrator"
    },
    {
        src: d13,
        width: 637,
        height: 825,
        caption: "Zazu - drawn with Illustrator"
    },
    {
        src: d14,
        width: 598,
        height: 792,
        caption: "Self portrait - drawn with Illustrator"
    },
    {
        src: d15,
        width: 792,
        height: 553,
        caption: "Noah - drawn with Illustrator"
    },
    {
        src: d16,
        width: 609,
        height: 771,
        caption: "Ernie - drawn with Illustrator"
    },
    {
        src: d17,
        width: 797,
        height: 535,
        caption: "Self portrait - drawn with Illustrator"
    },
    {
        src: d18,
        width: 835,
        height: 516,
        caption: "2D sketches - drawn with Illustrator"
    },
    {
        src: d19,
        width: 5101,
        height: 3301,
        caption: "The roommates - drawn with Illustrator"
    }
    ];

class Drawings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            viewerIsOpen: false,
        };
    }

    openLightbox = (e, {photo, index}) => {
        this.setState({currentImage: index, viewerIsOpen: true});
    };

    closeLightbox = () => {
        this.setState({currentImage: 0, viewerIsOpen: false})
};

 render() {
     const {viewerIsOpen, currentImage} = this.state;
     return (
     <div>
         <Home open={'drawings'}/>

         <div className={'gallery-computer d-none d-sm-none d-md-block'}>
             <Gallery photos={IMAGES} direction={"column"} onClick={(e, {photo, index})=> this.openLightbox(e, {photo, index})}/>
         </div>
         <div className={'d-sm-block d-md-none'}>
             <Gallery photos={IMAGES}/>
         </div>

         <ModalGateway>
             {viewerIsOpen ? (
                 <Modal onClose={this.closeLightbox}>
                     <Carousel
                         currentIndex={currentImage}
                         views={IMAGES.map(x => ({
                             ...x,
                             srcset: x.srcSet,
                             caption: x.caption
                         }))}
                     />
                 </Modal>
             ) : null}
         </ModalGateway>
     </div>
   )
  }
}

export default Drawings;
