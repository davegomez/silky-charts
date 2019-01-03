import React, { Fragment } from 'react';
import { Rect, Text } from './';

const BarDatum = ({
  color,
  datum: { value },
  x,
  y,
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
  showValue,
}) => (
  <Fragment>
    <Rect
      chart="bar"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      position={{ x, y }}
      size={{ width, height }}
      color={color}
      value={value}
    />
    {showValue && (
      <Text position={{ x, y }} size={{ width, height }}>
        {value}
      </Text>
    )}
  </Fragment>
);

export default BarDatum;
