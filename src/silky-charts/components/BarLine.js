import React, { useState } from 'react';
import head from 'ramda/src/head';
import identity from 'ramda/src/identity';
import { select as d3Select } from 'd3-selection';
import { max as d3Max } from 'd3-array';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { Axis, StackedBarDatum, Grid, LineDatum, SVG } from './styled';
import {
  allDate,
  buildLine,
  buildStack,
  drawGrid,
  extendXPath,
  getId,
  getLineDataForKeys,
  getMaximumValues,
  getSize,
  getXScale,
  getYScale,
  palette,
  rotateXLabels,
} from '../utils';
import {
  SCALE_TIME,
  SCALE_BAND,
  SCALE_LINEAR,
  SECONDARY_THEME,
  THEME,
  TICKS,
  LINE_TYPE,
} from '../utils/constants';

const BarLine = ({
  data,
  grid,
  horizontal,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  stackedKeys = [],
  lineKeys = [],
  lineType = LINE_TYPE,
  lineTypeOption = null,
  width: svgWidth = 960,
  height: svgHeight = 540,
  theme = THEME,
  ticks = TICKS,
  secondaryTheme = SECONDARY_THEME,
  xAxisLabelRotation,
  xAxisLabelRotationValue = -50,
}) => {
  const [width, height] = getSize(svgWidth, svgHeight, margin);
  const isNamesDate = allDate(data.map(({ name }) => name));

  const [id] = useState(getId('bar-line'));

  const xScale = getXScale(
    isNamesDate ? SCALE_TIME : SCALE_BAND,
    data,
    width,
    true
  );
  const yScale = getYScale(
    SCALE_LINEAR,
    d3Max(getMaximumValues(stackedKeys, data)),
    height
  );

  const stack = buildStack(stackedKeys);
  const line = buildLine(xScale, yScale, lineType, lineTypeOption);

  const lineData = getLineDataForKeys(lineKeys, data);

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
                drawGrid(horizontal, xScale, height, yScale, width, ticks)
              )
            }
          />
        )}

        <Axis
          axis="x"
          position={{ x: 0, y: height }}
          ref={node => {
            d3Select(node).call(d3AxisBottom(xScale));
            isNamesDate && extendXPath(id, width);
            xAxisLabelRotation && rotateXLabels(id, xAxisLabelRotationValue);
          }}
        />
        <Axis
          axis="y"
          ref={node => d3Select(node).call(d3AxisLeft(yScale).ticks(ticks))}
        />

        <StackedBarDatum
          data={data}
          series={stack(data)}
          onClick={onClick}
          theme={theme}
          x={xScale}
          y={yScale}
          width={width}
          height={height}
        />

        {lineData.map((datum, idx) => (
          <g className={`${head(datum)['key']}-layer`} key={idx}>
            <LineDatum
              data={datum}
              d={line(datum)}
              xScale={xScale}
              yScale={yScale}
              color={palette.themes[secondaryTheme].base[idx]}
            />
          </g>
        ))}
      </g>
    </SVG>
  );
};

export default BarLine;
