import React from 'react';
import Home from './Home.js'
import './Home.css';

import aboutImage from './images/about.JPG';
import aboutMobile from './images/about-mobile.JPG';
import resume from './images/GwenFriedmanResume.pdf'


class About extends React.Component {
    render() { return(
        <div>
            <Home open={'about'}/>
            <img src={aboutImage} className={'about-image d-md-block d-none'}/>
            <img src={aboutMobile} className={'about-image d-sm-block d-md-none'}/>
            <div className={'bio'}>
                <h4> My name is Gwen and I'm a 4th year student at Northeastern University studying computer science
                    and interaction design. In my free time I like to sew, draw, play with my dog,
                    and work on my American Sign Language skills.</h4>
                <div className={'light-blue'}>
                    <h5 className={'new-thing'}>
                        Howlerr, an app that generates a theme song for your dog is available now in the App Store.
                    </h5>
                </div>
                <a href={resume} target="_blank" className={'resume'}> Resume </a>
                <a href={'https://www.instagram.com/art.by.gwen/'}> Instagram </a>
                <a href={'https://github.com/gwenfriedman'}> Github </a>
                <a href={'https://www.linkedin.com/in/gwendolyn-friedman/'}> LinkedIn </a>
                <h5> Contact me at gwenrfriedman@gmail.com </h5>
            </div>
        </div>
    )
    }
}
export default About;