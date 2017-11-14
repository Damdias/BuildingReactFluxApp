import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import NaviBar from './navi/menu';
import Routes from "./route";
import {HashRouter} from "react-router-dom";
import "./../../node_modules/toastr/build/toastr.css";
import "./../../node_modules/jquery/dist/jquery";

class App extends Component {
  render() {
   
    return (
      <HashRouter>
      <div className="App">
        <div>
          <NaviBar />
        </div>
        <div className="container">
      
          <Routes/>
      
         
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
