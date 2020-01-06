import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import HomepageImage from './components/HomepageImage';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.js';
import Layout from './components/Layout';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import Academics_and_Skills from './components/Academics_and_Skills';

import {  NavbarLink } from 'styled-navbar-component';


function App() {
  return (


 <BrowserRouter>
   <div className="App">
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
        <Route path="/Academics_and_Skills" component={Academics_and_Skills}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/Projects" component={Projects}/>
     </Switch>
   </div>
   </BrowserRouter>

  );
}

export default App;
