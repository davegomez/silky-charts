import React from 'react';
import styled from 'styled-components';
import { isValid, format } from 'date-fns';
import { grey } from '../../utils/palette';

const Container = styled.div`
  display: flex;
`;

const Swatch = styled.span`
  background-color: ${({ swatchColor }) => swatchColor || grey};
  margin-right: 10px;
  padding: 0 4px;
`;

const Data = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  margin-bottom: 4px;
`;

const Value = styled.span`
  font-size: 1.2em;
`;

const TooltipItem = ({ color, dateFormat = 'MMM d, y', name, value }) => (
  <Container>
    <Swatch swatchColor={color} />
    <Data>
      <Name>{isValid(name) ? format(name, dateFormat) : name}</Name>
      <Value>{value}</Value>
    </Data>
  </Container>
);

export default TooltipItem;
