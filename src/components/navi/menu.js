import React from 'react';
let NaviBar = () =>{
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">PluralSight</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>           
          </ul>
        </div>
      </nav>
    );
  }

  export default NaviBar;