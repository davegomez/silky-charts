import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import './styles.css';

const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 122, 255, 0.1);
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ChartContainer = styled.div`
  background-color: rgb(255, 255, 255);
  width: 80%;
`;

const App = () => (
  <Container>
    <ChartContainer>
      {
        // content
      }
    </ChartContainer>
  </Container>
);

export default App;
