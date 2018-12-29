import React from 'react';
import identity from 'ramda/src/identity';
import { stack as d3Stack, stackOrderNone, stackOffsetNone } from 'd3-shape';
import { SVG } from './styled';
import {
  // allDate,
  // drawGrid,
  // extendXPath,
  // getDivergence,
  getSize,
  // getXScale,
  // getYScale,
  // rotateXLabels,
} from '../utils';

const BarLine = ({
  data,
  grid,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  stackedKeys = [],
  lineKeys = [],
  width: svgWidth = 960,
  height: svgHeight = 540,
}) => {
  const [width, height] = getSize(svgWidth, svgHeight, margin);

  const stack = d3Stack()
    .keys(stackedKeys)
    .order(stackOrderNone)
    .offset(stackOffsetNone);
  const series = stack(data);

  return <SVG size={{ width: svgWidth, height: svgHeight }} />;
};

export default BarLine;
