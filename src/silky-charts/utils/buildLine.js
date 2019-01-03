import { line as d3Line } from 'd3-shape';
import { isValid } from 'date-fns';
import { setLineType } from './';

export default (xScale, yScale, type, option) =>
  d3Line()
    .x(({ name }) => xScale(isValid(name) ? new Date(name) : name))
    .y(({ value }) => yScale(value))
    .curve(setLineType(type, option));
