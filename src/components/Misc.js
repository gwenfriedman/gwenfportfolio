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
            <div className={'sewing-carousel-md sewing-top d-none d-sm-none d-md-block d-lg-block'}>
                <Carousel renderThumbs={() => []}>
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
            <div className={'sewing-carousel-sm sewing-top d-sm-block d-md-none d-lg-none'}>
                <Carousel renderThumbs={() => []}>
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

            <p className={'misc-text d-none d-sm-none d-md-block d-lg-block'}>
                Cookbook filled with recipes for family favorites. Egg illustration made with Illustrator, book made with InDesign.
            </p>
            <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
                Cookbook filled with recipes for family favorites. Egg illustration made with Illustrator, book made with InDesign.
            </p>


            <div className={'sewing-carousel sewing-top d-none d-sm-none d-md-none d-lg-block hatsassy dragon-carousel'}>
                <Carousel renderThumbs={() => []}>
                    <div>
                        <img src={m6} />
                    </div>
                    <div>
                        <img src={m5} />
                    </div>
                </Carousel>
            </div>
            <div className={'sewing-carousel-md sewing-top d-none d-sm-none d-md-block d-lg-none'}>
                <Carousel renderThumbs={() => []}>
                    <div>
                        <img src={m6} />
                    </div>
                    <div>
                        <img src={m5} />
                    </div>
                </Carousel>
            </div>
            <div className={'sewing-carousel-sm sewing-top d-sm-block d-md-none d-lg-none'}>
                <Carousel renderThumbs={() => []}>
                    <div>
                        <img src={m6} />
                    </div>
                    <div>
                        <img src={m5} />
                    </div>
                </Carousel>
            </div>

            <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block dragon-text'}>
                Lost wax casting sculpture of a dragon.
            </p>
            <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
                Lost wax casting sculpture of a dragon.
            </p>
            <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
                Lost wax casting sculpture of a dragon.
            </p>

            <img className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'} src={m7}/>
            <img className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'} src={m7}/>
            <img className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'} src={m7}/>

            <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block octopus'}>
                Wax sculpture of an octopus.
            </p>
            <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none sewing-image-text'}>
                Wax sculpture of an octopus.
            </p>
            <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none sewing-image-text'}>
                Wax sculpture of an octopus.
            </p>


        </div>
    )
    }
}
export default Mics;