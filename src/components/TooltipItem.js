import React from 'react';
import styled from 'styled-components';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import { isValidDate } from '../utils';
import { grey } from '../utils/palette';
import { TOOLTIP_DATE_FORMAT } from '../utils/constants';

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

const TooltipItem = ({
  color,
  dateFormat = TOOLTIP_DATE_FORMAT,
  name,
  value,
}) => {
  const timeFormat = d3TimeFormat(dateFormat);
  return (
    <Container>
      <Swatch swatchColor={color} />
      <Data>
        <Name>{isValidDate(name) ? timeFormat(name) : name}</Name>
        <Value>{value}</Value>
      </Data>
    </Container>
  );
};

export default TooltipItem;
