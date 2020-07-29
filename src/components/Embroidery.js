import React from 'react';
import Home from './Home.js'
import e1 from './images/Embroidery/19.png';
import e2 from './images/Embroidery/10.png';
import e3 from './images/Embroidery/shirt1.png';
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


            <div className={'sewing-top sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
            <div className={'sewing-carousel-md sewing-top d-none d-sm-none d-md-block d-lg-none'}>
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
            <div className={'sewing-carousel-sm sewing-top d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block dragon'}>
            Dragon embroidered on denim shirt.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Dragon embroidered on denim shirt.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Dragon embroidered on denim shirt.
        </p>

        {/*--------------*/}

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e4} />
                </div>
                <div>
                    <img src={e5} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e4} />
                </div>
                <div>
                    <img src={e5} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e4} />
                </div>
                <div>
                    <img src={e5} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Woman embroidered on white tank top.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Woman embroidered on white tank top.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Woman embroidered on white tanktop.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e6} />
                </div>
                <div>
                    <img src={e7} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e6} />
                </div>
                <div>
                    <img src={e7} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e6} />
                </div>
                <div>
                    <img src={e7} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block dubuffet'}>
            Jean Dubuffet inspired art embroidered on denim skirt.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Jean Dubuffet inspired art embroidered on denim skirt.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Jean Dubuffet inspired art embroidered on denim skirt.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e8} />
                </div>
                <div>
                    <img src={e9} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e8} />
                </div>
                <div>
                    <img src={e9} />
                </div>
            </Carousel>
        </div>

        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={e8} />
                </div>
                <div>
                    <img src={e9} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block dubuffet'}>
            Mini embroidery hoop necklaces. Laser cut, embroidered, assembled.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Mini embroidery hoop necklaces. Laser cut, embroidered, assembled.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Mini embroidery hoop necklaces. Laser cut, embroidered, assembled.
        </p>

        {/*--------------*/}

        <img className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'} src={e10} />
        <img className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'} src={e10} />
        <img className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'} src={e10} />

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Denim dress embroidered with flowers.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none sewing-image-text'}>
            Denim dress embroidered with flowers.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none sewing-image-text'}>
            Denim dress embroidered with flowers.
        </p>

   </div>
   )
 }
}
export default Embroidery;