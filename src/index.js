import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Taco from "./Taco";

const rootElement = document.getElementById("root"); 
ReactDOM.render( <Taco />, rootElement);

serviceWorker.unregister();
