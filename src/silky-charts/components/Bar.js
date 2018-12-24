// @flow
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import type { BarDatum } from '../types'
import { pallete } from '../constants'
import drawChart from '../charts/bar'

const SVG = styled.svg.attrs({
  className: 'silky-charts bar',
})`
  height: ${p => `${p.size.height}px` || ``};
  width: ${p => `${p.size.width}px` || ``};

  .bar {
    fill: ${pallete.bg.green};

    &:hover {
      fill: ${pallete.fg.green};
    }
  }

  text {
    color: ${pallete.black};

    &.value {
      fill: ${pallete.white};
      font-size: 0.9em;

      &.out {
        fill: ${pallete.black};
      }
    }
  }

  path {
    stroke: ${pallete.black};
  }

  line {
    stroke: ${pallete.black};

    &.reference-line {
      stroke: ${pallete.reference};
      stroke-width: 3;
      stroke-dasharray: 3 6;
    }
  }

  .grid path {
    stroke-width: 0;
  }

  .grid .tick line {
    stroke: ${pallete.grid};
    stroke-opacity: 0.3;
  }

  .source {
    font-size: 10px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
  }

  .label {
    font-size: 14px;
    font-weight: 400;
  }
`

type Props = {
  currencyShortNotation?: boolean,
  data: BarDatum[],
  grid?: boolean,
  height?: number,
  horizontal?: boolean,
  referenceLine?: boolean,
  shortNotation?: boolean,
  source?: string,
  title?: string,
  valueOnBars?: boolean,
  width?: number,
  xAxisLabel?: string,
  yAxisLabel?: string,
}

export default ({
  currencyShortNotation = false,
  data,
  grid = false,
  height = 540,
  horizontal = false,
  referenceLine = false,
  shortNotation = false,
  source,
  title,
  valueOnBars = false,
  width = 960,
  xAxisLabel,
  yAxisLabel,
}: Props) => {
  const [size, setSize] = useState({ height, width })
  const chartRef = useRef()

  useEffect(() => {
    drawChart({
      currencyShortNotation,
      data,
      grid,
      horizontal,
      ref: chartRef.current,
      referenceLine,
      shortNotation,
      size,
      source,
      title,
      valueOnBars,
      xAxisLabel,
      yAxisLabel,
    })
  })

  return <SVG size={size} ref={chartRef} />
}
