import React from 'react'
import styled from 'styled-components'
import { Bar } from './silky-charts'
import data from './data/bar'

const App = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Chart = styled.div`
  background-color: rgb(255, 255, 255);
  height: 540px;
  width: 960px;
`

export default () => (
  <App>
    <Chart>
      <Bar
        data={data}
        // showValue
        // showDivergence
        // grid
        referenceLine
        source="Source: AWeber Reports"
        title="Subscriptions during February 2018"
        xAxisLabel="February 2018"
        yAxisLabel="Subscribers"
      />
    </Chart>
  </App>
)
