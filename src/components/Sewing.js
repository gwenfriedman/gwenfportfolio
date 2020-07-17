import React from 'react';
import Home from './Home.js'

import s1 from './images/Sewing/coat1.jpg';
import s2 from './images/Sewing/coat2.jpg';
import s3 from './images/Sewing/coat3.jpg';
import s4 from './images/Sewing/coat4.jpg';
import s5 from './images/Sewing/coat5.jpg';
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
import s22 from './images/Sewing/bowtie1.jpg';
// import s23 from './images/Sewing/prom.jpg';



class Sewing extends React.Component {
 render() { return(
    <div>
        <Home open={'sewing'}/>
       <div className="row justify-content-md-center mt-4">
             <div className="col-md-4 col-6">
                   <img className="col" src={s1}/>
             </div>
             <div class="col-md-4 col-6">
                   <img className="col" src={s2}/>
             </div>
              <div class="col-md-4 col-6">
                    <img className="col" src={s5}/>
              </div>
       </div>

      <div className="row justify-content-md-center mt-4">
            <div className="col-md-4 col-6">
                  <img className="col" src={s3}/>
            </div>
            <div class="col-md-4 col-6">
                  <img className="col" src={s4}/>
            </div>
      </div>

       <div className="row justify-content-md-center mt-2">
            <div className="text-center">
                  <div class="col caption">
                    <p> Jacket made out of old pants. Coat and Dress made of old pants and tablecloth. </p>
              </div>
            </div>
      </div>


     <div className="row justify-content-md-center mt-4">
           <div className="col-md-4 col-6">
                 <img className="col" src={s6}/>
           </div>
           <div class="col-md-4 col-6">
                 <img className="col" src={s7}/>
           </div>
            <div class="col-md-4 col-6">
                  <img className="col" src={s8}/>
            </div>
     </div>

     <div className="row justify-content-md-center mt-2">
          <div className="text-center">
                <div class="col caption">
                  <p> Matching sets with top that can be styled multiple ways. </p>
            </div>
          </div>
    </div>


     <div className="row justify-content-md-center mt-4">
           <div className="col-md-4 col-6">
                 <img className="col" src={s9}/>
           </div>
           <div class="col-md-4 col-6">
                 <img className="col" src={s10}/>
           </div>
     </div>

     <div className="row justify-content-md-center mt-2">
          <div className="col-md-4 col-6">
            <div class="col caption">
              <p> Dress made with vintage pattern. </p>
            </div>
          </div>
        <div className="col-md-4 col-6">
          <div class="col caption">
            <p> Dress made with hand stamped fabric. </p>
          </div>
        </div>
    </div>

      <div className="row justify-content-md-center mt-4">
            <div className="col-md-4 col-6">
                  <img className="col" src={s11}/>
            </div>
            <div class="col-md-4 col-6">
                  <img className="col" src={s12}/>
            </div>
      </div>

       <div className="row justify-content-md-center mt-2">
            <div className="text-center">
                  <div class="col caption">
                    <p> Jacket made out of old jeans. </p>
              </div>
            </div>
      </div>


      <div className="row justify-content-md-center mt-4">
            <div className="col-md-4 col-6">
                  <img className="col" src={s13}/>
            </div>
            <div class="col-md-4 col-6">
                  <img className="col" src={s14}/>
            </div>
      </div>

       <div className="row justify-content-md-center mt-2">
            <div className="text-center">
                  <div class="col caption">
                    <p> Dress made from red flannel. </p>
              </div>
            </div>
      </div>

        <div className="row justify-content-md-center mt-4">
              <div className="col-md-4 col-6">
                    <img className="col" src={s15}/>
              </div>
              <div class="col-md-4 col-6">
                    <img className="col" src={s16}/>
              </div>
        </div>

         <div className="row justify-content-md-center mt-2">
              <div className="text-center">
                    <div class="col caption">
                      <p> Dress made from hand painted fabric inspired by Jean Dubuffet. </p>
                </div>
              </div>
        </div>

        <div className="row justify-content-md-center mt-4">
              <div className="col-md-4 col-6">
                    <img className="col" src={s17}/>
              </div>
              <div class="col-md-4 col-6">
                    <img className="col" src={s18}/>
              </div>
        </div>

         <div className="row justify-content-md-center mt-2">
              <div className="text-center">
                    <div class="col caption">
                      <p> Dress made from red cotton with gold polka dots. </p>
                </div>
              </div>
        </div>

        <div className="row justify-content-md-center mt-4">
              <div className="col-md-4 col-6">
                    <img className="col" src={s19}/>
              </div>
              <div class="col-md-4 col-6">
                    <img className="col" src={s20}/>
              </div>
        </div>

         <div className="row justify-content-md-center mt-2">
              <div className="text-center">
                    <div class="col caption">
                      <p> Dress made from blue velvet. </p>
                </div>
              </div>
        </div>


     <div className="row justify-content-md-center mt-4">
           <div className="col-md-4 col-6">
                 <img className="col" src={s21}/>
           </div>
           <div class="col-md-4 col-6">
                 <img className="col" src={s22}/>
           </div>
     </div>

     <div className="row justify-content-md-center mt-2">
          <div className="col-md-4 col-6">
            <div class="col caption">
              <p> Jacket made from flannel personalized with an N. </p>
            </div>
          </div>
        <div className="col-md-4 col-6">
          <div class="col caption">
            <p> Bowtie made with red cotton with gold polka dots. </p>
          </div>
        </div>
    </div>

    {/*<div className="row justify-content-md-center mt-4">*/}
    {/*           <div className="col-md-4 col-6">*/}
    {/*                 <img className="col" src={s23}/>*/}
    {/*           </div>*/}
    {/*     </div>*/}

    {/*     <div className="row justify-content-md-center mt-2">*/}
    {/*          <div className="col-md-4 col-6">*/}
    {/*            <div class="col caption">*/}
    {/*              <p> Dress, jacket, shirt, and bowtie made for prom. </p>*/}
    {/*            </div>*/}
    {/*          </div>*/}
    {/*    </div>*/}


   </div>
   )
 }
}
export default Sewing;