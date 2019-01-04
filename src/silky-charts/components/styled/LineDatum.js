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
  isNamesDate,
}) => (
  <Fragment>
    <Path d={d} className="line-path" color={color} />
    <g className="line-dot-group">
      {data.map(({ name, value }, idx) => (
        <Circle
          key={idx}
          className="line-dot"
          color={color}
          cx={
            isNamesDate
              ? xScale(new Date(name))
              : xScale(name) + xScale.bandwidth() / 2
          }
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
