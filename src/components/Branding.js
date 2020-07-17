import React from 'react';
import Home from './Home.js'


class Branding extends React.Component {
 render() { return(
    <div>
        <Home open={'branding'}/>

       <h1 className="container-fluid mt-3">Branding</h1>
   </div>
   )
 }
}
export default Branding;