import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GraphContext } from '../contexts';
import { tooltipBackground } from '../utils/palette';
import getTooltipPosition from '../utils/getTooltipPosition';

const TooltipBubble = styled.div.attrs(({ position }) => ({
  className: 'silky-charts-tooltip',
  style: position,
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

const Tooltip = ({ children, mousePosition }) => {
  const tooltipRef = useRef();
  const { margin, node, staticTooltip } = useContext(GraphContext);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const position = getTooltipPosition(
    node,
    margin,
    mousePosition,
    size,
    staticTooltip
  );

  useEffect(() => {
    const { offsetWidth, offsetHeight } = tooltipRef.current;
    setSize({ width: offsetWidth, height: offsetHeight });
  }, [tooltipRef, setSize]);

  return (
    <TooltipBubble
      ref={tooltipRef}
      position={position}
      staticTooltip={staticTooltip}
      {...size}
    >
      {children}
    </TooltipBubble>
  );
};

export default Tooltip;
