import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';
import About from './About';
import Academics_and_Skills from './Academics_and_Skills';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
     <Route path="/Academics_and_Skills" component={Academics_and_Skills}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/Projects" component={Projects}/>
  </Switch>
)

export default Main;

// <BrowserRouter>
  // <div className="App">
    // <Switch>
      // <Route exact path="/" component={Home}/>
      // <Route path="/about" component={About}/>
      //  <Route path="/Academics_and_Skills" component={Academics_and_Skills}/>
      // <Route path="/contact" component={Contact}/>
      // <Route path="/Projects" component={Projects}/>
    // </Switch>
  // </div>
  // </BrowserRouter>
