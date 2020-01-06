import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import '../styles';
import '../App.css';




const GridWrapper = styled.div`
  // display: grid;
  // grid-gap: 10px;
  // margin-top: 1em;
  // margin-left: 6em;
  // margin-right: 6em;
  // grid-template-columns: repeat(12, 1fr);
  // grid-auto-rows: minmax(25px, auto);
`;

class Home extends Component {

  render() {
    return (

      <GridWrapper>
        <div>
         <Navbar fixed="top" />
          <h2>My skills</h2>
          <div class="progress-bar">
   <span class="progress-value" >55%</span>
</div>
<span><strong>JAVASCRIPT</strong></span>
<br/>
<div class="progress-bar">
   <span class="progress-value yellow" >70%</span>
</div>
<span><strong>HTML</strong></span>
<br/>
<div class="progress-bar">
   <span class="progress-value green" >90%</span>
</div>
<span><strong>CSS</strong></span>
<br/>
        </div>
  </GridWrapper>
    );
  }
}

export default Home;
