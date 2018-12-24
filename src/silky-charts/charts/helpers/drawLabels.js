import cond from 'ramda/src/cond'
import equals from 'ramda/src/equals'
import identity from 'ramda/src/identity'
import T from 'ramda/src/T'
import title from './title'
import source from './source'
import yAxisLabel from './yAxisLabel'
import xAxisLabel from './xAxisLabel'

export default (svg, size, margin) => (role, text) =>
  cond([
    [equals('title'), () => title(svg, size, margin, text)],
    [equals('source'), () => source(svg, size, margin, text)],
    [equals('yAxis'), () => yAxisLabel(svg, size, margin, text)],
    [equals('xAxis'), () => xAxisLabel(svg, size, margin, text)],
    [T, identity],
  ])(role)
