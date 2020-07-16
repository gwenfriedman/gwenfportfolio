import React from 'react';
import Home from './Home.js';
import s1 from './images/GA/sofar-3.16.jpg';
import s2 from './images/GA/sofar-3.19.jpg';
import s3 from './images/GA/sofar-3.29.jpg';
import s4 from './images/GA/sofar-3.27.jpg';
import s5 from './images/GA/sofar-11.22.jpg';
import s6 from './images/GA/sofar-4.12.jpg';
import s7 from './images/GA/sofar-4.18.jpg';
import s8 from './images/GA/sofar-3.8.jpg';
import s9 from './images/GA/sofar-4.5.jpg';
import s10 from './images/GA/sofar-4.3.jpg';
import s11 from './images/GA/sofar-9.5.jpg';
import s12 from './images/GA/sofar-11.16.jpg';
import s13 from './images/GA/sofar-12.11.jpg';
import s14 from './images/GA/sofar-3.26.jpg';
import s15 from './images/GA/sofar-2.14.jpg';
import s16 from './images/GA/sofar-2.6.jpg';
import s17 from './images/GA/mahler.jpg';

class GraphicArt extends React.Component {
 render() { return(
    <div>
        <Home/>
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-6">
                <img className="col" src={s1}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on March 3. </p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col border" src={s2}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on March 19. </p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={s3}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on March 29.</p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col" src={s4}/>
                <div class="col caption mt-1">
                  <p>Poster for Sofar Sounds Boston show on March 27.</p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={s5}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on November 22.</p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col" src={s6}/>
                <div class="col caption mt-1">
                  <p>Poster for Sofar Sounds Boston show on March 27.</p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={s7}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on April 18.</p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col border" src={s8}/>
                <div class="col caption mt-1">
                  <p>Poster for Sofar Sounds Boston show on March 8.</p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={s9}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on April 5.</p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col border" src={s10}/>
                <div class="col caption mt-1">
                  <p>Poster for Sofar Sounds Boston show on April 3.</p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={s11}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on September 5.</p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col" src={s12}/>
                <div class="col caption mt-1">
                  <p>Poster for Sofar Sounds Boston show on November 16.</p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={s13}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show.</p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col" src={s14}/>
                <div class="col caption mt-1">
                  <p>Poster for Sofar Sounds Boston show on March 26.</p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col border" src={s15}/>
                <div class="col caption mt-1">
                  <p> Poster for Sofar Sounds Boston show on February 12.</p>
            </div>
          </div>
          <div class="col-md-4 col-6">
                <img className="col" src={s16}/>
                <div class="col caption mt-1">
                  <p>Poster for Sofar Sounds Boston show on February 6.</p>
                </div>
          </div>
        </div>


        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={s17}/>
                <div class="col caption mt-1">
                  <p> Poster for Typography 1 class for a Mahler show at the BSO.</p>
            </div>
          </div>
        </div>
    </div>
   )
 }
}
export default GraphicArt;