import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'nav content';
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 80px auto;
  margin: 0 auto;
  min-height: 100vh;
`;

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
