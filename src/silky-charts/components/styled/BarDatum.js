import React, { Fragment } from 'react';
import Rect from './Rect';
import Text from './Text';

const BarDatum = ({
  datum: { value },
  position,
  x,
  y,
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
  showValue,
  color,
}) => (
  <Fragment>
    <Rect
      chart={'bar'}
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
