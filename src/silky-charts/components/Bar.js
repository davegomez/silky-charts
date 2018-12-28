import React, { useState } from 'react'
import identity from 'ramda/src/identity'
import { select } from 'd3-selection'
import { scaleBand, scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { max } from 'd3-array'
import { Axis, BarDatum, Grid, SVG } from './styled'
import { drawGrid, getDivergence, getXScale, getYScale } from '../utils'

const Bar = ({
  data,
  showValue,
  showDivergence,
  grid,
  horizontal,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  onClick = identity,
  onMouseEnter = identity,
  onMouseLeave = identity,
  width: svgWidth = 960,
  height: svgHeight = 540,
  theme = 'blue',
}) => {
  const width = svgWidth - margin.left - margin.right
  const height = svgHeight - margin.top - margin.bottom
  const [currentValue, setCurrentValue] = useState(null)

  const x = getXScale('band', data, width)
  const y = getYScale('linear', data, height)

  const handleOnMouseEnter = event => {
    setCurrentValue(event.target.textContent)
    onMouseEnter(event)
  }
  const handleOnMouseLeave = event => {
    setCurrentValue(null)
    onMouseLeave(event)
  }

  return (
    <SVG size={{ width: svgWidth, height: svgHeight }}>
      <g
        className="container"
        transform={`translate(${margin.left}, ${margin.top})`}
      >
        {grid && (
          <Grid
            ref={node =>
              select(node).call(drawGrid(horizontal, x, height, y, width))
            }
          />
        )}

        <Axis
          axis="x"
          translate={{ x: 0, y: height }}
          ref={node => select(node).call(axisBottom(x))}
        />
        <Axis axis="y" ref={node => select(node).call(axisLeft(y))} />

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
              x={x(name)}
              y={y(value)}
              width={x.bandwidth()}
              height={height - y(value)}
              onClick={onClick}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              theme={theme}
            />
          ))}
        </g>
      </g>
    </SVG>
  )
}

export default Bar
