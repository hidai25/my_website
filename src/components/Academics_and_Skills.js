import React, { Component } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

class Home extends Component {

  render() {
    return (
      <GridWrapper>
        <div>
          <h2>Home</h2>
         Hidai
        </div>
  </GridWrapper>
    );
  }
}

export default Home;
