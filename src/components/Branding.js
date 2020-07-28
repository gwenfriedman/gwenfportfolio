import React from 'react';
import Home from './Home.js'
import {Carousel} from "react-responsive-carousel";
import b1 from "./images/branding/peacock2.png";
import b2 from "./images/branding/MM2.png";
import b3 from "./images/branding/MM3.png";
import b4 from "./images/branding/hat1.png";
import b5 from "./images/branding/hat2.png";
import b6 from "./images/branding/hat3.png";
import b7 from "./images/branding/hat4.png";
import b13 from "./images/branding/hat6.png";
import b14 from "./images/branding/hat7.png";
import b9 from "./images/branding/pe1.png";
import b10 from "./images/branding/pe2.png";
import b11 from "./images/branding/pe3.png";
import b12 from "./images/branding/pe4.png";


class Branding extends React.Component {
 render() { return(
    <div>
        <Home open={'branding'}/>

        <div className={'sewing-carousel sewing-top'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={b1} />
                </div>
                <div>
                    <img src={b2} />
                </div>
                <div>
                    <img src={b3} />
                </div>
            </Carousel>
        </div>
        <p className={'carousel-text'}> test info </p>
        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={b4} />
                </div>
                <div>
                    <img src={b5} />
                </div>
                <div>
                    <img src={b6} />
                </div>
                <div>
                    <img src={b7} />
                </div>
                <div>
                    <img src={b13} />
                </div>
                <div>
                    <img src={b14} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text'}> test info </p>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={b9} />
                </div>
                <div>
                    <img src={b10} />
                </div>
                <div>
                    <img src={b11} />
                </div>
                <div>
                    <img src={b12} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text'}> test info </p>
    </div>
   )
 }
}
export default Branding;