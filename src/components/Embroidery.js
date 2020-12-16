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
import ImgComponent from "./ImgComponent";



class Embroidery extends React.Component {
 render() { return(
    <div>
        <Home className={'sticky'} open={'embroidery'}/>


        <ImgComponent
          images={[e1, e2, e3]}
          text={
            "Dragon embroidered on denim shirt."
          }
        />

        <ImgComponent
          images={[e4, e5]}
          text={
            "Woman embroidered on white tank top."
          }
        />

        <ImgComponent
          images={[e6, e7]}
          text={
            "Jean Dubuffet inspired art embroidered on denim skirt."
          }
        />

        <ImgComponent
          images={[e8, e9]}
          text={
            "Mini embroidery hoop necklaces. Laser cut, embroidered, assembled."
          }
        />

        <img className={'sewing-carousel'} src={e10} />

        <p className={'carousel-text jumpsuit'}>
            Denim dress embroidered with flowers.
        </p>

   </div>
   )
 }
}
export default Embroidery;