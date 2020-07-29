import React from 'react';
import Home from './Home.js';
import './Home.css';
import s1 from './images/GA/art-deco.png';
import s2 from './images/GA/water-color.png';
import s3 from './images/GA/rainbow.png';
import s4 from './images/GA/flamingo.png';
import s5 from './images/GA/wavy.png';
import s6 from './images/GA/dragon.png';
import s7 from './images/GA/boston.png';
import s8 from './images/GA/nancy.png';
import s9 from './images/GA/roses.png';
import s10 from './images/GA/flowers.png';
import s11 from './images/GA/mermaid.png';
import s12 from './images/GA/fox.png';
import s13 from './images/GA/winter.png';
import s14 from './images/GA/retro.png';
import s15 from './images/GA/love.png';
import s16 from './images/GA/city.png';
import s17 from './images/GA/mahler.png';
import s18 from './images/GA/jungle.png';
import s19 from './images/GA/swamp.png';
import s20 from './images/GA/red.png';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const IMAGES =
    [
        {
            src: s18,
            width: 436,
            height: 675,
            caption: "Poster for Sofar Sounds Boston show on January 25, 2020 at WeWork."
        },
        {
        src: s1,
            width: 436,
            height: 675,
        caption: "Poster for Sofar Sounds Boston show on March 16, 2019."
    },
    {
        src: s2,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on March 19, 2019."
    },
    {
        src: s3,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on November 22, 2019 at Industry Lab."
    },
    {
        src: s4,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on March 29, 2019."
    },
    {
        src: s5,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on March 27, 2019."
    },
    {
        src: s6,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on April 12, 2019."
    },
    {
        src: s7,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on April, 18, 2019 at the Canopy Room."
    },
    {
        src: s8,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on March 8, 2019."
    },
    {
        src: s9,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on April 5, 2019."
    },
    {
        src: s10,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on April 3, 2019."
    },
    {
        src: s11,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on September 5, 2019 on the Schooner Roseway."
    },
    {
        src: s12,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on November 16, 2019 at Musicians Playground."
    },
    {
        src: s13,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show at Ash and Rose."
    },
    {
        src: s14,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on March 26, 2019."
    },
    {
        src: s15,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on February 14, 2019 at Ash and Rose."
    },
    {
        src: s16,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on February 6, 2019 at City Winery."
    },
    {
        src: s19,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on January 6, 2020 at Turtle Swamp Brewing."
    },
    {
        src: s20,
        width: 436,
        height: 675,
        caption: "Poster for Sofar Sounds Boston show on March 6, 2020 at the Foundation Room."
    },
        {
            src: s17,
            width: 436,
            height: 620,
            caption: "Poster made for Typography 1 class, for BSO show."
        }
    ];

class GraphicArt extends React.Component {
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
     return(
    <div>
        <Home open={'graphicart'}/>
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
 )}
}
export default GraphicArt;