import { extent as d3Extent } from 'd3-array';
import { scaleBand as d3ScaleBand, scaleTime as d3ScaleTime } from 'd3-scale';
import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import identity from 'ramda/src/identity';
import T from 'ramda/src/T';
import { SCALE_TIME, SCALE_BAND } from './constants';

const timeScale = (data, width, barChart = false) => {
  const rangeWidth = width / data.length / 1.8;
  return d3ScaleTime()
    .domain(d3Extent(data, ({ name }) => new Date(name)))
    .rangeRound(barChart ? [rangeWidth, width - rangeWidth] : [0, width]);
};

const bandScale = (data, width) =>
  d3ScaleBand()
    .domain(data.map(({ name }) => name))
    .range([0, width])
    .padding(0.16);

export default (type, data, width, barChart) =>
  cond([
    [equals(SCALE_TIME), always(timeScale(data, width, barChart))],
    [equals(SCALE_BAND), always(bandScale(data, width))],
    [(T, identity)],
  ])(type);
