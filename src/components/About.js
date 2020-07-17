import React from 'react';
import Home from './Home.js'


class About extends React.Component {
 render() { return(
    <div>
        <Home open={'about'}/>

       <h1 className="container-fluid mt-3">About</h1>
   </div>
   )
 }
}
export default About;