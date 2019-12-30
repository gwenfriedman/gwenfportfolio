import React from 'react';
import Home from './Home.js'
import e1 from './images/Embroidery/19.jpg';
import e2 from './images/Embroidery/10.jpg';
import e3 from './images/Embroidery/shirt1.jpg';
import e4 from './images/Embroidery/shirt2.jpg';
import e5 from './images/Embroidery/7.jpg';
import e6 from './images/Embroidery/12.jpg';
import e7 from './images/Embroidery/skirt1.jpg';


class Embroidery extends React.Component {
 render() { return(
    <div>
        <Home/>

       <h1 className="container-fluid text-center mt-3">Embroidery</h1>


        <div className="row justify-content-md-center mt-4">
             <div className="col-md-4 col-6">
                   <img className="col" src={e1}/>
             </div>
             <div class="col-md-4 col-6">
                   <img className="col" src={e2}/>
             </div>
              <div class="col-md-4 col-6">
                    <img className="col" src={e3}/>
              </div>
       </div>

       <div className="row justify-content-md-center mt-2">
             <div className="">
                   <div class="col caption">
                     <p> Dragon embroidered on denim shirt. </p>
               </div>
             </div>
       </div>


       <div className="row justify-content-md-center mt-4">
            <div className="col-md-4 col-6">
                  <img className="col" src={e4}/>
            </div>
            <div class="col-md-4 col-6">
                  <img className="col" src={e5}/>
            </div>
      </div>

      <div className="row justify-content-md-center mt-2">
            <div className="">
                  <div class="col caption">
                    <p> Tanktop with woman embroidered on it. </p>
              </div>
            </div>
      </div>


     <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 col-6">
                <img className="col" src={e6}/>
          </div>
          <div class="col-md-4 col-6">
                <img className="col" src={e7}/>
          </div>
    </div>

    <div className="row justify-content-md-center mt-2">
          <div className="">
                <div class="col caption">
                  <p> Denim skirt with Jean Dubuffet inspired embroidery. </p>
            </div>
          </div>
    </div>



   </div>
   )
 }
}
export default Embroidery;