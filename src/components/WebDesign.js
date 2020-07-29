import React from 'react';
import Home from './Home.js'
import './Home.css';

import homeImg from './images/webDesign/home.png';
import selectorImg from './images/webDesign/selector.png';

class WebDesign extends React.Component {
 render() { return(
    <div>
        <Home open={'webdesign'}/>
        <div className={'row web-images d-none d-md-none d-lg-block'}>
            <img src={homeImg} className={'home-img column'}/>
            <img src={selectorImg} className={'home-img column'}/>
        </div>

        <div className={'web-images d-none d-md-block d-lg-none'}>
            <img src={homeImg} className={'home-img-md'}/>
            <img src={selectorImg} className={'home-img-md'}/>
        </div>

        <div className={'d-block d-md-none d-lg-none'}>
            <img src={homeImg} className={'home-img-sm'}/>
            <img src={selectorImg} className={'home-img-sm'}/>
        </div>

        <div className={'d-none d-md-block d-lg-block'}>
            <p className={'webDesign'}>
                Web design for the site Picky Eater. For picky eaters and parents of picky eaters who are looking for new
                recipes and trying to expand their/their kid’s palette, Picky Eater is a recipe finding website that lets
                users search for recipes based on their dietary restrictions, allergies, foods they love, and foods they
                hate. Unlike AllRecipes and recipe blogs, Picky Eater has more precise filters, the ability to input
                everything into a profile, and the ability to slowly add food aversions back into the users diet.
            </p>
            <p className={'webDesign p2'}>
                The design process for this site included work flow sketches, creating personas, interviews, a site map,
                wireframes, looking at benchmarks, usability tests, story boards, and a final design prototype.
                My design changed throughout the process to better accommodate the users.
            </p>
            <a className={'invisionLink'} href={'https://invis.io/E8Y5DTQ695B'}> Click here to walk through final prototype on inVision. </a>
        </div>

        <div className={'d-block d-md-none d-lg-none d-xl-none'}>
            <p className={'webDesign-sm'}>
                Web design for the site Picky Eater. For picky eaters and parents of picky eaters who are looking for new
                recipes and trying to expand their/their kid’s palette, Picky Eater is a recipe finding website that lets
                users search for recipes based on their dietary restrictions, allergies, foods they love, and foods they
                hate. Unlike AllRecipes and recipe blogs, Picky Eater has more precise filters, the ability to input
                everything into a profile, and the ability to slowly add food aversions back into the users diet.
            </p>
            <p className={'webDesign-sm p2'}>
                The design process for this site included work flow sketches, creating personas, interviews, a site map,
                wireframes, looking at benchmarks, usability tests, story boards, and a final design prototype.
                My design changed throughout the process to better accommodate the users.
            </p>
            <a className={'invisionLink-sm'} href={'https://invis.io/E8Y5DTQ695B'}> Click here to walk through final prototype on inVision. </a>
        </div>

   </div>
   )
 }
}
export default WebDesign;