import React from 'react';
import Home from './Home.js'
import d1 from './images/GD/grandpa.png';
import d2 from './images/GD/noah4.png';
import d3 from './images/GD/face.jpg';
import d4 from './images/GD/squam.jpg';
import d5 from './images/GD/eliza.jpg';
import d6 from './images/GD/mosque.jpg';
import d7 from './images/GD/tshirt.jpg';
import d8 from './images/GD/gwen.png';
import d9 from './images/GD/daph2.png';
import d10 from './images/GD/Noah1.png';
import d11 from './images/GD/gwen2.png';
import d12 from './images/GD/daph1.jpg';
import d13 from './images/GD/zazu.png';
import d14 from './images/GD/gwen3.png';
import d15 from './images/GD/noah3.png';
import d16 from './images/GD/ernie.jpg';
import d17 from './images/GD/gwen4.png';
import d18 from './images/GD/2d.png';
import d19 from './images/GD/daph.jpg';
import d20 from './images/GD/barn.JPG';
import d21 from './images/GD/boston.JPG';
import d22 from './images/GD/boston2.JPG';
import d23 from './images/GD/copilot2.JPG';
import d24 from './images/GD/copilot.JPG';
import d25 from './images/GD/dog.JPG';
import d26 from './images/GD/flowers.JPG';
import d27 from './images/GD/france.JPG';
import d28 from './images/GD/geese.jpg';
import d29 from './images/GD/hotel.png';
import d30 from './images/GD/kalei.JPG';
import d31 from './images/GD/rats.JPG';
import d32 from './images/GD/room.JPG';
import d33 from './images/GD/self.JPG';
import d34 from './images/GD/teddy.JPG';
import d35 from './images/GD/winnie.JPG';
import d36 from './images/GD/jan.JPG';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const IMAGES =
    [
        {
            src: d20,
            width: 2160,
            height: 1620,
            caption: "Poster for Sofar Sounds Boston show on March 3."
        },
        {
            src: d21,
            width: 1621,
            height: 1261
        },
        {
            src: d22,
            width: 2160,
            height: 2149
        },
        {
            src: d23,
            width: 5500,
            height: 5500,
        },
        {
            src: d24,
            width: 5500,
            height: 5500,
        },
        {
            src: d25,
            width: 2160,
            height: 2160
        },
        {
            src: d36,
            width: 2160,
            height: 2160
        },
        {
            src: d26,
            width: 2160,
            height: 2160
        },
        {
            src: d27,
            width: 2160,
            height: 2160,
        },
        {
            src: d28,
            width: 2160,
            height: 2160,
        },
        {
            src: d29,
            width: 2160,
            height: 2160,
        },
        {
            src: d30,
            width: 2160,
            height: 2160,
        },
        {
            src: d31,
            width: 2160,
            height: 1216,
        },
        {
            src: d32,
            width: 2603,
            height: 2046
        },
        {
            src: d33,
            width: 4000,
            height: 5500
        },
        {
            src: d34,
            width: 2160,
            height: 2160,
        },
        {
            src: d35,
            width: 5500,
            height: 4000,
        },
     {
        src: d1,
        width: 792,
        height: 533,
    },
    {
        src: d2,
        width: 792,
        height: 533,
    },
    {
        src: d3,
        width: 491,
        height: 730,
    },
    {
        src: d4,
        width: 6600,
        height: 10200,
    },
    {
        src: d5,
        width: 3717,
        height: 2750,
    },
    {
        src: d6,
        width: 3300,
        height: 4401,
    },
    {
        src: d7,
        width: 8316,
        height: 9836
    },
    {
        src: d8,
        width: 792,
        height: 527
    },
    {
        src: d9,
        width: 796,
        height: 532,
    },
    {
        src: d10,
        width: 792,
        height: 612,
    },
    {
        src: d11,
        width: 680,
        height: 612,
    },
    {
        src: d12,
        width: 2550,
        height: 1928,
    },
    {
        src: d13,
        width: 2550,
        height: 3300,
    },
    {
        src: d14,
        width: 598,
        height: 792,
    },
    {
        src: d15,
        width: 792,
        height: 553,
    },
    {
        src: d16,
        width: 792,
        height: 1003,
    },
    {
        src: d17,
        width: 797,
        height: 535,
    },
    {
        src: d18,
        width: 4176,
        height: 2582,
    },
        {
            src: d19,
            width: 5101,
            height: 3301,
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
