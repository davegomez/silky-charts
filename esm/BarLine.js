import { b as _slicedToArray, d as _objectSpread } from './chunk-7cf43bf1.js';
import React, { useRef, useState } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import identity from 'ramda/src/identity';
import { a as getId, b as SIZE, c as setupData, B as buildStack, C as toStackedForm, d as getMax, D as getStackedMax, E as setLineType, F as getLineDataForSeries, e as useResize, f as GraphContext, g as SVG, h as MainGroup, i as Grid, j as drawGrid, k as Title, l as Label, m as DataSource, G as StackedBarDatum, q as Axis, r as rotateXLabels, H as LineDatum, I as palette, s as TIME_FORMAT, J as LINE_TYPE, t as MARGIN, x as SCALE_PADDING, K as SECONDARY_THEME, u as THEME, v as ROTATION, w as X_TICKS, y as Y_TICKS, z as getSize, A as ASPECT_RATIO } from './chunk-bad7ef92.js';
import 'react-dom';
import { line } from 'd3-shape';
import 'ramda/src/compose';
import 'ramda/src/groupBy';
import 'ramda/src/prop';
import 'ramda/src/toPairs';
import head from 'ramda/src/head';
import 'ramda/src/max';
import 'ramda/src/min';
import 'ramda/src/find';
import 'ramda/src/filter';
import 'ramda/src/sum';
import 'ramda/src/map';
import 'ramda/src/reduce';
import 'ramda/src/values';
import 'ramda/src/uniq';
import 'ramda/src/always';
import 'ramda/src/complement';
import 'ramda/src/addIndex';
import 'ramda/src/mergeAll';
import 'ramda/src/cond';
import 'ramda/src/equals';
import 'ramda/src/T';
import 'ramda/src/flatten';
import 'ramda/src/sortBy';
import 'ramda/src/splitEvery';
import 'styled-components';
import 'ramda/src/last';

var BarLine = function BarLine(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? ASPECT_RATIO : _ref$aspectRatio,
      chartData = _ref.data,
      dataSource = _ref.dataSource,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? TIME_FORMAT : _ref$dateFormat,
      grid = _ref.grid,
      _ref$height = _ref.height,
      svgHeight = _ref$height === void 0 ? undefined : _ref$height,
      horizontal = _ref.horizontal,
      _ref$lineSeries = _ref.lineSeries,
      lineSeries = _ref$lineSeries === void 0 ? [] : _ref$lineSeries,
      _ref$lineType = _ref.lineType,
      lineType = _ref$lineType === void 0 ? LINE_TYPE : _ref$lineType,
      _ref$lineTypeOption = _ref.lineTypeOption,
      lineTypeOption = _ref$lineTypeOption === void 0 ? null : _ref$lineTypeOption,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? MARGIN : _ref$margin,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? identity : _ref$onClick,
      _ref$onMouseEnter = _ref.onMouseEnter,
      onMouseEnter = _ref$onMouseEnter === void 0 ? identity : _ref$onMouseEnter,
      _ref$onMouseLeave = _ref.onMouseLeave,
      onMouseLeave = _ref$onMouseLeave === void 0 ? identity : _ref$onMouseLeave,
      _ref$padding = _ref.padding,
      xScalePadding = _ref$padding === void 0 ? SCALE_PADDING : _ref$padding,
      responsive = _ref.responsive,
      _ref$secondaryTheme = _ref.secondaryTheme,
      secondaryTheme = _ref$secondaryTheme === void 0 ? SECONDARY_THEME : _ref$secondaryTheme,
      _ref$stackedSeries = _ref.stackedSeries,
      stackedSeries = _ref$stackedSeries === void 0 ? [] : _ref$stackedSeries,
      staticTooltip = _ref.staticTooltip,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? THEME : _ref$theme,
      title = _ref.title,
      tooltip = _ref.tooltip,
      _ref$width = _ref.width,
      svgWidth = _ref$width === void 0 ? undefined : _ref$width,
      xAxisChartLabel = _ref.xAxisChartLabel,
      xAxisLabelRotation = _ref.xAxisLabelRotation,
      _ref$xAxisLabelRotati = _ref.xAxisLabelRotationValue,
      xAxisLabelRotationValue = _ref$xAxisLabelRotati === void 0 ? ROTATION : _ref$xAxisLabelRotati,
      _ref$xAxisTicks = _ref.xAxisTicks,
      xAxisTicks = _ref$xAxisTicks === void 0 ? X_TICKS : _ref$xAxisTicks,
      yAxisChartLabel = _ref.yAxisChartLabel,
      _ref$yAxisTicks = _ref.yAxisTicks,
      yAxisTicks = _ref$yAxisTicks === void 0 ? Y_TICKS : _ref$yAxisTicks;
  var svgRef = useRef();

  var _useState = useState(getId('bar-line')),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var timeFormat$1 = timeFormat(dateFormat);

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

  var stack = buildStack(stackedSeries)(toStackedForm(data));
  var xScale = scaleBand().domain(data.map(function (_ref2) {
    var name = _ref2.name;
    return name;
  })).range([0, width]).padding(xScalePadding);
  var yScale = scaleLinear().domain([0, getMax(getStackedMax(data, stackedSeries))]).range([height, 0]);
  var line$1 = line().curve(setLineType(lineType, lineTypeOption)).x(function (_ref3) {
    var name = _ref3.name;
    return xScale(name) + xScale.bandwidth() / 2;
  }).y(function (_ref4) {
    var value = _ref4.value;
    return yScale(value);
  });
  var lineData = getLineDataForSeries(lineSeries, data);

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

  useResize(responsive, handleSize);
  return React.createElement(GraphContext.Provider, {
    value: {
      margin: margin,
      node: svgRef.current,
      staticTooltip: staticTooltip
    }
  }, React.createElement(SVG, {
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
    width: width
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
  }, yAxisChartLabel), dataSource && React.createElement(DataSource, {
    dataSource: dataSource,
    height: height,
    margin: margin,
    width: width
  }), React.createElement(StackedBarDatum, {
    data: data,
    series: stack,
    theme: theme,
    x: xScale,
    y: yScale,
    width: width,
    height: height,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    tooltip: tooltip
  }), React.createElement(Axis, {
    axis: "x",
    position: {
      x: 0,
      y: height
    },
    ref: function ref(node) {
      select(node).call(axisBottom(xScale).ticks(xAxisTicks).tickFormat(isDates ? timeFormat$1 : null));
      xAxisLabelRotation && rotateXLabels(id, xAxisLabelRotationValue);
    }
  }), React.createElement(Axis, {
    axis: "y",
    ref: function ref(node) {
      return select(node).call(axisLeft(yScale).ticks(yAxisTicks));
    }
  }), lineData.map(function (datum, idx) {
    return React.createElement("g", {
      className: "".concat(head(datum)['series'], "-layer"),
      key: idx
    }, React.createElement(LineDatum, {
      chart: "bar-line",
      data: datum,
      color: palette.themes[secondaryTheme][idx],
      d: line$1(datum),
      xScale: xScale,
      yScale: yScale,
      margin: margin,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      staticTooltip: staticTooltip,
      svg: svgRef.current,
      tooltip: tooltip
    }));
  }))));
};

export default BarLine;
//# sourceMappingURL=BarLine.js.map
