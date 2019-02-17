import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { white, grey } from '../utils/palette';

const Container = styled.div.attrs(({ pageX, pageY, width, height }) => ({
  className: 'silky-charts-tooltip',
  style: {
    left: `${pageX - width / 2}px`,
    top: `${pageY - height - 16}px`,
  },
}))`
  background-color: ${white};
  border: 1px solid ${grey};
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;
  pointer-events: none;
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  z-index: 10;
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
