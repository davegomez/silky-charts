import React from 'react';
import styled from 'styled-components';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import { isValidDate } from '../utils';
import { grey, themes, white } from '../utils/palette';
import { TOOLTIP_DATE_FORMAT } from '../utils/constants';

const Container = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

const Swatch = styled.span`
  background-color: ${({ swatchColor }) => swatchColor || grey};
  margin-right: ${({ marginRight }) => marginRight}px;
  padding: 0 ${({ width }) => width / 2}px;
`;

const Name = styled.div`
  color: grey;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: right;
`;

const Data = styled.div`
  color: ${white};
  font-size: 12px;
  font-weight: 600;
  padding: 2px 0;
`;

const Divider = styled.span`
  color: grey;
  font-weight: 500;
`;

const TooltipGroup = ({
  data,
  dateFormat = TOOLTIP_DATE_FORMAT,
  theme = 'monteCarlo',
}) => {
  const timeFormat = d3TimeFormat(dateFormat);
  const { name } = data[0];

  return (
    <>
      <Name>{isValidDate(name) ? timeFormat(name) : name}</Name>
      {data.map(({ series, value }, idx) => (
        <Container key={idx}>
          <Swatch swatchColor={themes[theme][idx]} width={6} marginRight={2} />
          <Swatch swatchColor={themes[theme][idx]} width={2} marginRight={10} />
          <Data>
            {value} <Divider>on</Divider> {series}
          </Data>
        </Container>
      ))}
    </>
  );
};

export default TooltipGroup;
