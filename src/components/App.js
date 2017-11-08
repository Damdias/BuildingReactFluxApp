import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import NaviBar from './navi/menu';
import About from './about/about';
import Home from './home/home';
import Author from './authors/authorpage';

class App extends Component {
  render() {
    var Child;
    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
        case 'author':
        Child = Author;
        break;
      default:
        Child = Home;
    }
    return (
      <div className="App">
        <div>
          <NaviBar />
        </div>
        <div className="container">
          <Child />
        </div>

      </div>
    );
  }
}

export default App;
