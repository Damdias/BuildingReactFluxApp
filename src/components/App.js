import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import NaviBara from './navi/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <NaviBara/>
      </div>
        <div className="jumbotron">
          <h1>Pluralsight Adminstration</h1>
        </div>
      </div>
    );
  }
}
 
export default App;
