import React from 'react';
import './App.css';
import Drawings from './components/Drawings.js'
import Posters from './components/Posters.js'
import MobileMenu from './components/MobileMenu.js'
import WebDesign from './components/WebDesign.js'
import About from './components/About.js'
import Branding from './components/Branding.js'
import Embroidery from './components/Embroidery.js'
import Sewing from './components/Sewing.js'
import Misc from './components/Misc.js'
import PrivacyPolicy from './components/PrivacyPolicy'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  return (
  	<Router>
        <Route exact path='/mobilemenu/:page'
          component={MobileMenu}/>

        <Route exact path='/posters'
         component={Posters}/>

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

         <Route exact path='/sewing'
           component={Sewing}/>

        <Route exact path='/misc'
               component={Misc}/>

        <Route exact path='/privacypolicy'
               component={PrivacyPolicy}/>

        <Route exact path='/'
               component={Posters}/>
    </Router>
  )
}
export default App;
