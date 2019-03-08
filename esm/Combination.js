import { b as _slicedToArray } from './chunk-f3591dd7.js';
import React, { useRef, useState } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import identity from 'ramda/src/identity';
import { a as SIZE, b as setupData, y as buildStack, z as toStackedForm, c as getMax, A as getStackedMax, B as setLineType, C as getLineDataForSeries, d as useResize, e as GraphContext, f as SVG, g as MainGroup, h as Grid, i as drawGrid, j as Title, k as Label, l as DataSource, D as StackedBarDatum, p as Axis, E as LineDatum, F as palette, q as ASPECT_RATIO, r as TIME_FORMAT, G as LINE_TYPE, s as MARGIN, t as SCALE_PADDING, H as SECONDARY_THEME, u as THEME, v as ROTATION, w as X_TICKS, x as Y_TICKS } from './chunk-8b55d40a.js';
import 'react-dom';
import { line } from 'd3-shape';
import 'ramda/src/compose';
import 'ramda/src/groupBy';
import 'ramda/src/prop';
import 'ramda/src/toPairs';
import 'd3-axis';
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
import 'd3-time-format';
import 'ramda/src/last';

var Combination = function Combination(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? ASPECT_RATIO : _ref$aspectRatio,
      chartData = _ref.data,
      dataSource = _ref.dataSource,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? TIME_FORMAT : _ref$dateFormat,
      grid = _ref.grid,
      _ref$height = _ref.height,
      graphHeight = _ref$height === void 0 ? undefined : _ref$height,
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
      outlinedStyle = _ref.outlinedStyle,
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
      visibleTicks = _ref.visibleTicks,
      _ref$width = _ref.width,
      graphWidth = _ref$width === void 0 ? undefined : _ref$width,
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

  var _useState = useState(SIZE),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      width = _useState2$.width,
      height = _useState2$.height,
      setSize = _useState2[1];

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
  useResize({
    aspectRatio: aspectRatio,
    graphHeight: graphHeight,
    graphWidth: graphWidth,
    margin: margin,
    responsive: responsive,
    setSize: setSize,
    svgRef: svgRef
  });
  return React.createElement(GraphContext.Provider, {
    value: {
      dateFormat: dateFormat,
      margin: margin,
      node: svgRef.current,
      outlinedStyle: outlinedStyle,
      staticTooltip: staticTooltip,
      visibleTicks: visibleTicks,
      xAxisLabelRotation: xAxisLabelRotation,
      xAxisLabelRotationValue: xAxisLabelRotationValue
    }
  }, React.createElement(SVG, {
    size: {
      width: graphWidth || width + margin.left + margin.right,
      height: graphHeight || height + margin.top + margin.bottom
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
    axisTicks: xAxisTicks,
    orientation: "bottom",
    position: {
      x: 0,
      y: height
    },
    scale: xScale,
    toDate: isDates
  }), React.createElement(Axis, {
    axis: "y",
    axisTicks: yAxisTicks,
    orientation: "left",
    scale: yScale
  }), lineData.map(function (datum, idx) {
    return React.createElement("g", {
      className: "".concat(head(datum)['series'], "-layer"),
      key: idx
    }, React.createElement(LineDatum, {
      chart: "combination",
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

export default Combination;
//# sourceMappingURL=Combination.js.map
