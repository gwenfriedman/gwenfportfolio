import React from 'react';
import Home from './Home.js'

import s1 from './images/Sewing/coat1.png';
import s2 from './images/Sewing/coat2.png';
import s3 from './images/Sewing/coat3.png';
import s4 from './images/Sewing/coat4.png';
import s5 from './images/Sewing/coat5.png';
import s6 from './images/Sewing/set1.jpg';
import s7 from './images/Sewing/set2.jpg';
import s8 from './images/Sewing/set3.jpg';
import s9 from './images/Sewing/dress1.jpg';
import s10 from './images/Sewing/dress2.jpg';
import s11 from './images/Sewing/jacket2.jpg';
import s12 from './images/Sewing/jacket3.jpg';
import s13 from './images/Sewing/dress3.jpg';
import s14 from './images/Sewing/dress4.jpg';
import s15 from './images/Sewing/dress5.jpg';
import s16 from './images/Sewing/dress6.jpg';
import s17 from './images/Sewing/dress7.jpg';
import s18 from './images/Sewing/dress8.jpg';
import s19 from './images/Sewing/dress9.jpg';
import s20 from './images/Sewing/dress10.jpg';
import s21 from './images/Sewing/jacket1.jpg';
// import s23 from './images/Sewing/prom.jpg';
import s24 from './images/Sewing/2quilt1.png';
import s25 from './images/Sewing/2quilt2.png';
import s26 from './images/Sewing/3quilt.png';
import s27 from './images/Sewing/4quilt.png';
import s28 from './images/Sewing/betsy1.png';
import s29 from './images/Sewing/betsy2.png';
import s30 from './images/Sewing/goldfringe1.png';
import s31 from './images/Sewing/goldfringe2.png';
import s32 from './images/Sewing/goldfringe3.png';
import s33 from './images/Sewing/goldfringe4.png';
import s34 from './images/Sewing/goldfringe5.png';
import s35 from './images/Sewing/jumpsuit.jpg';
import s36 from './images/Sewing/make&mend.JPG';
import s37 from './images/Sewing/quilt1.png';
import s38 from './images/Sewing/quilt2.png';
import s39 from './images/Sewing/quilt3.png';
import s40 from './images/Sewing/quiltJacket1.JPG';
import s41 from './images/Sewing/quiltJacket2.JPG';
import s42 from './images/Sewing/redSet1.png';
import s43 from './images/Sewing/redSet2.png';
import s44 from './images/Sewing/redSet3.png';
import s45 from './images/Sewing/velvet1.JPG';
import s46 from './images/Sewing/velvet2.JPG';
import s47 from './images/Sewing/velvet3.JPG';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Sewing extends React.Component {
 render() { return(
    <div>
        <Home open={'sewing'}/>

        <img className={'sewing-image sewing-top'} src={s35}/>


        <div className={'sewing-carousel'}>
        <Carousel renderThumbs={() => []}>
            <div>
                <img src={s1} />
            </div>
            <div>
                <img src={s2} />
            </div>
            <div>
                <img src={s3} />
            </div>
            <div>
                <img src={s4} />
            </div>
            <div>
                <img src={s5} />
            </div>
        </Carousel>
        </div>

        <div class="carousel-text">
            <p> Jacket made out of old pants. Coat and Dress made of old pants and tablecloth. </p>
        </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s28} />
                </div>
                <div>
                    <img src={s29} />
                </div>
            </Carousel>
        </div>


        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s37} />
                </div>
                <div>
                    <img src={s38} />
                </div>
                <div>
                    <img src={s39} />
                </div>
            </Carousel>
        </div>

        <img className={'sewing-image'} src={s36}/>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s24} />
                </div>
                <div>
                    <img src={s25} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s26} />
                </div>
                <div>
                    <img src={s27} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s30} />
                </div>
                <div>
                    <img src={s31} />
                </div>
                <div>
                    <img src={s32} />
                </div>
                <div>
                    <img src={s33} />
                </div>
                <div>
                    <img src={s34} />
                </div>
            </Carousel>
        </div>


        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s45} />
                </div>
                <div>
                    <img src={s46} />
                </div>
                <div>
                    <img src={s47} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s40} />
                </div>
                <div>
                    <img src={s41} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s42} />
                </div>
                <div>
                    <img src={s43} />
                </div>
                <div>
                    <img src={s44} />
                </div>
            </Carousel>
        </div>


        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s6} />
                </div>
                <div>
                    <img src={s7} />
                </div>
                <div>
                    <img src={s8} />
                </div>
            </Carousel>
        </div>

     <div className="row justify-content-md-center mt-2">
          <div className="text-center">
                <div class="col caption">
                  <p> Matching sets with top that can be styled multiple ways. </p>
            </div>
          </div>
    </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s11} />
                </div>
                <div>
                    <img src={s12} />
                </div>
            </Carousel>
        </div>

       <div className="row justify-content-md-center mt-2">
            <div className="text-center">
                  <div class="col caption">
                    <p> Jacket made out of old jeans. </p>
              </div>
            </div>
      </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s13} />
                </div>
                <div>
                    <img src={s14} />
                </div>
            </Carousel>
        </div>

       <div className="row justify-content-md-center mt-2">
            <div className="text-center">
                  <div class="col caption">
                    <p> Dress made from red flannel. </p>
              </div>
            </div>
      </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s15} />
                </div>
                <div>
                    <img src={s16} />
                </div>
            </Carousel>
        </div>

         <div className="row justify-content-md-center mt-2">
              <div className="text-center">
                    <div class="col caption">
                      <p> Dress made from hand painted fabric inspired by Jean Dubuffet. </p>
                </div>
              </div>
        </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s17} />
                </div>
                <div>
                    <img src={s18} />
                </div>
            </Carousel>
        </div>

         <div className="row justify-content-md-center mt-2">
              <div className="text-center">
                    <div class="col caption">
                      <p> Dress made from red cotton with gold polka dots. </p>
                </div>
              </div>
        </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s19} />
                </div>
                <div>
                    <img src={s20} />
                </div>
            </Carousel>
        </div>

         <div className="row justify-content-md-center mt-2">
              <div className="text-center">
                    <div class="col caption">
                      <p> Dress made from blue velvet. </p>
                </div>
              </div>
        </div>

        <img className={'sewing-image'} src={s9}/>
        <img className={'sewing-image'} src={s10}/>
        <img className={'sewing-image'} src={s21}/>
        {/*<img className={'sewing-image'} src={s23}/>*/}
   </div>
   )
 }
}
export default Sewing;