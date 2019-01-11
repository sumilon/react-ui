import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropState from './props-state'
import Arithmetic from './Incri-Decri'
import P3 from './P3'
import RouterApp1 from './routerapp1'
import Slidebar from './Sidebar'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Slidebar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
