import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import '../styles';
import '../App.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Progress } from 'reactstrap';


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
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>



         <Navbar fixed="top" />
          <h2>My skills</h2>

          <div class="w3-container">



        <Progress multi>
                <Progress bar value="30">JAVASCRIPT</Progress>
                <div class="progress-bar">
                   <span class="progress-value" >75%</span>
                        </div>
              </Progress><br/>


        <Progress multi>
                <Progress bar value="30">HTML</Progress>
                <div class="progress-bar">
                   <span class="progress-value yellow" >85%</span>
                        </div>
              </Progress><br/>


              <Progress multi>
                      <Progress bar value="30">CSS</Progress>
                      <div class="progress-bar">
                         <span class="progress-value green" >90%</span>
                              </div>
                    </Progress>

</div>


  </GridWrapper>
    );
  }
}

export default Home;
