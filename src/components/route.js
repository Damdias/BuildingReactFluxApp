"use strict";
import React from "react";
import {
    Switch,
    Route,
    Link
  } from 'react-router-dom'
import Home from './home/home';
import Authors from "./authors/authorpage";
import About from "./about/about";



let Routes =() => {
    return(
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about/:name" component={About}/>
            <Route path="/author" component={Authors}/>
       
    </Switch>
)}
export default Routes;