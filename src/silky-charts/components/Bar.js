import React, { useEffect, useMemo, useRef, useState } from 'react';
import identity from 'ramda/src/identity';
import { max as d3Max } from 'd3-array';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { Axis, BarDatum, Grid, Label, SVG } from './styled';
import {
  debounce,
  drawGrid,
  extendXPath,
  getBaseColor,
  getId,
  getSize,
  getXScale,
  getYScale,
  rotateXLabels,
  setupData,
  valueFor,
} from '../utils';
import {
  ASPECT_RATIO,
  MARGIN,
  SCALE_BAND,
  SCALE_LINEAR,
  SCALE_TIME,
  SIZE,
  THEME,
  TICKS,
  ROTATION,
} from '../utils/constants';

const Bar = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  grid,
  height: svgHeight = undefined,
  isHorizontal,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  responsive = false,
  theme = THEME,
  ticks = TICKS,
  width: svgWidth = undefined,
  xAxisLabelRotation,
  xAxisLabelRotationValue = ROTATION,
  xAxisLabel,
  yAxisLabel,
}) => {
  const svgRef = useRef();
  const [id] = useState(getId('bar'));
  const [{ width, height, isSizeSet }, setSize] = useState(SIZE);
  const [isDates, data] = useMemo(() => setupData(chartData), chartData);

  const xScale = getXScale(
    isDates ? SCALE_TIME : SCALE_BAND,
    data,
    width,
    true
  );
  const yScale = getYScale(
    SCALE_LINEAR,
    d3Max(data, ({ value }) => value),
    height
  );

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

        <g className="data">
          {data.map(({ name, value }, idx) => (
            <BarDatum
              key={idx}
              datum={{
                name,
                value,
              }}
              color={getBaseColor(theme)}
              x={
                isDates
                  ? xScale(name) - valueFor('x', width, data.length)
                  : xScale(name)
              }
              y={yScale(value)}
              width={
                isDates
                  ? valueFor('width', width, data.length)
                  : xScale.bandwidth()
              }
              height={height - yScale(value)}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          ))}
        </g>

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
      </g>
    </SVG>
  );
};

export default Bar;
