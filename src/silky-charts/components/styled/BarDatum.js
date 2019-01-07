import React, { Fragment } from 'react';
import { Rect, BarValue } from './';

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
      <BarValue position={{ x, y }} size={{ width, height }}>
        {value}
      </BarValue>
    )}
  </Fragment>
);

export default BarDatum;
