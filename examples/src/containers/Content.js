import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 100px;
`;

const Content = ({ children }) => <Container>{children}</Container>;

export default Content;
