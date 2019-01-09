import React, { useEffect, useMemo, useRef, useState } from 'react';
import head from 'ramda/src/head';
import identity from 'ramda/src/identity';
import { max as d3Max } from 'd3-array';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { line as d3Line } from 'd3-shape';
import { Axis, Grid, Label, LineDatum, StackedBarDatum, SVG } from './styled';
import {
  buildStack,
  debounce,
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
  setLineType,
  setupData,
} from '../utils';
import {
  ASPECT_RATIO,
  LINE_TYPE,
  MARGIN,
  ROTATION,
  SCALE_BAND,
  SCALE_LINEAR,
  SCALE_TIME,
  SECONDARY_THEME,
  SIZE,
  THEME,
  TICKS,
} from '../utils/constants';

const BarLine = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  grid,
  height: svgHeight = undefined,
  horizontal,
  lineKeys = [],
  lineType = LINE_TYPE,
  lineTypeOption = null,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  responsive = false,
  secondaryTheme = SECONDARY_THEME,
  stackedKeys = [],
  theme = THEME,
  ticks = TICKS,
  width: svgWidth = undefined,
  xAxisLabel,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  yAxisLabel,
}) => {
  const svgRef = useRef();
  const [{ width, height, isSizeSet }, setSize] = useState(SIZE);
  const [isDates, data] = useMemo(() => setupData(chartData), chartData);
  const [id] = useState(getId('bar-line'));

  const xScale = getXScale(
    isDates ? SCALE_TIME : SCALE_BAND,
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
  const line = d3Line()
    .x(({ name }) =>
      isDates ? xScale(name) : xScale(name) + xScale.bandwidth() / 2
    )
    .y(({ value }) => yScale(value))
    .curve(setLineType(lineType, lineTypeOption));

  const lineData = getLineDataForKeys(lineKeys, data);

  const handleSize = () => {
    const offsetWidth = svgRef.current.parentElement.offsetWidth;
    if ((svgWidth || svgHeight) && !isSizeSet) {
      setSize({
        ...getSize(svgWidth, svgHeight, margin, aspectRatio),
        isSizeSet: true,
      });
    } else if (offsetWidth !== svgWidth - (margin.left + margin.right)) {
      setSize({
        ...getSize(offsetWidth, undefined, margin, aspectRatio),
        isSizeSet: true,
      });
    }
  };

  const handleResize = debounce(handleSize)();

  useEffect(() => {
    handleSize();
    responsive && window.addEventListener('resize', handleResize);

    return () => {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SVG
      identifier={id}
      size={{
        width: svgWidth || width + margin.left + margin.right,
        height: svgHeight || height + margin.top + margin.bottom,
      }}
      ref={svgRef}
    >
      <g
        className="silky-charts-container"
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

        {xAxisLabel && (
          <Label axis="x" margin={margin} width={width} height={height}>
            {xAxisLabel}
          </Label>
        )}

        {yAxisLabel && (
          <Label axis="y" margin={margin} width={width} height={height}>
            {yAxisLabel}
          </Label>
        )}

        <Axis
          axis="x"
          position={{ x: 0, y: height }}
          ref={node => {
            d3Select(node).call(d3AxisBottom(xScale));
            isDates && extendXPath(id, width);
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
          isDates={isDates}
          theme={theme}
          x={xScale}
          y={yScale}
          width={width}
          height={height}
          onClick={onClick}
        />

        {lineData.map((datum, idx) => (
          <g className={`${head(datum)['key']}-layer`} key={idx}>
            <LineDatum
              data={datum}
              isDates={isDates}
              color={palette.themes[secondaryTheme].base[idx]}
              d={line(datum)}
              xScale={xScale}
              yScale={yScale}
            />
          </g>
        ))}
      </g>
    </SVG>
  );
};

export default BarLine;
