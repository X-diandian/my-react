import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Welcome from './welcome';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Welcome/>, document.getElementById('root1'));
// ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('example')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
