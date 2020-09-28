import React from 'react';
import Home from './Home.js'
import e1 from './images/Embroidery/19.png';
import e2 from './images/Embroidery/10.png';
import e3 from './images/Embroidery/shirt1.png';
import e4 from './images/Embroidery/shirt2.png';
import e5 from './images/Embroidery/7.png';
import e6 from './images/Embroidery/12.png';
import e7 from './images/Embroidery/skirt1.png';
import e8 from './images/Embroidery/necklace1.png';
import e9 from './images/Embroidery/necklace2.png';
import e10 from './images/Embroidery/18.png';
import {Carousel} from "react-responsive-carousel";


class Embroidery extends React.Component {
 render() { return(
    <div>
        <Home className={'sticky'} open={'embroidery'}/>


            <div className={'sewing-top sewing-carousel'}>
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

        <p className={'carousel-text dragon'}>
            Dragon embroidered on denim shirt.
        </p>

        {/*--------------*/}

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

        <p className={'carousel-text jumpsuit'}>
            Woman embroidered on white tank top.
        </p>

        {/*--------------*/}


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

        <p className={'carousel-text dubuffet'}>
            Jean Dubuffet inspired art embroidered on denim skirt.
        </p>

        {/*--------------*/}


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

        <p className={'carousel-text dubuffet'}>
            Mini embroidery hoop necklaces. Laser cut, embroidered, assembled.
        </p>

        {/*--------------*/}

        <img className={'sewing-carousel'} src={e10} />

        <p className={'carousel-text jumpsuit'}>
            Denim dress embroidered with flowers.
        </p>

   </div>
   )
 }
}
export default Embroidery;