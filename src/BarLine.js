import React, { useRef, useState } from 'react';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import {
  scaleBand as d3ScaleBand,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { line as d3Line } from 'd3-shape';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import head from 'ramda/src/head';
import identity from 'ramda/src/identity';
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
  getId,
  getLineDataForSeries,
  getMax,
  getStackedMax,
  getSize,
  palette,
  rotateXLabels,
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

const BarLine = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  dataSource,
  dateFormat = TIME_FORMAT,
  grid,
  height: svgHeight = undefined,
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
  width: svgWidth = undefined,
  xAxisChartLabel,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  xAxisTicks = X_TICKS,
  yAxisChartLabel,
  yAxisTicks = Y_TICKS,
}) => {
  const svgRef = useRef();
  const [id] = useState(getId('bar-line'));
  const timeFormat = d3TimeFormat(dateFormat);
  const [{ width, height, isSizeSet }, setSize] = useState(SIZE);
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

  useResize(responsive, handleSize);

  return (
    <SVG
      identifier={id}
      size={{
        width: svgWidth || width + margin.left + margin.right,
        height: svgHeight || height + margin.top + margin.bottom,
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
          margin={margin}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          staticTooltip={staticTooltip}
          svg={svgRef.current}
          tooltip={tooltip}
        />

        <Axis
          axis="x"
          position={{ x: 0, y: height }}
          ref={node => {
            d3Select(node).call(
              d3AxisBottom(xScale)
                .ticks(xAxisTicks)
                .tickFormat(isDates ? timeFormat : null)
            );
            xAxisLabelRotation && rotateXLabels(id, xAxisLabelRotationValue);
          }}
        />

        <Axis
          axis="y"
          ref={node =>
            d3Select(node).call(d3AxisLeft(yScale).ticks(yAxisTicks))
          }
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
  );
};

export default BarLine;
