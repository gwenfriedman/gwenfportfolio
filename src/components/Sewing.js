import React from 'react';
import Home from './Home.js'

import s1 from './images/Sewing/coat1.png';
import s2 from './images/Sewing/coat2.png';
import s3 from './images/Sewing/coat3.png';
import s4 from './images/Sewing/coat4.png';
import s5 from './images/Sewing/coat5.png';
import s6 from './images/Sewing/set1.png';
import s7 from './images/Sewing/set2.png';
import s8 from './images/Sewing/set3.png';
import s9 from './images/Sewing/dress1.png';
import s10 from './images/Sewing/dress2.png';
import s11 from './images/Sewing/jacket2.png';
import s12 from './images/Sewing/jacket3.png';
import s13 from './images/Sewing/dress3.png';
import s14 from './images/Sewing/dress4.png';
import s15 from './images/Sewing/dress5.png';
import s16 from './images/Sewing/dress6.png';
import s17 from './images/Sewing/dress7.png';
import s18 from './images/Sewing/dress8.png';
import s19 from './images/Sewing/dress9.png';
import s20 from './images/Sewing/dress10.png';
import s21 from './images/Sewing/jacket1.png';
import s22 from './images/Sewing/prom.png';
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
import s35 from './images/Sewing/jumpsuit.png';
import s36 from './images/Sewing/make&mend.png';
import s37 from './images/Sewing/quilt1.png';
import s38 from './images/Sewing/quilt2.png';
import s39 from './images/Sewing/quilt3.png';
import s40 from './images/Sewing/quiltJacket1.png';
import s41 from './images/Sewing/quiltJacket2.png';
import s42 from './images/Sewing/redSet1.png';
import s43 from './images/Sewing/redSet2.png';
import s44 from './images/Sewing/redSet3.png';
import s45 from './images/Sewing/velvet1.png';
import s46 from './images/Sewing/velvet2.png';
import s47 from './images/Sewing/velvet3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImgComponent from "./ImgComponent";

class Sewing extends React.Component {
 render() { return(
    <div>
        <Home open={'sewing'}/>

        <img className={'sewing-carousel sewing-top'} src={s35}/>
        <p className={'carousel-text jumpsuit'}>
            Jumpsuit made from thrifted curtains. Zipper closure up the side. Ruffles down and around the bottom of each leg.
        </p>



        <ImgComponent
          images={[s1, s2, s3, s4, s5]}
          text={
            "Grey and white jacket made out of thrifted pants. Lined with light pink polyester." +
            " Blue coat and yellow dress made of thrifted pants and tablecloth."
          }
        />

        <ImgComponent
          images={[s28, s29]}
          text={
            "Shirt and skirt set made to match hot pink jewelry. Made from cotton. Shirt ties in the front or back,"+
            " skirt zips up the side."
          }
        />

        <ImgComponent
          images={[s37, s38, s39]}
          text={
            "2000+ piece quilt made from thrifted button down shirts. Backed with thrifted white cotton sheet."
          }
        />

        <img className={'sewing-carousel'} src={s36}/>

        <p className={'carousel-text make-mend'}>
            Dress made from vintage thrifted fabric.
        </p>


        <ImgComponent
          images={[s24, s25]}
          text={
            "Modern style quilt backed with white and blue polka dot sheet."
          }
        />

        <ImgComponent
          images={[s26, s27]}
          text={
            "Black Lives Matter quilts. Auctioned off to raise $700+ for charity."
          }
        />

        <ImgComponent
          images={[s30, s31, s32, s33, s34]}
          text={
            "Gold fringe and black corduroy button up jacket and gold fringe dress. All materials were thrifted."
          }
        />

        <ImgComponent
          images={[s45, s46, s47]}
          text={
            "Pants made from thrifted denim. Includes pockets at the knee. Pattern based on vintage jeans." +
            " Shirt upcycled from thrifted dress."
          }
        />

        <ImgComponent
          images={[s40, s41]}
          text={
            "Jacket made with thrifted denim. Pieced in classic star quilt block pattern."
          }
        />

        <ImgComponent
          images={[s42, s43, s44]}
          text={
            "White and red pattern set made from thrifted fabric."
          }
        />

        <ImgComponent
          images={[s6, s7, s8]}
          text={
            "Shirt and skirt set. Shirt can be tied multiple ways."
          }
        />

        <ImgComponent
          images={[s11, s12]}
          text={
            "Jacket made out of old ripped jeans."
          }
        />

        <ImgComponent
          images={[s13, s14]}
          text={
            "Renaissance style dress made from red flannel."
          }
        />

        <ImgComponent
          images={[s15, s16]}
          text={
            "Dress made with fabric I painted in the style of Jean Dubuffet."
          }
        />

        <ImgComponent
          images={[s17, s18]}
          text={
            "Red cotton with gold polka dots dress made for a holiday dance."
          }
        />

        <ImgComponent
          images={[s19, s20]}
          text={
            "Blue velvet dress made for a holiday dance."
          }
        />

        <img className={'sewing-carousel'} src={s22}/>

        <p className={'carousel-text prom'}>
            Dress, coat, shirt, and bowtie made for prom.
        </p>

        {/*--------------*/}

        <img className={'sewing-carousel'} src={s9}/>


        <p className={'carousel-text jumpsuit'}>
            Black and white patterned dress made from vintage sewing pattern.
        </p>

        {/*--------------*/}


        <img className={'sewing-carousel'} src={s10}/>

        <p className={'carousel-text jumpsuit'}>
            Dress made with fabric I printed with homemade cactus stamp.
        </p>

        {/*--------------*/}


        <img className={'sewing-carousel'} src={s21}/>

        <p className={'carousel-text jumpsuit'}>
            Flannel varsity jacket with personalized G.
        </p>
    </div>
   )
 }
}
export default Sewing;