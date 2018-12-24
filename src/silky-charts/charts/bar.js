// @flow
import type { Bar } from '../types'
import { select, selectAll, selection } from 'd3-selection' // eslint-disable-line
import { axisBottom, axisLeft } from 'd3-axis'
import { areAllDate } from '../utils'
import {
  drawGrid,
  drawLabels,
  drawReferenceLine,
  getXScale,
  getYScale,
  highValues,
} from './helpers'
import 'd3-transition'

export default ({
  currency,
  currencyshortNotation,
  data,
  grid,
  horizontal,
  localization,
  margin = { top: 60, right: 60, bottom: 60, left: 60 },
  ref,
  referenceLine,
  shortNotation,
  size,
  source,
  title,
  valueOnBars,
  xAxisLabel,
  yAxisLabel,
}: Bar) => {
  const svg = select(ref)
  const height = size.height - margin.top - margin.bottom
  const width = size.width - margin.left - margin.right
  const drawLabel = drawLabels(svg, size, margin)
  // const areNamesDate = areAllDate(data.map(d => d.name))
  const areNamesDate = false
  const isValueHidden = x => height - yScale(x) < 50

  const chart = svg
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

  const xScale = getXScale(areNamesDate ? 'time' : 'band', data, width)
  const yScale = getYScale('linear', data, height)

  const xAxis = chart
    .append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(axisBottom(xScale))

  const yAxis = chart
    .append('g')
    .attr('class', 'y-axis')
    .call(axisLeft(yScale))

  // Translate and rotate the x axis labels when they are not instance of Date
  if (!areNamesDate) {
    xAxis
      .selectAll('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'translate(-12, 6) rotate(-50)')
  }

  // Extend x axis path length if the names values are instance of Date
  if (areNamesDate) {
    chart.select('.x-axis path.domain').attr('d', () => `M0,0.5V0.5H${width}`)
  }

  if (grid) {
    chart
      .append('g')
      .attr('class', 'grid')
      .call(drawGrid(horizontal, xScale, height, yScale, width))
  }

  const barGroup = chart
    .append('g')
    .selectAll()
    .data(data)
    .enter()
    .append('g')

  barGroup
    .append('rect')
    .attr('class', 'bar')
    .attr('x', ({ name }) =>
      areNamesDate
        ? xScale(new Date(name)) - width / data.length / 2.65
        : xScale(name)
    )
    .attr('y', ({ value }) => yScale(value))
    .attr('height', ({ value }) => height - yScale(value))
    .attr(
      'width',
      areNamesDate ? width / (data.length * 1.25) : xScale.bandwidth()
    )

  if (valueOnBars && !highValues(data)) {
    barGroup
      .append('text')
      .attr('class', ({ value }) =>
        isValueHidden(value) ? 'value out' : 'value'
      )
      .attr('transform', ({ name, value }) => {
        const x = areNamesDate
          ? xScale(new Date(name))
          : xScale(name) + xScale.bandwidth() / 2
        const y = isValueHidden(value) ? yScale(value) - 20 : yScale(value) + 30
        return `translate(${x}, ${y})`
      })
      .attr('text-anchor', 'middle')
      .text(({ value }) => value)
  }

  barGroup
    .selectAll('.bar')
    .on('mouseenter', function({ value: currentValue }) {
      referenceLine && drawReferenceLine(chart, yScale(currentValue), width)

      if (valueOnBars) {
        const _parentNode = this.parentNode
        selectAll('.value').text(function({ value }) {
          const divergence = value - currentValue
          const text = divergence > 0 ? `+${divergence}` : `${divergence}`
          return _parentNode === this.parentNode ? '' : text
        })
      }
    })
    .on('mouseleave', function() {
      valueOnBars && selectAll('.value').text(({ value }) => value)
      referenceLine && chart.select('.reference-line').remove()
    })

  if (title) {
    drawLabel('title', title)
  }

  if (xAxisLabel) {
    drawLabel('xAxis', xAxisLabel)
  }

  if (yAxisLabel) {
    drawLabel('yAxis', yAxisLabel)
  }

  if (source) {
    drawLabel('source', source)
  }

  return chart
}
