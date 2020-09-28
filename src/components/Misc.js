import React from 'react';
import Home from './Home.js'
import {Carousel} from "react-responsive-carousel";
import m1 from "./images/misc/cb1.png";
import m2 from "./images/misc/cb2.png";
import m3 from "./images/misc/cb3.png";
import m4 from "./images/misc/cb4.png";
import m5 from './images/misc/dragon2.png';
import m6 from './images/misc/dragon1.png';
import m7 from './images/misc/octopus.png';


class Mics extends React.Component {
    render() { return(
        <div>
            <Home open={'misc'}/>
            <div className={'sewing-carousel-md sewing-top'}>
                <Carousel showArrows={true} renderThumbs={() => []}>
                    <div>
                        <img src={m1} />
                    </div>
                    <div>
                        <img src={m2} />
                    </div>
                    <div>
                        <img src={m3} />
                    </div>
                    <div>
                        <img src={m4} />
                    </div>
                </Carousel>
            </div>

            <p className={'carousel-text ff-text'}>
                Cookbook filled with recipes for family favorites. Egg illustration made with Illustrator, book made with InDesign.
            </p>

            <div className={'sewing-carousel'}>
                <Carousel renderThumbs={() => []}>
                    <div>
                        <img src={m6} />
                    </div>
                    <div>
                        <img src={m5} />
                    </div>
                </Carousel>
            </div>


            <p className={'carousel-text ff-text'}>
                Lost wax casting sculpture of a dragon.
            </p>

            <img className={'sewing-carousel'} src={m7}/>

            <p className={'carousel-text ff-text'}>
                Wax sculpture of an octopus.
            </p>


        </div>
    )
    }
}
export default Mics;