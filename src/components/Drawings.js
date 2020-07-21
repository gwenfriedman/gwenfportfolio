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
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const IMAGES =
    [{
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
        width: 1179,
        height: 1754,
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

    openLightbox = () => {
            this.setState({currentImage: 1, viewerIsOpen: true});
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
             <Gallery photos={IMAGES} direction={"column"} onClick={this.openLightbox}/>
         </div>
         <div className={'d-sm-block d-md-none'}>
             <Gallery photos={IMAGES}/>
         </div>

         {/*<ModalGateway>*/}
             {/*{viewerIsOpen ? (*/}
             {/*    <Modal onClose={this.closeLightbox}>*/}
             {/*        <Carousel*/}
             {/*            currentIndex={currentImage}*/}
             {/*            views={IMAGES.map(x => ({*/}
             {/*                ...x,*/}
             {/*                srcset: x.srcSet,*/}
             {/*                caption: x.title*/}
             {/*            }))}*/}
             {/*        />*/}
             {/*    </Modal>*/}
             {/*) : null}*/}
         {/*</ModalGateway>*/}
     </div>
   )
  }
}

export default Drawings;


// import React, {Component, Fragment} from 'react';
// import Carousel, { Modal, ModalGateway } from 'react-images';
// import Gallery from "react-photo-gallery";
// import Lightbox from 'react-images';
//
//
// const IMAGES =
//     [{
//         src: d1,
//         width: 792,
//         height: 533,
//     },
//     {
//         src: d2,
//         width: 792,
//         height: 533,
//     }
// ];
//
// class Drawings extends Component {
//     state = {
//         selectedIndex: 0,
//         lightboxIsOpen: false,
//     };
//     toggleLightbox = (selectedIndex) => {
//         this.setState(state => ({
//             lightboxIsOpen: !state.lightboxIsOpen,
//             selectedIndex,
//         }));
//     };
//
//     render() {
//         const {selectedIndex, lightboxIsOpen} = this.state;
//         return (
//             <Fragment>
//                 <Gallery photos={IMAGES} direction={"column"} onClick={this.openLightbox}/>
//                 {/*<Gallery>*/}
//                 {/*    {IMAGES.map(({ caption, source }, j) => (*/}
//                 {/*        <Image*/}
//                 {/*            onClick={() => this.toggleLightbox(j)}*/}
//                 {/*            key={source}*/}
//                 {/*        >*/}
//                 {/*            <img*/}
//                 {/*                alt={caption}*/}
//                 {/*                src={source}*/}
//                 {/*                css={{*/}
//                 {/*                    cursor: 'pointer',*/}
//                 {/*                    position: 'absolute',*/}
//                 {/*                    maxWidth: '100%',*/}
//                 {/*                }}*/}
//                 {/*            />*/}
//                 {/*        </Image>*/}
//                 {/*    ))}*/}
//                 {/*</Gallery>*/}
//
//                 {/*<ModalGateway>*/}
//                 {/*    {lightboxIsOpen ? (*/}
//                 {/*        <Modal onClose={this.toggleLightbox}>*/}
//                 {/*            <Carousel*/}
//                 {/*                currentIndex={selectedIndex}*/}
//                 {/*                views={IMAGES}*/}
//                 {/*            />*/}
//                 {/*        </Modal>*/}
//                 {/*    ) : null}*/}
//                 {/*</ModalGateway>*/}
//             </Fragment>
//         );
//     }
// }
//
// export default Drawings;
