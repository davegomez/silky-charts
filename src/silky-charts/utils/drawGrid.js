import { axisBottom, axisLeft } from 'd3-axis';

export default (isHorizontal, xScale, height, yScale, width) =>
  isHorizontal
    ? axisBottom()
        .scale(xScale)
        .tickSize(height, 0, 0)
        .tickFormat('')
    : axisLeft()
        .scale(yScale)
        .tickSize(-width, 0, 0)
        .tickFormat('');
