import React from 'react';
import './App.css';
import {  Switch, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
import Academics_and_Skills from './components/Academics_and_Skills';


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
