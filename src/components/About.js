import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from 'rc-footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const GridWrapper = styled.div`
background-color: #e3f2fd;
font-family: "Open Sans", sans-serif;

`;

class About extends Component {
  render() {
    return (
       <GridWrapper>
       <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
       <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
         <Navbar fixed="top" />
<Fade left>
          <h2 className="title_about" >About Me</h2>
          </Fade>
          <p class="container">
          I am a student, a researcher, a data scientist and an athlete. Currently, I am a half way through my masters in software engineering in Harvard Extension School of Harvard University.  During my studies I am completing as well a data science certificate in which I already acquired many valuable skills to analyse data and make forecasts using the most sophisticated tools in reach.
          Alongside academic research I am available for consulting services.
          </p>

          <footer class="contact-footer">
          <div class="social">

          <a href="https://www.facebook.com/hidai.barmor" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://github.com/hidai25"  className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a href="https://twitter.com/hidai_barmor" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a href="https://www.instagram.com/hidai25/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          </div>
          <br/>
          <span class="credit">
          <span class="Copyright">©2020 Copyright: </span> <span class="footername">HIDAI BAR-MOR</span>
          </span>
          </footer>
         </GridWrapper>
    );
  }
}

export default About;
