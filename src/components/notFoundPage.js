import React from 'react';
import {Link} from "react-router-dom";
let NotFoundPage = ()=>{
return(
    <div>
        <h1>Page not Found</h1>
        <p>Whoops! Sorry, there is nothing so see here.</p>
        <p><Link className="btn btn-primary" to="/">Back to Home</Link></p>
    </div>
);
}
export default NotFoundPage;