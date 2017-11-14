"use strict";
import React from "react";
import {
    Switch,
    Route,
    Link
  } from 'react-router-dom'
import {Redirect} from 'react-router';
import Home from './home/home';
import Authors from "./authors/authorpage";
import About from "./about/about";
import NotFoundPage from "./notFoundPage";



let Routes =() => {
    return(
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/author" component={Authors}/>
            <Redirect from="/about-us" to="/about" />
            <Redirect from="/about/*" to="/about" />
            <Redirect from="/awthors" to="/author" />
            <Route component={NotFoundPage}/>
           
    </Switch>
)}
export default Routes;