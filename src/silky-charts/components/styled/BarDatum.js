import React, { Fragment } from 'react';
import { Rect } from './';

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
}) => (
  <Fragment>
    <Rect
      chart="bar"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      position={{ x, y }}
      size={{ width, height }}
      fillColor={color}
      value={value}
    />
  </Fragment>
);

export default BarDatum;
