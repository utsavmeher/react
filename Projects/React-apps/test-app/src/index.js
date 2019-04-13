import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import DataComponent from './DataComponent/';

//import DataLinkComponent from './DataComponent/';


import ReactLinkComponent from './DataComponent/'; 


ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<ReactLinkComponent />,document.getElementById('data-bind'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
