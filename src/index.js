import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App";

registerServiceWorker();


  
   
    ReactDOM.render( <App  />, document.getElementById('root'));
  


