import React, { Fragment } from 'react';
import { Circle, Path } from './';

const LineDatum = ({
  color,
  d,
  data,
  onClick,
  onMouseOver,
  xScale,
  yScale,
  isDates,
}) => (
  <Fragment>
    <Path d={d} className="line-path" strokeColor={color} />
    <g className="line-dot-group">
      {data.map(({ name, value }, idx) => (
        <Circle
          key={idx}
          className="line-dot"
          strokeColor={color}
          cx={isDates ? xScale(name) : xScale(name) + xScale.bandwidth() / 2}
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
