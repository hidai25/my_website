import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import '../styles';
import '../App.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Progress } from 'reactstrap';
import hidai from '../img/hidai.jpeg';

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
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>


         <Navbar fixed="top" />
          <br/>

<div class="plate">
  <p class="script"><span>My Skills</span></p></div>
<br/>
<br/>
<br/>
          <div class="row">
            <div class="col-sm-6">
            <img src={hidai}/>
              <div class="skillstxt">I am a finance professional and experienced software developer. I give full stack web development solution as well as Data science and deep learning ones in the fields of finance and others.</div>
            </div>
            <div class="col-sm-6">


            <div class="skills">

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
                                </Progress><br/>
                                <Progress multi>
                                        <Progress bar value="30">SQL</Progress>
                                        <div class="progress-bar">
                                           <span class="progress-value blue" >75%</span>
                                                </div>
                                      </Progress><br/>

                                      <Progress multi>
                                              <Progress bar value="30">REACT</Progress>
                                              <div class="progress-bar">
                                                 <span class="progress-value lgreen" >70%</span>
                                                      </div>
                                            </Progress><br/>
                                            <Progress multi>
                                                    <Progress bar value="30">DJANGO</Progress>
                                                    <div class="progress-bar">
                                                       <span class="progress-value dgreen" >70%</span>
                                                            </div>
                                                  </Progress><br/>
                                                  <Progress multi>
                                                          <Progress bar value="30">FLASK</Progress>
                                                          <div class="progress-bar">
                                                             <span class="progress-value dred" >65%</span>
                                                                  </div>
                                                        </Progress><br/>
                                                        <Progress multi>
                                                                <Progress bar value="30">R</Progress>
                                                                <div class="progress-bar">
                                                                   <span class="progress-value dblue" >80%</span>
                                                                        </div>
                                                              </Progress><br/>
                                                              <Progress multi>
                                                                      <Progress bar value="30">PYTHON</Progress>
                                                                      <div class="progress-bar">
                                                                         <span class="progress-value yb" >85%</span>
                                                                              </div>
                                                                    </Progress><br/>
                                                                    <Progress multi>
                                                                            <Progress bar value="30">JAVA</Progress>
                                                                            <div class="progress-bar">
                                                                               <span class="progress-value red" >80%</span>
                                                                                    </div>
                                                                          </Progress><br/>
                                                                          <Progress multi>
                                                                                  <Progress bar value="30">MACHINE LEARNING</Progress>
                                                                                  <div class="progress-bar">
                                                                                     <span class="progress-value lblack" >80%</span>
                                                                                          </div>
                                                                                </Progress><br/>
                                                                                <Progress multi>
                                                                                <Progress bar value="30">DEEP LEARNING</Progress>
                                                                                <div class="progress-bar">
                                                                                   <span class="progress-value orange" >75%</span>
                                                                                        </div>
                                                                              </Progress><br/>



            </div>













            </div>
          </div>



  </GridWrapper>
    );
  }
}

export default Home;
