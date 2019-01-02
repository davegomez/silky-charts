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
}) => (
  <Fragment>
    <Path d={d} className="line-path" color={color} />
    <g className="line-dot-group">
      {data.map((datum, idx) => (
        <Circle
          key={idx}
          className="line-dot"
          color={color}
          cx={xScale(new Date(datum.name))}
          cy={yScale(datum.value)}
          onClick={onClick}
          onMouseOver={onMouseOver}
          r={5}
        />
      ))}
    </g>
  </Fragment>
);

export default LineDatum;
