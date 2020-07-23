import React from 'react';
import Home from './Home.js';
import './Home.css';
import s1 from './images/GA/sofar-3.16.jpg';
import s2 from './images/GA/sofar-3.19.jpg';
import s3 from './images/GA/sofar-3.29.jpg';
import s4 from './images/GA/sofar-3.27.jpg';
import s5 from './images/GA/sofar-11.22.jpg';
import s6 from './images/GA/sofar-4.12.jpg';
import s7 from './images/GA/sofar-4.18.jpg';
import s8 from './images/GA/sofar-3.8.jpg';
import s9 from './images/GA/sofar-4.5.jpg';
import s10 from './images/GA/sofar-4.3.jpg';
import s11 from './images/GA/sofar-9.5.jpg';
import s12 from './images/GA/sofar-11.16.jpg';
import s13 from './images/GA/sofar-12.11.jpg';
import s14 from './images/GA/sofar-3.26.jpg';
import s15 from './images/GA/sofar-2.14.jpg';
import s16 from './images/GA/sofar-2.6.jpg';
import s17 from './images/GA/mahler.jpg';
import s18 from './images/GA/sofar-1.25.JPG';
import s19 from './images/GA/sofar-1.6.JPG';
import s20 from './images/GA/sofar-3.6.JPG';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const IMAGES =
    [
        {
            src: s18,
            width: 793,
            height: 1224,
            caption: "Poster for Sofar Sounds Boston show on March 3."
        },
        {
        src: s1,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s2,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s3,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s4,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s5,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s6,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s7,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s8,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s9,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s10,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s11,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s12,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s13,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s14,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s15,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s16,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s17,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s19,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s20,
        width: 793,
        height: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    }
    ];

//todo: add lightbox!

class GraphicArt extends React.Component {
 render() { return(
    <div>
        <Home open={'posters'}/>
        <div className={'gallery-computer d-none d-sm-none d-md-block'}>
            <Gallery photos={IMAGES} direction={"column"}/>
        </div>
        <div className={'d-sm-block d-md-none'}>
            <Gallery photos={IMAGES}/>
        </div>


    </div>
 )}
}
export default GraphicArt;