import React, { Fragment } from 'react';
import { Circle, Path } from './';

const LineDatum = ({
  chart,
  color,
  d,
  data,
  onClick,
  onMouseEnter,
  onMouseLeave,
  xScale,
  yScale,
  isDates,
}) => (
  <Fragment>
    <Path chart={chart} d={d} className="line-path" strokeColor={color} />
    <g className="line-dot-group">
      {data.map(({ name, value }, idx) => (
        <Circle
          key={idx}
          chart="bar-line"
          strokeColor={color}
          cx={isDates ? xScale(name) : xScale(name) + xScale.bandwidth() / 2}
          cy={yScale(value)}
          r={5}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </g>
  </Fragment>
);

export default LineDatum;
