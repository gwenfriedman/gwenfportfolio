import React from 'react';
import Home from './Home.js'
import './Home.css';

import aboutImage from './images/about.JPG';
import aboutMobile from './images/about-mobile.JPG';


class About extends React.Component {
 render() { return(
    <div>
        <Home open={'about'}/>
        <img src={aboutImage} className={'about-image d-none d-md-none d-lg-block'}/>
        <div className={'bio d-none d-md-none d-lg-block'}>
        <h4> My name is Gwen and I'm a 4th year student at Northeastern University studying computer science
            and interaction design. In my free time I like to sew, draw, play with my dog,
            and work on my American Sign Language skills.</h4>
        <h5 className={'resume'}> insert resume link </h5>
            <a className={'instaLink'} href={'https://www.instagram.com/art.by.gwen/'}> Instagram: @art.by.gwen </a>
            <a> Github </a>
            <h5> Contact me at gwenrfriedman@gmail.com </h5>
        </div>

        <img src={aboutImage} className={'about-image-tablet d-none d-sm-none d-md-block d-lg-none'}/>
        <div className={'bio-tablet d-none d-none d-sm-none d-md-block d-lg-none'}>
            <h4> My name is Gwen and I'm a 4th year student at Northeastern University studying computer science
                and interaction design. In my free time I like to sew, draw, play with my dog,
                and work on my American Sign Language skills.</h4>
            <h5 className={'resume'}> insert resume link </h5>
            <a className={'instaLink'} href={'https://www.instagram.com/art.by.gwen/'}> Instagram: @art.by.gwen </a>
            <a> Github </a>
            <h5> Contact me at gwenrfriedman@gmail.com </h5>
        </div>

        <img src={aboutMobile} className={'about-image-phone d-sm-block d-md-none'}/>
        <div className={'bio-phone d-sm-block d-md-none'}>
            <h4> My name is Gwen and I'm a 4th year student at Northeastern University studying computer science
                and interaction design. In my free time I like to sew, draw, play with my dog,
                and work on my American Sign Language skills.</h4>
            <h5 className={'resume'}> insert resume link </h5>
            <a className={'instaLink'} href={'https://www.instagram.com/art.by.gwen/'}> Instagram: @art.by.gwen </a>
            <a> Github </a>
            <h5> Contact me at gwenrfriedman@gmail.com </h5>
        </div>


   </div>
   )
 }
}
export default About;