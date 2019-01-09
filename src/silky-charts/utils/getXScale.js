import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import identity from 'ramda/src/identity';
import T from 'ramda/src/T';
import { extent as d3Extent } from 'd3-array';
import { scaleBand as d3ScaleBand, scaleTime as d3ScaleTime } from 'd3-scale';
import { SCALE_TIME, SCALE_BAND } from './constants';

const timeScale = (data, width, barChart = false) => {
  const rangeWidth = width / data.length / 1.8;
  return d3ScaleTime()
    .domain(d3Extent(data, ({ name }) => name))
    .rangeRound(barChart ? [rangeWidth, width - rangeWidth] : [0, width]);
};

const bandScale = (data, width) =>
  d3ScaleBand()
    .domain(data.map(({ name }) => name))
    .range([0, width])
    .padding(0.16);

/**
 * Depending on the type of data we are using to represent the X axis ticks we
 * have to use a different D3 scale
 *
 * @param {String} type Type of Scale defined in the constants file
 * @param {Object} data Data
 * @param {Number} width Chart width
 * @param {Boolean} barChart Indicates if the chart use bars in order to
 * calculate the X axis path with for the time scale
 *
 * @return {Function} D3 scale function
 */
export default (type, data, width, barChart) =>
  cond([
    [equals(SCALE_TIME), always(timeScale(data, width, barChart))],
    [equals(SCALE_BAND), always(bandScale(data, width))],
    [(T, identity)],
  ])(type);
