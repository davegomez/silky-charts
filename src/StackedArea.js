import React, { useRef, useState } from 'react';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import {
  scaleTime as d3ScaleTime,
  scaleLinear as d3ScaleLinear,
} from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { area as d3Area } from 'd3-shape';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import identity from 'ramda/src/identity';
import { GraphContext } from './contexts';
import {
  AreaDatum,
  Axis,
  DataSource,
  Grid,
  Label,
  MainGroup,
  SVG,
  Title,
} from './components';
import useResize from './hooks/useResize';
import {
  appendStackedValues,
  buildStack,
  bySeries,
  drawGrid,
  extent,
  getId,
  getMax,
  getStackedMax,
  getSeries,
  getSize,
  mapTooltipData,
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
  SIZE,
  THEME,
  TIME_FORMAT,
  X_TICKS,
  Y_TICKS,
} from './utils/constants';

const StackedArea = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  dataSource,
  dateFormat = TIME_FORMAT,
  grid,
  height: svgHeight = undefined,
  horizontal,
  lineType = LINE_TYPE,
  lineTypeOption = null,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  responsive = false,
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
  const svgRef = useRef(null);
  const [id] = useState(getId('stacked-area'));
  const timeFormat = d3TimeFormat(dateFormat);
  const [{ width, height, isSizeSet }, setSize] = useState(SIZE);
  let [isDates, data, names] = setupData(chartData);
  data = appendStackedValues(
    buildStack(getSeries(data))(toStackedForm(data)),
    data
  );

  if (!isDates) {
    throw new TypeError(
      'StackedArea charts only accept valid dates in the "name" section of the dataset.'
    );
  }

  const xScale = d3ScaleTime()
    .domain(extent(data.map(({ name }) => name)))
    .range([0, width]);

  const yScale = d3ScaleLinear()
    .domain([0, getMax(getStackedMax(data))])
    .range([height, 0]);

  const area = d3Area()
    .curve(setLineType(lineType, lineTypeOption))
    .x(({ name }) => xScale(name))
    .y0(({ stackedValues }) => yScale(stackedValues[0]))
    .y1(({ stackedValues }) => yScale(stackedValues[1]));

  const dataPositions = names.map(name => xScale(name));
  const tooltipData = mapTooltipData(data, dataPositions);

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
    <GraphContext.Provider
      value={{ margin, node: svgRef.current, staticTooltip }}
    >
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

          {bySeries(data).map(([series, datum], idx) => (
            <AreaDatum
              area={area}
              dataPositions={dataPositions}
              datum={datum}
              fillColor={palette.themes[theme][idx]}
              key={idx}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              series={series}
              theme={theme}
              tooltip={tooltip}
              tooltipData={tooltipData}
            />
          ))}

          <Axis
            axis="x"
            position={{ x: 0, y: height }}
            ref={node => {
              d3Select(node).call(
                d3AxisBottom(xScale)
                  .ticks(xAxisTicks)
                  .tickFormat(timeFormat)
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
    </GraphContext.Provider>
  );
};

export default StackedArea;
