import { extent } from 'd3-array';
import { scaleBand, scaleTime } from 'd3-scale';
import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import identity from 'ramda/src/identity';
import T from 'ramda/src/T';

const timeScale = (data, width) =>
  scaleTime()
    .domain(extent(data, ({ name }) => new Date(name)))
    .rangeRound([width / data.length / 1.8, width - width / data.length / 1.8]);

const bandScale = (data, width) =>
  scaleBand()
    .domain(data.map(({ name }) => name))
    .range([0, width])
    .padding(0.16);

export default (type, data, width) =>
  cond([
    [equals('time'), always(timeScale(data, width))],
    [equals('band'), always(bandScale(data, width))],
    [(T, identity)],
  ])(type);
