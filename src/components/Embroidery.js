import React from 'react';
import Home from './Home.js'
import e1 from './images/Embroidery/19.jpg';
import e2 from './images/Embroidery/10.jpg';
import e3 from './images/Embroidery/shirt1.jpg';
import e4 from './images/Embroidery/shirt2.jpg';
import e5 from './images/Embroidery/7.jpg';
import e6 from './images/Embroidery/12.jpg';
import e7 from './images/Embroidery/skirt1.jpg';
import e8 from './images/Embroidery/necklace1.jpg';
import e9 from './images/Embroidery/necklace2.jpg';
import e10 from './images/Embroidery/18.jpg';
import {Carousel} from "react-responsive-carousel";


class Embroidery extends React.Component {
 render() { return(
    <div>
        <Home className={'sticky'} open={'embroidery'}/>

        <div className={'sewing-carousel sewing-top'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e1} />
                </div>
                <div>
                    <img src={e2} />
                </div>
                <div>
                    <img src={e3} />
                </div>
            </Carousel>
        </div>

       <div className="row justify-content-md-center mt-2">
             <div className="">
                   <div class="col caption">
                     <p> Dragon embroidered on denim shirt. </p>
               </div>
             </div>
       </div>

        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e4} />
                </div>
                <div>
                    <img src={e5} />
                </div>
            </Carousel>
        </div>

      <div className="row justify-content-md-center mt-2">
            <div className="">
                  <div class="col caption">
                    <p> Tanktop with woman embroidered on it. </p>
              </div>
            </div>
      </div>


        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e6} />
                </div>
                <div>
                    <img src={e7} />
                </div>
            </Carousel>
        </div>

    <div className="row justify-content-md-center mt-2">
          <div className="">
                <div class="col caption">
                  <p> Denim skirt with Jean Dubuffet inspired embroidery. </p>
            </div>
          </div>
    </div>


        <div className={'sewing-carousel'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e8} />
                </div>
                <div>
                    <img src={e9} />
                </div>
            </Carousel>
        </div>

        <img src={e10} />



   </div>
   )
 }
}
export default Embroidery;