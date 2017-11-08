import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker';


registerServiceWorker();

function render(){
  
    var route =window.location.hash === '' ? '' : window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById('root'));
  }
  window.addEventListener('hashchange',render);
  render();
