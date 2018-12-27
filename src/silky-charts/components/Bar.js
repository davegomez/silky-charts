import React from 'react'
import { select } from 'd3-selection'
import { scaleBand, scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { max } from 'd3-array'
import { Axis, BarDatum, Grid, SVG } from './styled'
import { drawGrid } from '../utils'

const Bar = ({
  data,
  grid,
  horizontal,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width: svgWidth = 960,
  height: svgHeight = 540,
  theme = 'blue',
  valuesOnBar,
}) => {
  const width = svgWidth - margin.left - margin.right
  const height = svgHeight - margin.top - margin.bottom

  const x = scaleBand()
    .domain(data.map(({ name }) => name))
    .range([0, width])
    .padding(0.15)
  const y = scaleLinear()
    .domain([0, max(data, ({ value }) => value)])
    .range([height, 0])

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
          {data.map((datum, idx) => (
            <BarDatum
              key={idx}
              datum={datum}
              x={x(datum.name)}
              y={y(datum.value)}
              width={x.bandwidth()}
              height={height - y(datum.value)}
              theme={theme}
              valuesOnBar
            />
          ))}
        </g>
      </g>
    </SVG>
  )
}

export default Bar
