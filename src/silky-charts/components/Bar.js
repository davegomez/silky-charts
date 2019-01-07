import React, { useState, useRef, useEffect, useMemo } from 'react';
import identity from 'ramda/src/identity';
import { select as d3Select } from 'd3-selection';
import { max as d3Max } from 'd3-array';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import { Axis, BarDatum, Grid, SVG } from './styled';
import {
  allDate,
  drawGrid,
  extendXPath,
  getBaseColor,
  getDivergence,
  getId,
  getSize,
  getXScale,
  getYScale,
  rotateXLabels,
  setupData,
  valueFor,
} from '../utils';
import {
  SCALE_TIME,
  SCALE_BAND,
  SCALE_LINEAR,
  THEME,
  TICKS,
  MARGIN,
  ASPECT_RATIO,
  SIZE,
} from '../utils/constants';

const Bar = ({
  aspectRatio = ASPECT_RATIO,
  data: chartData,
  showValue,
  showDivergence,
  grid,
  horizontal,
  margin = MARGIN,
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  width: svgWidth = undefined,
  height: svgHeight = undefined,
  theme = THEME,
  ticks = TICKS,
  xAxisLabelRotation,
  xAxisLabelRotationValue = -50,
}) => {
  const svgRef = useRef();
  const [{ width, height, isSizeSet }, setSize] = useState(SIZE);
  const [currentValue, setCurrentValue] = useState(null);
  const [isDates, data] = useMemo(() => setupData(chartData), chartData);
  const [id] = useState(getId('bar'));

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

  const handleOnMouseEnter = event => {
    setCurrentValue(event.target.getAttribute('value'));
    onMouseEnter(event);
  };

  const handleOnMouseLeave = event => {
    setCurrentValue(null);
    onMouseLeave(event);
  };

  const handleResize = () => {
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

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SVG
      ref={svgRef}
      identifier={id}
      size={{
        width: svgWidth || width + margin.left + margin.right,
        height: svgHeight || height + margin.top + margin.bottom,
      }}
    >
      <g
        className="container"
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

        <g className="data">
          {data.map(({ name, value }, idx) => (
            <BarDatum
              key={idx}
              showValue={showValue}
              datum={{
                name,
                value:
                  showValue && showDivergence && currentValue
                    ? getDivergence(value, currentValue)
                    : value,
              }}
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
              color={getBaseColor(theme)}
              onClick={onClick}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          ))}
        </g>
      </g>
    </SVG>
  );
};

export default Bar;
