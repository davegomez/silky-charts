import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { tooltipBackground } from '../utils/palette';

const Container = styled.div.attrs(({ pageX, pageY, width, height }) => ({
  className: 'silky-charts-tooltip',
  style: {
    left: `${pageX - width / 2}px`,
    top: `${pageY - height - 16}px`,
  },
}))`
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
    display: ${({ staticTooltip }) => (staticTooltip ? 'none' : 'block')};
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
