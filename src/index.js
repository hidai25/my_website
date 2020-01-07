import 'bootstrap/dist/css/bootstrap.min.css';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Home from './components/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


ReactDOM.render((
  <BrowserRouter basename={window.location.pathname || ''}>
  // <App />
  <Route exact path="/"  component={Home} />
</BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
