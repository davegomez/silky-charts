import React, { useRef, useState } from 'react';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import {
  scaleBand as d3ScaleBand,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import identity from 'ramda/src/identity';
import {
  Axis,
  BarDatum,
  DataGroup,
  Grid,
  Label,
  MainGroup,
  DataSource,
  SVG,
  Title,
} from './components';
import useResize from './hooks/useResize';
import {
  drawGrid,
  getBaseColor,
  getId,
  getMax,
  getSize,
  rotateXLabels,
  setupData,
} from './utils';
import {
  ASPECT_RATIO,
  MARGIN,
  ROTATION,
  SCALE_PADDING,
  SIZE,
  THEME,
  X_TICKS,
  Y_TICKS,
  TIME_FORMAT,
} from './utils/constants';

const Bar = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  dataSource,
  dateFormat = TIME_FORMAT,
  grid,
  height: svgHeight = undefined,
  horizontal,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  responsive,
  theme = THEME,
  title,
  tooltip,
  width: svgWidth = undefined,
  xAxisChartLabel,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  xAxisTicks = X_TICKS,
  padding: xScalePadding = SCALE_PADDING,
  yAxisChartLabel,
  yAxisTicks = Y_TICKS,
}) => {
  const svgRef = useRef();
  const [id] = useState(getId('bar'));
  const timeFormat = d3TimeFormat(dateFormat);
  const [{ width, height, isSizeSet }, setSize] = useState(SIZE);
  const [isDates, data] = setupData(chartData);

  const xScale = d3ScaleBand()
    .domain(data.map(({ name }) => name))
    .range([0, width])
    .padding(xScalePadding);

  const yScale = d3ScaleLinear()
    .domain([0, getMax(data.map(({ value }) => value))])
    .range([height, 0]);

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
          <Title margin={margin} width={width} height={height}>
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

        <DataGroup>
          {data.map(({ name, value }, idx) => (
            <BarDatum
              key={idx}
              datum={{
                name,
                value,
              }}
              color={getBaseColor(theme)}
              x={xScale(name)}
              y={yScale(value)}
              width={xScale.bandwidth()}
              height={height - yScale(value)}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              tooltip={tooltip}
            />
          ))}
        </DataGroup>

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
      </MainGroup>
    </SVG>
  );
};

export default Bar;
