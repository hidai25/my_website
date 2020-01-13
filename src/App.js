import React from 'react';
import './App.css';
import {  Switch, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content, download} from 'react-mdl';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
import Academics_and_Skills from './components/Academics_and_Skills';
import Main from './components/main';


function App() {
  return (



   <div className="App">
   <Layout>
           <Header>
           </Header>
           <Content>
               <Main/>
           </Content>
               <Navigation>
                 <Link to="/projects"></Link>
                 <Link to="/contact"></Link>
               </Navigation>


       </Layout>
   </div>
     );
   }

   export default App;



//     <div className="demo-big-content">
//     <Layout>
//         <Header className="header-color" title="Title" scroll>
//             <Navigation>
//                 <a href="DeveloperResFINALReactNot.pdf" download>Resume</a>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/contact">Contact</Link>
//             </Navigation>
//         </Header>
//         <Drawer className="nav-color" title="Home">
//             <Navigation className="nav-color">
//               <a href="DeveloperResFINALReactNot.pdf" download>Resume</a>
//               <Link to="/projects">Projects</Link>
//               <Link to="/contact">Contact</Link>
//             </Navigation>
//         </Drawer>
//         <Content>
//             <div className="page-content" />
//             <Main/>
//         </Content>
//     </Layout>
// </div>
//   );
// }
//
// export default App;
