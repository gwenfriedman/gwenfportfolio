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

        <img className={'sewing-carousel sewing-top d-none d-sm-none d-md-none d-lg-block'} src={s35}/>
        <img className={'sewing-carousel-md sewing-top d-none d-sm-none d-md-block d-lg-none'} src={s35}/>
        <img className={'sewing-carousel-sm sewing-top d-sm-block d-md-none d-lg-none'} src={s35}/>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Jumpsuit made from thrifted curtains. Zipper closure up the side. Ruffles down and around the bottom of each leg.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none jumpsuit-2'}>
            Jumpsuit made from thrifted curtains. Zipper closure up the side. Ruffles down and around the bottom of each leg.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none jumpsuit-2'}>
            Jumpsuit made from thrifted curtains. Zipper closure up the side. Ruffles down and around the bottom of each leg.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Grey and white jacket made out of thrifted pants. Lined with light pink polyester.
            Blue coat and yellow dress made of thrifted pants and tablecloth.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Grey and white jacket made out of thrifted pants. Lined with light pink polyester.
            Blue coat and yellow dress made of thrifted pants and tablecloth.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Grey and white jacket made out of thrifted pants. Lined with light pink polyester.
            Blue coat and yellow dress made of thrifted pants and tablecloth.
        </p>

        {/*--------------*/}

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s28} />
                </div>
                <div>
                    <img src={s29} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s28} />
                </div>
                <div>
                    <img src={s29} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s28} />
                </div>
                <div>
                    <img src={s29} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block quilt'}>
            Shirt and skirt set made to match hot pink jewelry. Made from cotton. Shirt ties in the front or back,
            skirt zips up the side.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Shirt and skirt set made to match hot pink jewelry. Made from cotton. Shirt ties in the front or back,
            skirt zips up the side.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Shirt and skirt set made to match hot pink jewelry. Made from cotton. Shirt ties in the front or back,
            skirt zips up the side.
        </p>

        {/*--------------*/}

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block quilt-text'}>
            2000+ piece quilt made from thrifted button down shirts. Backed with thrifted white cotton sheet.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            2000+ piece quilt made from thrifted button down shirts. Backed with thrifted white cotton sheet.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            2000+ piece quilt made from thrifted button down shirts. Backed with thrifted white cotton sheet.
        </p>

        {/*--------------*/}

        <img className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'} src={s36}/>
        <img className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'} src={s36}/>
        <img className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'} src={s36}/>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block make-mend'}>
            Dress made from vintage thrifted fabric.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none make-mend-md'}>
            Dress made from vintage thrifted fabric.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none make-mend-md'}>
            Dress made from vintage thrifted fabric.
        </p>

        {/*--------------*/}
        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s24} />
                </div>
                <div>
                    <img src={s25} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s24} />
                </div>
                <div>
                    <img src={s25} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s24} />
                </div>
                <div>
                    <img src={s25} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block daph-quilt'}>
            Modern style quilt backed with white and blue polka dot sheet.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Modern style quilt backed with white and blue polka dot sheet.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Modern style quilt backed with white and blue polka dot sheet.
        </p>

        {/*--------------*/}

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s26} />
                </div>
                <div>
                    <img src={s27} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s26} />
                </div>
                <div>
                    <img src={s27} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s26} />
                </div>
                <div>
                    <img src={s27} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Black Lives Matter quilts. Auctioned off to raise $700+ for charity.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Black Lives Matter quilts. Auctioned off to raise $700+ for charity.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Black Lives Matter quilts. Auctioned off to raise $700+ for charity.
        </p>

        {/*--------------*/}

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Gold fringe and black corduroy button up jacket and gold fringe dress. All materials were thrifted.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Gold fringe and black corduroy button up jacket and gold fringe dress. All materials were thrifted.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Gold fringe and black corduroy button up jacket and gold fringe dress. All materials were thrifted.
        </p>


        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Pants made from thrifted denim. Includes pockets at the knee. Pattern based on vintage jeans.
            Shirt upcycled from thrifted dress.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Pants made from thrifted denim. Includes pockets at the knee. Pattern based on vintage jeans.
            Shirt upcycled from thrifted dress.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Pants made from thrifted denim. Includes pockets at the knee. Pattern based on vintage jeans.
            Shirt upcycled from thrifted dress.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s40} />
                </div>
                <div>
                    <img src={s41} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s40} />
                </div>
                <div>
                    <img src={s41} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s40} />
                </div>
                <div>
                    <img src={s41} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Jacket made with thrifted denim. Pieced in classic star quilt block pattern.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Jacket made with thrifted denim. Pieced in classic star quilt block pattern.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Jacket made with thrifted denim. Pieced in classic star quilt block pattern.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            White and red pattern set made from thrifted fabric.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            White and red pattern set made from thrifted fabric.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            White and red pattern set made from thrifted fabric.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
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
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
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
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
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

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Shirt and skirt set. Shirt can be tied multiple ways.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Shirt and skirt set. Shirt can be tied multiple ways.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Shirt and skirt set. Shirt can be tied multiple ways.
        </p>

        {/*--------------*/}

        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s11} />
                </div>
                <div>
                    <img src={s12} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s11} />
                </div>
                <div>
                    <img src={s12} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s11} />
                </div>
                <div>
                    <img src={s12} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Jacket made out of old ripped jeans.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Jacket made out of old ripped jeans.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Jacket made out of old ripped jeans.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s13} />
                </div>
                <div>
                    <img src={s14} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s13} />
                </div>
                <div>
                    <img src={s14} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s13} />
                </div>
                <div>
                    <img src={s14} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Renaissance style dress made from red flannel.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Renaissance style dress made from red flannel.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Renaissance style dress made from red flannel.
        </p>


        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s15} />
                </div>
                <div>
                    <img src={s16} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s15} />
                </div>
                <div>
                    <img src={s16} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s15} />
                </div>
                <div>
                    <img src={s16} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Dress made with fabric I painted in the style of Jean Dubuffet.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Dress made with fabric I painted in the style of Jean Dubuffet.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Dress made with fabric I painted in the style of Jean Dubuffet.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s17} />
                </div>
                <div>
                    <img src={s18} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s17} />
                </div>
                <div>
                    <img src={s18} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s17} />
                </div>
                <div>
                    <img src={s18} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Red cotton with gold polka dots dress made for a holiday dance.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Red cotton with gold polka dots dress made for a holiday dance.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Red cotton with gold polka dots dress made for a holiday dance.
        </p>

        {/*--------------*/}


        <div className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s19} />
                </div>
                <div>
                    <img src={s20} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s19} />
                </div>
                <div>
                    <img src={s20} />
                </div>
            </Carousel>
        </div>
        <div className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'}>
            <Carousel renderThumbs={() => []}>
                <div>
                    <img src={s19} />
                </div>
                <div>
                    <img src={s20} />
                </div>
            </Carousel>
        </div>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Blue velvet dress made for a holiday dance.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none'}>
            Blue velvet dress made for a holiday dance.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none'}>
            Blue velvet dress made for a holiday dance.
        </p>

        {/*--------------*/}


        <img className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'} src={s22}/>
        <img className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'} src={s22}/>
        <img className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'} src={s22}/>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Dress, coat, shirt, and bowtie made for prom.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none sewing-image-text'}>
            Dress, coat, shirt, and bowtie made for prom.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none sewing-image-text'}>
            Dress, coat, shirt, and bowtie made for prom.
        </p>

        {/*--------------*/}

        <img className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'} src={s9}/>
        <img className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'} src={s9}/>
        <img className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'} src={s9}/>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Black and white patterned dress made from vintage sewing pattern.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none sewing-image-text'}>
            Black and white patterned dress made from vintage sewing pattern.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none sewing-image-text'}>
            Black and white patterned dress made from vintage sewing pattern.
        </p>

        {/*--------------*/}


        <img className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'} src={s10}/>
        <img className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'} src={s10}/>
        <img className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'} src={s10}/>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Dress made with fabric I printed with homemade cactus stamp.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none sewing-image-text'}>
            Dress made with fabric I printed with homemade cactus stamp.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none sewing-image-text'}>
            Dress made with fabric I printed with homemade cactus stamp.
        </p>

        {/*--------------*/}


        <img className={'sewing-carousel d-none d-sm-none d-md-none d-lg-block'} src={s21}/>
        <img className={'sewing-carousel-md d-none d-sm-none d-md-block d-lg-none'} src={s21}/>
        <img className={'sewing-carousel-sm d-sm-block d-md-none d-lg-none'} src={s21}/>

        <p className={'carousel-text d-none d-sm-none d-md-none d-lg-block jumpsuit'}>
            Flannel varsity jacket with personalized G.
        </p>
        <p className={'carousel-text-md d-none d-sm-none d-md-block d-lg-none sewing-image-text'}>
            Flannel varsity jacket with personalized G.
        </p>
        <p className={'carousel-text-sm d-sm-block d-md-none d-lg-none sewing-image-text'}>
            Flannel varsity jacket with personalized G.
        </p>
    </div>
   )
 }
}
export default Sewing;