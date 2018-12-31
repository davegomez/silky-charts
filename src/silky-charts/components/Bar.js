import React, { useState } from 'react';
import identity from 'ramda/src/identity';
import uuidv4 from 'uuid/v4';
import { select as d3Select } from 'd3-selection';
import { max as d3Max } from 'd3-array';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { Axis, BarDatum, Grid, SVG } from './styled';
import {
  allDate,
  drawGrid,
  extendXPath,
  getBaseColor,
  getDivergence,
  getSize,
  getXScale,
  getYScale,
  rotateXLabels,
  valueFor,
} from '../utils';
import {
  SCALE_TIME,
  SCALE_BAND,
  SCALE_LINEAR,
  THEME,
  TICKS,
} from '../utils/constants';

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
  theme = THEME,
  ticks = TICKS,
  xAxisLabelRotation,
  xAxisLabelRotationValue = -50,
}) => {
  const [width, height] = getSize(svgWidth, svgHeight, margin);
  const isNamesDate = allDate(data.map(({ name }) => name));
  const [currentValue, setCurrentValue] = useState(null);
  const [id] = useState(`bar-${uuidv4()}`);

  const x = getXScale(isNamesDate ? SCALE_TIME : SCALE_BAND, data, width);
  const y = getYScale(SCALE_LINEAR, d3Max(data, ({ value }) => value), height);

  const handleOnMouseEnter = event => {
    setCurrentValue(event.target.getAttribute('value'));
    onMouseEnter(event);
  };

  const handleOnMouseLeave = event => {
    setCurrentValue(null);
    onMouseLeave(event);
  };

  return (
    <SVG identifier={id} size={{ width: svgWidth, height: svgHeight }}>
      <g
        className="container"
        transform={`translate(${margin.left}, ${margin.top})`}
      >
        {grid && (
          <Grid
            ref={node =>
              d3Select(node).call(
                drawGrid(horizontal, x, height, y, width, ticks)
              )
            }
          />
        )}

        <Axis
          axis="x"
          translate={{ x: 0, y: height }}
          ref={node => {
            d3Select(node).call(d3AxisBottom(x));
            isNamesDate && extendXPath(id, width);
            xAxisLabelRotation && rotateXLabels(xAxisLabelRotationValue);
          }}
        />
        <Axis
          axis="y"
          ref={node => d3Select(node).call(d3AxisLeft(y).ticks(ticks))}
        />

        <g className="data">
          {data.map(({ name, value }, idx) => (
            <BarDatum
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
                isNamesDate
                  ? x(new Date(name)) - valueFor('x', width, data.length)
                  : x(name)
              }
              y={y(value)}
              width={
                isNamesDate
                  ? valueFor('width', width, data.length)
                  : x.bandwidth()
              }
              height={height - y(value)}
              color={getBaseColor(theme)}
              onClick={onClick}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          ))}
        </g>
      </g>
    </SVG>
  );
};

export default Bar;
