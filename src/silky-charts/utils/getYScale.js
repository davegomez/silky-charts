import { scaleLinear as d3ScaleLinear } from 'd3-scale';
import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import identity from 'ramda/src/identity';
import T from 'ramda/src/T';
import { SCALE_LINEAR } from './constants';

const linearScale = (max, height) =>
  d3ScaleLinear()
    .domain([0, max])
    .range([height, 0]);

export default (type, data, height) =>
  cond([
    [equals(SCALE_LINEAR), always(linearScale(data, height))],
    [(T, identity)],
  ])(type);
