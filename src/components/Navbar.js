import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../App.css';
import { useSpring, animated, config } from "react-spring";
// import { Container } from 'styled-container-component';
// import { Button } from 'styled-button-component';
import {  NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

 export default class Navbar extends React.Component {
   render() {
     return (
       <nav className="Navbar">
         <div className="Nav__container">


           <div className="Nav__right">
             <ul className="Nav__item-wrapper">
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
     );
   }
 }
 // const Nav = styled(animated.nav)`
 //   position: fixed;
 //   width: 100%;
 //   top: 0;
 //   left: 0;
 //   background: #2d3436;
 //   z-index: 1;
 //   font-size: 1.4rem;
 // `;
