import React, { useEffect, useMemo, useRef, useState } from 'react';
import identity from 'ramda/src/identity';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { area as d3Area } from 'd3-shape';
import { Axis, Grid, Label, Path, SVG } from './styled';
import {
  appendStackedValues,
  buildStack,
  bySeries,
  classify,
  debounce,
  drawGrid,
  getId,
  getMax,
  getStackedMax,
  getSeries,
  getSize,
  getXScale,
  getYScale,
  palette,
  rotateXLabels,
  setLineType,
  setupData,
  toStackedForm,
} from '../utils';
import {
  ASPECT_RATIO,
  LINE_TYPE,
  MARGIN,
  ROTATION,
  SCALE_BAND,
  SCALE_LINEAR,
  SCALE_TIME,
  SIZE,
  THEME,
  TICKS,
} from '../utils/constants';

const StackedArea = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  grid,
  height: svgHeight = undefined,
  isHorizontal,
  lineSeries = [],
  lineType = LINE_TYPE,
  lineTypeOption = null,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  responsive = false,
  theme = THEME,
  ticks = TICKS,
  width: svgWidth = undefined,
  xAxisLabel,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  yAxisLabel,
}) => {
  const svgRef = useRef();
  const [id] = useState(getId('stacked-area'));
  const [{ width, height, isSizeSet }, setSize] = useState(SIZE);
  let [isDates, data] = useMemo(() => setupData(chartData), chartData);
  data = useMemo(
    () =>
      appendStackedValues(
        buildStack(getSeries(data))(toStackedForm(data)),
        data
      ),
    data
  );

  const xScale = getXScale(isDates ? SCALE_TIME : SCALE_BAND, data, width);
  const yScale = getYScale(SCALE_LINEAR, getMax(getStackedMax(data)), height);

  const area = d3Area()
    .curve(setLineType(lineType, lineTypeOption))
    .x(({ name }) => xScale(name))
    .y0(({ stackedValues }) => yScale(stackedValues[0]))
    .y1(({ stackedValues }) => yScale(stackedValues[1]));

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
                drawGrid(isHorizontal, xScale, height, yScale, width, ticks)
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

        {bySeries(data).map(([series, datum], idx) => (
          <g className={`${classify(series)}-layer`} key={idx}>
            <Path
              chart="stacked-area"
              fillColor={palette.themes[theme].base[idx]}
              d={area(datum)}
              strokeWidth={0}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </g>
        ))}

        <Axis
          axis="x"
          position={{ x: 0, y: height }}
          ref={node => {
            d3Select(node).call(d3AxisBottom(xScale));
            xAxisLabelRotation && rotateXLabels(id, xAxisLabelRotationValue);
          }}
        />
        <Axis
          axis="y"
          ref={node => d3Select(node).call(d3AxisLeft(yScale).ticks(ticks))}
        />
      </g>
    </SVG>
  );
};

export default StackedArea;
