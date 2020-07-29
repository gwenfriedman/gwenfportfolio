import React from 'react';
import Home from './Home.js'
import {Carousel} from "react-responsive-carousel";
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


class Branding extends React.Component {
 render() { return(
    <div>
        <Home open={'branding'}/>

        <div className={'sewing-carousel sewing-top d-none d-sm-none d-md-none d-lg-block hatsassy'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={b4} />
                </div>
                <div>
                    <img src={b15} />
                </div>
                <div>
                    <img src={b5} />
                </div>
                <div>
                    <img src={b13} />
                </div>
                <div>
                    <img src={b14} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md sewing-top d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={b4} />
                </div>
                <div>
                    <img src={b15} />
                </div>
                <div>
                    <img src={b5} />
                </div>
                <div>
                    <img src={b13} />
                </div>
                <div>
                    <img src={b14} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm sewing-top d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={b4} />
                </div>
                <div>
                    <img src={b15} />
                </div>
                <div>
                    <img src={b5} />
                </div>
                <div>
                    <img src={b13} />
                </div>
                <div>
                    <img src={b14} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block'}> Branding and logo for Hatsassy. An instagrammer who
            specialized in vintage hats. The logo is based off of hatsassy herself. The color are inspired by the account's fun feel. </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}> Branding and logo for Hatsassy. An instagrammer who
            specialized in vintage hats. The logo is based off of hatsassy herself. The color are inspired by the account's fun feel.</p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}> Branding and logo for Hatsassy. An instagrammer who
            specialized in vintage hats. The logo is based off of hatsassy herself. The color are inspired by the account's fun feel.</p>

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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
        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block'}> Logo for offshoot project of Mango and Marigold Press. This logo works off the
            company's color scheme and shapes. Mango and Marigold Press publishes children's books with a focus on diversity,
            especially Hinduism. In hinduism, peacocks are associated with the Goddess Saraswati
            (a deity representing patience, kindness, and knowledge). We chose to use a peacock in the logo because
            the message of knowledge and kindness aligns well with Mango and Marigold. Click through the carousel
            to see our work flow.</p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}> Logo for offshoot project of Mango and Marigold Press. This logo works off the
            company's color scheme and shapes. Mango and Marigold Press publishes children's books with a focus on diversity,
            especially Hinduism. In hinduism, peacocks are associated with the Goddess Saraswati
            (a deity representing patience, kindness, and knowledge). We chose to use a peacock in the logo because
            the message of knowledge and kindness aligns well with Mango and Marigold. Click through the carousel
            to see our work flow.</p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}> Logo for offshoot project of Mango and Marigold Press. This logo works off the
            company's color scheme and shapes. Mango and Marigold Press publishes children's books with a focus on diversity,
            especially Hinduism. In hinduism, peacocks are associated with the Goddess Saraswati
            (a deity representing patience, kindness, and knowledge). We chose to use a peacock in the logo because
            the message of knowledge and kindness aligns well with Mango and Marigold. Click through the carousel
            to see our work flow.</p>

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block'}> Branding and logo for the website Picky Eater. Done for
        Interaction Design 1 class. The fork and food logo represents the websites goal, to make people less picky with their food
        and to give them more options for meals. The clean green color and thin font makes the website seem like it offers
        healthy and light recipes. Click through the carousel to see my workflow.</p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}> Branding and logo for the website Picky Eater. Done for
            Interaction Design 1 class. The fork and food logo represents the websites goal, to make people less picky with their food
            and to give them more options for meals. The clean green color and thin font makes the website seem like it offers
            healthy and light recipes. Click through the carousel to see my workflow.</p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}> Branding and logo for the website Picky Eater. Done for
            Interaction Design 1 class. The fork and food logo represents the websites goal, to make people less picky with their food
            and to give them more options for meals. The clean green color and thin font makes the website seem like it offers
            healthy and light recipes. Click through the carousel to see my workflow.</p>
    </div>
   )
 }
}
export default Branding;