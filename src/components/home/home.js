import React from 'react';
import {Link} from 'react-router-dom';
let Home = ()=>{
    return (
        <div className="jumbotron">
        <h1>Pluralsight Adminstration</h1>
        <Link to="/about/some" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
}
export default Home;