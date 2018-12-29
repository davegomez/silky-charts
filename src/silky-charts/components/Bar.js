import React, { useState } from 'react';
import identity from 'ramda/src/identity';
import { select as d3Select } from 'd3-selection';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { Axis, BarRect, Grid, SVG } from './styled';
import {
  allDate,
  drawGrid,
  extendXPath,
  getDivergence,
  getSize,
  getXScale,
  getYScale,
  rotateXLabels,
} from '../utils';
import { SCALE_TIME, SCALE_BAND, SCALE_LINEAR } from '../utils/constants';

const Bar = ({
  data,
  showValue,
  showDivergence,
  grid,
  horizontal,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  width: svgWidth = 960,
  height: svgHeight = 540,
  theme = 'blue',
  xAxisLabelRotation,
  xAxisLabelRotationValue = -50,
}) => {
  const [width, height] = getSize(svgWidth, svgHeight, margin);
  const isAllDate = allDate(data.map(({ value }) => value));
  // const isAllDate = false
  const [currentValue, setCurrentValue] = useState(null);

  const x = getXScale(isAllDate ? SCALE_TIME : SCALE_BAND, data, width);
  const y = getYScale(SCALE_LINEAR, data, height);

  const handleOnMouseEnter = event => {
    setCurrentValue(event.target.textContent);
    onMouseEnter(event);
  };

  const handleOnMouseLeave = event => {
    setCurrentValue(null);
    onMouseLeave(event);
  };

  return (
    <SVG size={{ width: svgWidth, height: svgHeight }}>
      <g
        className="container"
        transform={`translate(${margin.left}, ${margin.top})`}
      >
        {grid && (
          <Grid
            ref={node =>
              d3Select(node).call(drawGrid(horizontal, x, height, y, width))
            }
          />
        )}

        <Axis
          axis="x"
          translate={{ x: 0, y: height }}
          ref={node => {
            d3Select(node).call(d3AxisBottom(x));
            isAllDate && extendXPath(width);
            xAxisLabelRotation && rotateXLabels(xAxisLabelRotationValue);
          }}
        />
        <Axis axis="y" ref={node => d3Select(node).call(d3AxisLeft(y))} />

        <g className="data">
          {data.map(({ name, value }, idx) => (
            <BarRect
              key={idx}
              showValue={showValue}
              datum={{
                name,
                value:
                  showValue && showDivergence && currentValue
                    ? getDivergence(value, currentValue)
                    : value,
              }}
              x={
                isAllDate
                  ? x(new Date(name)) - width / data.length / 2.65
                  : x(name)
              }
              y={y(value)}
              width={isAllDate ? width / (data.length * 1.1973) : x.bandwidth()}
              height={height - y(value)}
              onClick={onClick}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              theme={theme}
            />
          ))}
        </g>
      </g>
    </SVG>
  );
};

export default Bar;
