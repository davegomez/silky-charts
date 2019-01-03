import React, { Fragment } from 'react';
import { isValid } from 'date-fns';
import { Circle, Path } from './';

const LineDatum = ({
  color,
  d,
  data,
  onClick,
  onMouseOver,
  xScale,
  yScale,
}) => (
  <Fragment>
    <Path d={d} className="line-path" color={color} />
    <g className="line-dot-group">
      {data.map(({ name, value }, idx) => (
        <Circle
          key={idx}
          className="line-dot"
          color={color}
          cx={xScale(isValid(name) ? new Date(name) : name)}
          cy={yScale(value)}
          onClick={onClick}
          onMouseOver={onMouseOver}
          r={5}
        />
      ))}
    </g>
  </Fragment>
);

export default LineDatum;
