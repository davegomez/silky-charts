import { a as getId, b as _slicedToArray, c as SIZE, d as setupData, e as getMax, f as debounce, g as SVG, h as MainGroup, i as Grid, j as drawGrid, k as Title, l as Label, m as Source, n as DataGroup, o as BarDatum, p as getBaseColor, q as Axis, r as rotateXLabels, s as TIME_FORMAT, t as MARGIN, u as THEME, v as ROTATION, w as TICKS, x as SCALE_PADDING, y as _objectSpread, z as getSize, A as ASPECT_RATIO } from './chunk-67548fd7.js';
import React, { useRef, useState, useEffect } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import identity from 'ramda/src/identity';
import 'styled-components';
import 'react-dom';
import 'd3-shape';
import 'ramda/src/all';
import 'ramda/src/compose';
import 'date-fns';
import 'ramda/src/groupBy';
import 'ramda/src/prop';
import 'ramda/src/toPairs';
import 'ramda/src/apply';
import 'ramda/src/curry';
import 'color';
import 'ramda/src/length';
import 'ramda/src/uniq';
import 'ramda/src/map';
import 'ramda/src/max';
import 'ramda/src/filter';
import 'ramda/src/sum';
import 'ramda/src/reduce';
import 'ramda/src/values';
import 'ramda/src/always';
import 'ramda/src/cond';
import 'ramda/src/equals';
import 'ramda/src/T';
import 'd3-array';
import 'ramda/src/flatten';
import 'ramda/src/omit';
import 'ramda/src/mergeAll';
import 'ramda/src/splitEvery';
import 'ramda/src/head';
import 'ramda/src/last';
import 'ramda/src/type';

var Bar = function Bar(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? ASPECT_RATIO : _ref$aspectRatio,
      title = _ref.title,
      chartData = _ref.data,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? TIME_FORMAT : _ref$dateFormat,
      grid = _ref.grid,
      _ref$height = _ref.height,
      svgHeight = _ref$height === void 0 ? undefined : _ref$height,
      horizontal = _ref.horizontal,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? MARGIN : _ref$margin,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? identity : _ref$onClick,
      _ref$onMouseEnter = _ref.onMouseEnter,
      onMouseEnter = _ref$onMouseEnter === void 0 ? identity : _ref$onMouseEnter,
      _ref$onMouseLeave = _ref.onMouseLeave,
      onMouseLeave = _ref$onMouseLeave === void 0 ? identity : _ref$onMouseLeave,
      responsive = _ref.responsive,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? THEME : _ref$theme,
      tooltip = _ref.tooltip,
      sourceLabel = _ref.sourceLabel,
      _ref$width = _ref.width,
      svgWidth = _ref$width === void 0 ? undefined : _ref$width,
      xAxisChartLabel = _ref.xAxisChartLabel,
      xAxisLabelRotation = _ref.xAxisLabelRotation,
      _ref$xAxisLabelRotati = _ref.xAxisLabelRotationValue,
      xAxisLabelRotationValue = _ref$xAxisLabelRotati === void 0 ? ROTATION : _ref$xAxisLabelRotati,
      _ref$xAxisTicks = _ref.xAxisTicks,
      xAxisTicks = _ref$xAxisTicks === void 0 ? TICKS : _ref$xAxisTicks,
      _ref$padding = _ref.padding,
      xScalePadding = _ref$padding === void 0 ? SCALE_PADDING : _ref$padding,
      yAxisChartLabel = _ref.yAxisChartLabel,
      _ref$yAxisTicks = _ref.yAxisTicks,
      yAxisTicks = _ref$yAxisTicks === void 0 ? TICKS : _ref$yAxisTicks;
  var svgRef = useRef();

  var _useState = useState(getId('bar')),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var timeFormat$$1 = timeFormat(dateFormat);

  var _useState3 = useState(SIZE),
      _useState4 = _slicedToArray(_useState3, 2),
      _useState4$ = _useState4[0],
      width = _useState4$.width,
      height = _useState4$.height,
      isSizeSet = _useState4$.isSizeSet,
      setSize = _useState4[1];

  var _setupData = setupData(chartData),
      _setupData2 = _slicedToArray(_setupData, 2),
      isDates = _setupData2[0],
      data = _setupData2[1];

  var xScale = scaleBand().domain(data.map(function (_ref2) {
    var name = _ref2.name;
    return name;
  })).range([0, width]).padding(xScalePadding);
  var yScale = scaleLinear().domain([0, getMax(data.map(function (_ref3) {
    var value = _ref3.value;
    return value;
  }))]).range([height, 0]);

  var handleSize = function handleSize() {
    var offsetWidth = svgRef.current.parentElement.offsetWidth;

    if ((svgWidth || svgHeight) && !isSizeSet) {
      setSize(_objectSpread({}, getSize(svgWidth, svgHeight, margin, aspectRatio), {
        isSizeSet: true
      }));
    } else if (offsetWidth !== svgWidth - (margin.left + margin.right)) {
      setSize(_objectSpread({}, getSize(offsetWidth, undefined, margin, aspectRatio), {
        isSizeSet: true
      }));
    }
  };

  var handleResize = debounce(handleSize)();
  useEffect(function () {
    handleSize();
    responsive && window.addEventListener('resize', handleResize);
    return function () {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return React.createElement(SVG, {
    identifier: id,
    size: {
      width: svgWidth || width + margin.left + margin.right,
      height: svgHeight || height + margin.top + margin.bottom
    },
    ref: svgRef
  }, React.createElement(MainGroup, {
    margin: margin
  }, grid && React.createElement(Grid, {
    ref: function ref(node) {
      return select(node).call(drawGrid(horizontal, xScale, height, yScale, width, xAxisTicks, yAxisTicks));
    }
  }), title && React.createElement(Title, {
    margin: margin,
    width: width,
    height: height
  }, title), xAxisChartLabel && React.createElement(Label, {
    axis: "x",
    margin: margin,
    width: width,
    height: height
  }, xAxisChartLabel), yAxisChartLabel && React.createElement(Label, {
    axis: "y",
    margin: margin,
    width: width,
    height: height
  }, yAxisChartLabel), sourceLabel && React.createElement(Source, {
    margin: margin,
    width: width,
    height: height
  }, sourceLabel), React.createElement(DataGroup, null, data.map(function (_ref4, idx) {
    var name = _ref4.name,
        value = _ref4.value;
    return React.createElement(BarDatum, {
      key: idx,
      datum: {
        name: name,
        value: value
      },
      color: getBaseColor(theme),
      x: xScale(name),
      y: yScale(value),
      width: xScale.bandwidth(),
      height: height - yScale(value),
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      tooltip: tooltip
    });
  })), React.createElement(Axis, {
    axis: "x",
    position: {
      x: 0,
      y: height
    },
    ref: function ref(node) {
      select(node).call(axisBottom(xScale).ticks(xAxisTicks).tickFormat(isDates ? timeFormat$$1 : null));
      xAxisLabelRotation && rotateXLabels(id, xAxisLabelRotationValue);
    }
  }), React.createElement(Axis, {
    axis: "y",
    ref: function ref(node) {
      return select(node).call(axisLeft(yScale).ticks(yAxisTicks));
    }
  })));
};

export default Bar;
//# sourceMappingURL=Bar.js.map
