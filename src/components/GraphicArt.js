import React from 'react';
import Home from './Home.js';
import './Home.css';
import Gallery from 'react-grid-gallery';
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


const IMAGES =
    [{
        src: s1,
        thumbnail: s1,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s2,
        thumbnail: s2,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s3,
        thumbnail: s3,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s4,
        thumbnail: s4,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s5,
        thumbnail: s5,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s6,
        thumbnail: s6,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s7,
        thumbnail: s7,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s8,
        thumbnail: s8,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s9,
        thumbnail: s9,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s10,
        thumbnail: s10,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s11,
        thumbnail: s11,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s12,
        thumbnail: s12,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s13,
        thumbnail: s13,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s14,
        thumbnail: s14,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s15,
        thumbnail: s15,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s16,
        thumbnail: s16,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    },
    {
        src: s17,
        thumbnail: s17,
        thumbnailWidth: 793,
        thumbnailHeight: 1224,
        caption: "Poster for Sofar Sounds Boston show on March 3."
    }
    ];

class GraphicArt extends React.Component {
 render() { return(
    <div>
        <Home open={'posters'}/>
        <div className={'gallery-computer d-none d-sm-none d-md-block'}>
        <Gallery className={'gallery'} images={IMAGES} enableImageSelection={false} showImageCount={false} rowHeight={612}/>
        </div>
        <div className={'d-sm-block d-md-none'}>
            <Gallery className={'gallery'} images={IMAGES} enableImageSelection={false} showImageCount={false} rowHeight={612}/>
        </div>
    </div>
 )}
}
export default GraphicArt;