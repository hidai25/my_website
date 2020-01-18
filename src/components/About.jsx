import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import React, { Component } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: #e3f2fd;
font-family: "Open Sans", sans-serif;
`;

// const PageContainer = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
//   background-color: #e3f2fd;
//   font-family: "Open Sans", sans-serif;
// `;



class About extends Component {
  render() {
    return (
       <GridWrapper>
        <div>
         <Navbar fixed="top" />
<Fade left>
          <h2 className="title_about" >About Me</h2>
          </Fade>
          <p class="container">

          I am a student, a researcher, a data scientist and an athlete. Currently, I am a half way through my masters in software engineering in Harvard Extension School of Harvard University.  During my studies I am completing as well a data science certificate in which I already acquired many valuable skills to analyse data and make forecasts using the most sophisticated tools in reach.
          Alongside academic research I am available for consulting services. If you have interest in my services please contact me.


          </p>
        </div>
         </GridWrapper>
    );
  }
}

export default About;
