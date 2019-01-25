import React, { useEffect, useRef, useState } from 'react';
import identity from 'ramda/src/identity';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import {
  scaleBand as d3ScaleBand,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import {
  Axis,
  BarDatum,
  DataGroup,
  Grid,
  MainGroup,
  Label,
  SVG,
} from './styled';
import {
  debounce,
  drawGrid,
  getBaseColor,
  getId,
  getMax,
  getSize,
  rotateXLabels,
  setupData,
} from '../utils';
import {
  ASPECT_RATIO,
  MARGIN,
  ROTATION,
  SCALE_PADDING,
  SIZE,
  THEME,
  TICKS,
  TIME_FORMAT,
} from '../utils/constants';

const Bar = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  dateFormat = TIME_FORMAT,
  grid,
  height: svgHeight = undefined,
  isHorizontal,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  responsive = false,
  theme = THEME,
  width: svgWidth = undefined,
  xAxisLabel,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  xAxisTicks = TICKS,
  xScalePadding = SCALE_PADDING,
  yAxisLabel,
  yAxisTicks = TICKS,
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
      <MainGroup margin={margin}>
        {grid && (
          <Grid
            ref={node =>
              d3Select(node).call(
                drawGrid(
                  isHorizontal,
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
            />
          ))}
        </DataGroup>

        <Axis
          axis="x"
          position={{ x: 0, y: height }}
          ref={node => {
            d3Select(node).call(
              d3AxisBottom(xScale)
                .ticks(yAxisTicks)
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
