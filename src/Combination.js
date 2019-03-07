import React, { useRef, useState } from 'react';
import {
  scaleBand as d3ScaleBand,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { line as d3Line } from 'd3-shape';
import head from 'ramda/src/head';
import identity from 'ramda/src/identity';
import { GraphContext } from './contexts';
import {
  Axis,
  Grid,
  Label,
  LineDatum,
  MainGroup,
  DataSource,
  StackedBarDatum,
  SVG,
  Title,
} from './components';
import useResize from './hooks/useResize';
import {
  buildStack,
  drawGrid,
  getLineDataForSeries,
  getMax,
  getStackedMax,
  palette,
  setLineType,
  setupData,
  toStackedForm,
} from './utils';
import {
  ASPECT_RATIO,
  LINE_TYPE,
  MARGIN,
  ROTATION,
  SCALE_PADDING,
  SECONDARY_THEME,
  SIZE,
  THEME,
  X_TICKS,
  Y_TICKS,
  TIME_FORMAT,
} from './utils/constants';

const Combination = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  dataSource,
  dateFormat = TIME_FORMAT,
  grid,
  height: graphHeight = undefined,
  horizontal,
  lineSeries = [],
  lineType = LINE_TYPE,
  lineTypeOption = null,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  padding: xScalePadding = SCALE_PADDING,
  responsive,
  secondaryTheme = SECONDARY_THEME,
  stackedSeries = [],
  staticTooltip,
  theme = THEME,
  title,
  tooltip,
  visibleTicks,
  width: graphWidth = undefined,
  xAxisChartLabel,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  xAxisTicks = X_TICKS,
  yAxisChartLabel,
  yAxisTicks = Y_TICKS,
}) => {
  const svgRef = useRef();
  const [{ width, height }, setSize] = useState(SIZE);
  const [isDates, data] = setupData(chartData);
  const stack = buildStack(stackedSeries)(toStackedForm(data));

  const xScale = d3ScaleBand()
    .domain(data.map(({ name }) => name))
    .range([0, width])
    .padding(xScalePadding);

  const yScale = d3ScaleLinear()
    .domain([0, getMax(getStackedMax(data, stackedSeries))])
    .range([height, 0]);

  const line = d3Line()
    .curve(setLineType(lineType, lineTypeOption))
    .x(({ name }) => xScale(name) + xScale.bandwidth() / 2)
    .y(({ value }) => yScale(value));

  const lineData = getLineDataForSeries(lineSeries, data);

  useResize({
    aspectRatio,
    graphHeight,
    graphWidth,
    margin,
    responsive,
    setSize,
    svgRef,
  });

  return (
    <GraphContext.Provider
      value={{
        dateFormat,
        margin,
        node: svgRef.current,
        staticTooltip,
        visibleTicks,
        xAxisLabelRotation,
        xAxisLabelRotationValue,
      }}
    >
      <SVG
        size={{
          width: graphWidth || width + margin.left + margin.right,
          height: graphHeight || height + margin.top + margin.bottom,
        }}
        ref={svgRef}
      >
        <MainGroup margin={margin}>
          {grid && (
            <Grid
              ref={node =>
                d3Select(node).call(
                  drawGrid(
                    horizontal,
                    xScale,
                    height,
                    yScale,
                    width,
                    xAxisTicks,
                    yAxisTicks
                  )
                )
              }
            />
          )}

          {title && (
            <Title margin={margin} width={width}>
              {title}
            </Title>
          )}

          {xAxisChartLabel && (
            <Label axis="x" margin={margin} width={width} height={height}>
              {xAxisChartLabel}
            </Label>
          )}

          {yAxisChartLabel && (
            <Label axis="y" margin={margin} width={width} height={height}>
              {yAxisChartLabel}
            </Label>
          )}

          {dataSource && (
            <DataSource
              dataSource={dataSource}
              height={height}
              margin={margin}
              width={width}
            />
          )}

          <StackedBarDatum
            data={data}
            series={stack}
            theme={theme}
            x={xScale}
            y={yScale}
            width={width}
            height={height}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            tooltip={tooltip}
          />

          <Axis
            axis="x"
            axisTicks={xAxisTicks}
            orientation="bottom"
            position={{ x: 0, y: height }}
            scale={xScale}
            toDate={isDates}
          />

          <Axis
            axis="y"
            axisTicks={yAxisTicks}
            orientation="left"
            scale={yScale}
          />

          {lineData.map((datum, idx) => (
            <g className={`${head(datum)['series']}-layer`} key={idx}>
              <LineDatum
                chart="bar-line"
                data={datum}
                color={palette.themes[secondaryTheme][idx]}
                d={line(datum)}
                xScale={xScale}
                yScale={yScale}
                margin={margin}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                staticTooltip={staticTooltip}
                svg={svgRef.current}
                tooltip={tooltip}
              />
            </g>
          ))}
        </MainGroup>
      </SVG>
    </GraphContext.Provider>
  );
};

export default Combination;
