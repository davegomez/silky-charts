import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { tooltipBackground } from '../utils/palette';
import getTooltipPosition from '../utils/getTooltipPosition';

const Container = styled.div.attrs(
  ({ margin, mousePosition, width, height, position, svg }) => ({
    className: 'silky-charts-tooltip',
    style: getTooltipPosition(
      margin,
      mousePosition,
      width,
      height,
      position,
      svg
    ),
  })
)`
  background-color: ${tooltipBackground};
  border-radius: 4px;
  padding: 10px;
  pointer-events: none;
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  z-index: 1;

  &:before {
    content: '';
    display: ${({ position }) => (position ? 'none' : 'block')};
    width: 0;
    height: 0;
    position: absolute;
    border-left: 8px solid transparent;
    border-top: 8px solid ${tooltipBackground};
    border-right: 8px solid transparent;
    left: ${({ width }) => width / 2 - 8}px;
    top: ${({ height }) => height}px;
  }
`;

const Tooltip = props => {
  const tooltipRef = useRef();
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const { offsetWidth, offsetHeight } = tooltipRef.current;
    setSize({ width: offsetWidth, height: offsetHeight });
  }, [tooltipRef, setSize]);

  return (
    <Container ref={tooltipRef} {...size} {...props}>
      {props.children}
    </Container>
  );
};

export default Tooltip;
