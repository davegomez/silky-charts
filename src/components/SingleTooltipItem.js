import React from 'react';
import styled from 'styled-components';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import { isValidDate } from '../utils';
import { grey, white } from '../utils/palette';
import { TOOLTIP_DATE_FORMAT } from '../utils/constants';

const Swatch = styled.span`
  background-color: ${({ swatchColor }) => swatchColor || grey};
  display: block;
  height: 2px;
  /* width: 100%; */
`;

const Data = styled.div`
  color: ${white};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Divider = styled.span`
  color: grey;
  font-weight: 500;
`;

const SingleTooltipItem = ({
  color,
  dateFormat = TOOLTIP_DATE_FORMAT,
  name,
  value,
}) => {
  const timeFormat = d3TimeFormat(dateFormat);
  return (
    <>
      <Data>
        {value} <Divider>on</Divider>{' '}
        {isValidDate(name) ? timeFormat(name) : name}
      </Data>
      <Swatch swatchColor={color} />
    </>
  );
};

export default SingleTooltipItem;
