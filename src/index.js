import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GraphicArt from './components/GraphicArt.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

//function App() {
//  return (
//  	<Router>
//	    <div>
//	        <Route exact path='/'
//        	 component={GraphicArt}/>
//        </div>
//    </Router>
//  )
//}


//ReactDOM.render(
// <GraphicArt/>,
// document.getElementById('root')
//);

//import React from 'react';
//import ReactDOM from 'react-dom';
//
ReactDOM.render(<App />, document.getElementById('root'));
//
//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
