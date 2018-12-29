import React, { Fragment } from 'react';
import styled from 'styled-components';
import { bar, black, white } from '../../utils/themes';

const Rect = styled.rect.attrs(({ position: { x, y } }) => ({
  x,
  y,
  className: 'bar',
}))`
  fill: ${({ theme }) => bar[theme].bg};
  height: ${({ size }) => size.height}px;
  width: ${({ size }) => size.width}px;

  &:hover {
    fill: ${({ theme }) => bar[theme].fg};
  }
`;

const Text = styled.text.attrs(
  ({ position: { x, y }, size: { width, height } }) => ({
    className: 'value',
    textAnchor: 'middle',
    transform: `translate(${x + width / 2}, ${y + (height < 40 ? -18 : 30)})`,
  })
)`
  fill: ${({ size: { height } }) => (height < 40 ? black : white)};
  pointer-events: none;
`;

const BarRect = ({
  datum: { name, value },
  position,
  x,
  y,
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
  showValue,
  theme,
}) => (
  <Fragment>
    <Rect
      position={{ x, y }}
      size={{ width, height }}
      theme={theme}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {value}
    </Rect>
    {showValue && (
      <Text position={{ x, y }} size={{ width, height }}>
        {value}
      </Text>
    )}
  </Fragment>
);

export default BarRect;
