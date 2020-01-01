
import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles';
import '../App.css';
import { Link } from 'react-router-dom';
import { keyframes } from "styled-components"
import Typist from 'react-typist';

// animation to slide in the home page from left
const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

// animation to slide out the home page to the left
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const Page = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: grey;
font-family: "Open Sans", sans-serif;
`;

// apply the correct animation based on the transition state class name.
const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;


class Home extends Component {

  render() {
    return (
      // <div className="home">
        <div className="home">
      <Page>
      <HomePageElm>

      <Typist className="MyTypist">
        My name is Hidai Bar-Mor. I am a financial markets professional and a developer.
         <Typist.Delay ms={5000} />
      </Typist>

        <Link to="/about">Go to Page Two →</Link>

      </HomePageElm>
      </Page>
  </div>
      // </div>
    );
  }
}

export default Home;



//
// function HomePage() {
//   return (
//     <HomePageElm>
//       <h2>Home Page</h2>
//       <Link to="/details">Go to Page Two →</Link>
//     </HomePageElm>
//   );
// }
