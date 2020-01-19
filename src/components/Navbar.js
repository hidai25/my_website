import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
// import { useSpring, animated, config } from "react-spring";
// import { Container } from 'styled-container-component';
// import { Button } from 'styled-button-component';
// import {  NavbarLink } from 'styled-navbar-component';
// import { Nav } from 'styled-nav-component';



const GridWrapper = styled.div`
  // display: grid;
  // grid-gap: 10px;
  // margin-top: 1em;
  // margin-left: 6em;
  // margin-right: 6em;
  // grid-template-columns: repeat(12, 1fr);
  // grid-auto-rows: minmax(25px, auto);
`;




 export default class Navbar extends React.Component {
   render() {
     return (
<GridWrapper>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


       <nav className="Navbar">
         <div className="Nav__container">


           <div className="Nav__right">
             <ul className="Nav__item-wrapper">
             <li className="Nav__item">
               <Link className="Nav__link" to="/">Home</Link>
             </li>
               <li className="Nav__item">
                 <Link className="Nav__link" to="/About">About Me</Link>
               </li>
               <li className="Nav__item">
                 <Link className="Nav__link" to="/Academics_and_Skills">Academics and Skills</Link>
               </li>
               <li className="Nav__item">
                 <Link className="Nav__link" to="/Projects">Projects</Link>
               </li>
               <li className="Nav__item">
                 <Link className="Nav__link" to="/Contact">Contact</Link>
               </li>
             </ul>
           </div>
         </div>
       </nav>
       </GridWrapper>
     );
   }
 }
