import React from 'react';
import logo from './logo.svg';
import './App.css';
import GraphicArt from './components/GraphicArt.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {

  return (
  	<Router>
	    <div>
	        <Route exact path='/'
        	 component={GraphicArt}/>
        </div>
    </Router>
  )
}

//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
