import React, { useRef, useState } from 'react';
import {
  scaleBand as d3ScaleBand,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import identity from 'ramda/src/identity';
import { GraphContext } from './contexts';
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
import { drawGrid, getBaseColor, getMax, setupData } from './utils';
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
  height: graphHeight = undefined,
  horizontal,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  responsive,
  staticTooltip,
  theme = THEME,
  title,
  tooltip,
  width: graphWidth = undefined,
  xAxisChartLabel,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  xAxisTicks = X_TICKS,
  padding: xScalePadding = SCALE_PADDING,
  yAxisChartLabel,
  yAxisTicks = Y_TICKS,
}) => {
  const svgRef = useRef();
  const [{ width, height }, setSize] = useState(SIZE);
  const [isDates, data] = setupData(chartData);

  const xScale = d3ScaleBand()
    .domain(data.map(({ name }) => name))
    .range([0, width])
    .padding(xScalePadding);

  const yScale = d3ScaleLinear()
    .domain([0, getMax(data.map(({ value }) => value))])
    .range([height, 0]);

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
        </MainGroup>
      </SVG>
    </GraphContext.Provider>
  );
};

export default Bar;
