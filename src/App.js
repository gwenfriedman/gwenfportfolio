import React from 'react';
import logo from './logo.svg';
import './App.css';
import GraphicArt from './components/GraphicArt.js'
import Home from './components/Home.js'
import WebDesign from './components/WebDesign.js'

import About from './components/About.js'
import Branding from './components/Branding.js'
import Embroidery from './components/Embroidery.js'
import Photos from './components/Photos.js'
import Sewing from './components/Sewing.js'
import Drawings from './components/Drawings.js'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

  return (
  	<Router>
	    <div>
	        <Route exact path='/'
        	 component={Home}/>

            <Route exact path='/graphicart'
             component={GraphicArt}/>

             <Route exact path='/drawings'
              component={Drawings}/>

             <Route exact path='/webdesign'
              component={WebDesign}/>

              <Route exact path='/about'
               component={About}/>

               <Route exact path='/branding'
                component={Branding}/>

               <Route exact path='/embroidery'
                component={Embroidery}/>

                <Route exact path='/photography'
                 component={Photos}/>

                 <Route exact path='/sewing'
                   component={Sewing}/>
        </div>
    </Router>
  )
}
export default App;
