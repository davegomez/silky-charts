import React, { useState } from 'react';
import head from 'ramda/src/head';
import identity from 'ramda/src/identity';
import last from 'ramda/src/last';
import uuidv4 from 'uuid/v4';
import { select as d3Select } from 'd3-selection';
import { max as d3Max } from 'd3-array';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { stack as d3Stack, stackOrderNone, stackOffsetNone } from 'd3-shape';
import { Axis, BarDatum, Grid, SVG } from './styled';
import {
  allDate,
  drawGrid,
  extendXPath,
  getMaximumValues,
  getSize,
  getXScale,
  getYScale,
  rotateXLabels,
} from '../utils';
import { SCALE_TIME, SCALE_BAND, SCALE_LINEAR } from '../utils/constants';

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
  width: svgWidth = 960,
  height: svgHeight = 540,
  theme = 'blue',
  xAxisLabelRotation,
  xAxisLabelRotationValue = -50,
}) => {
  const [width, height] = getSize(svgWidth, svgHeight, margin);
  const isNamesDate = allDate(data.map(({ name }) => name));

  const [id] = useState(`bar-line-${uuidv4()}`);

  const x = getXScale(isNamesDate ? SCALE_TIME : SCALE_BAND, data, width);
  const y = getYScale(
    SCALE_LINEAR,
    d3Max(getMaximumValues(stackedKeys, data)),
    height
  );

  const stack = d3Stack()
    .keys(stackedKeys)
    .order(stackOrderNone)
    .offset(stackOffsetNone);
  const barSeries = stack(data);

  const palette = ['red', 'green', 'blue', 'orange'];

  return (
    <SVG identifier={id} size={{ width: svgWidth, height: svgHeight }}>
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
            isNamesDate && extendXPath(id, width);
            xAxisLabelRotation && rotateXLabels(xAxisLabelRotationValue);
          }}
        />
        <Axis axis="y" ref={node => d3Select(node).call(d3AxisLeft(y))} />

        {barSeries.map((layer, idx) => {
          const t = palette[idx];
          return (
            <g key={idx} className="stacked-bar-layer">
              {layer.map((datum, idx) => {
                const value = last(datum) - head(datum);
                return (
                  <BarDatum
                    key={idx}
                    datum={{ value }}
                    x={
                      isNamesDate
                        ? x(new Date(datum.data.name)) -
                          width / data.length / 2.4
                        : x(datum.data.name)
                    }
                    y={y(last(datum))}
                    width={
                      isNamesDate
                        ? width / (data.length * 1.1973)
                        : x.bandwidth()
                    }
                    height={height - y(value)}
                    color={t}
                    onClick={onClick}
                  />
                );
              })}
            </g>
          );
        })}
      </g>
    </SVG>
  );
};

export default BarLine;
