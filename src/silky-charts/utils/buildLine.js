import { line as d3Line } from 'd3-shape';
import { setLineType } from './';

export default (x, y, type, option) =>
  d3Line()
    .x(({ name }) => x(new Date(name)))
    .y(({ value }) => y(value))
    .curve(setLineType(type, option));
