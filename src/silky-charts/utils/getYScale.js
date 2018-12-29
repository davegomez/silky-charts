import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import identity from 'ramda/src/identity';
import T from 'ramda/src/T';

const linearScale = (data, height) =>
  scaleLinear()
    .domain([0, max(data, ({ value }) => value)])
    .range([height, 0]);

export default (type, data, height) =>
  cond([
    [equals('linear'), always(linearScale(data, height))],
    [(T, identity)],
  ])(type);
