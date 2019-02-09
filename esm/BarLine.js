import { a as getId, b as _slicedToArray, c as SIZE, d as setupData, z as buildStack, A as toStackedForm, B as getXScale, C as SCALE_TIME, D as SCALE_BAND, E as getYScale, F as SCALE_LINEAR, e as getMax, G as getStackedMax, H as setLineType, I as getLineDataForSeries, f as debounce, g as SVG, i as Grid, j as drawGrid, k as Label, J as StackedBarDatum, o as Axis, K as extendXPath, p as rotateXLabels, L as LineDatum, M as palette, N as LINE_TYPE, r as MARGIN, O as SECONDARY_THEME, s as THEME, u as TICKS, t as ROTATION, w as _objectSpread, x as getSize, y as ASPECT_RATIO } from './chunk-e3caabd4.js';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import identity from 'ramda/src/identity';
import { axisBottom, axisLeft } from 'd3-axis';
import 'd3-scale';
import { select } from 'd3-selection';
import 'styled-components';
import 'react-dom';
import { line } from 'd3-shape';
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
import head from 'ramda/src/head';
import 'ramda/src/last';
import 'ramda/src/type';

var BarLine = function BarLine(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? ASPECT_RATIO : _ref$aspectRatio,
      chartData = _ref.data,
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
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? false : _ref$responsive,
      _ref$secondaryTheme = _ref.secondaryTheme,
      secondaryTheme = _ref$secondaryTheme === void 0 ? SECONDARY_THEME : _ref$secondaryTheme,
      _ref$stackedSeries = _ref.stackedSeries,
      stackedSeries = _ref$stackedSeries === void 0 ? [] : _ref$stackedSeries,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? THEME : _ref$theme,
      _ref$ticks = _ref.ticks,
      ticks = _ref$ticks === void 0 ? TICKS : _ref$ticks,
      _ref$width = _ref.width,
      svgWidth = _ref$width === void 0 ? undefined : _ref$width,
      xAxisChartLabel = _ref.xAxisChartLabel,
      xAxisLabelRotation = _ref.xAxisLabelRotation,
      _ref$xAxisLabelRotati = _ref.xAxisLabelRotationValue,
      xAxisLabelRotationValue = _ref$xAxisLabelRotati === void 0 ? ROTATION : _ref$xAxisLabelRotati,
      yAxisChartLabel = _ref.yAxisChartLabel;
  var svgRef = useRef();

  var _useState = useState(getId('bar-line')),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var _useState3 = useState(SIZE),
      _useState4 = _slicedToArray(_useState3, 2),
      _useState4$ = _useState4[0],
      width = _useState4$.width,
      height = _useState4$.height,
      isSizeSet = _useState4$.isSizeSet,
      setSize = _useState4[1];

  var _useMemo = useMemo(function () {
    return setupData(chartData);
  }, chartData),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      isDates = _useMemo2[0],
      data = _useMemo2[1];

  var stack = useMemo(function () {
    return buildStack(stackedSeries)(toStackedForm(data));
  }, data);
  var xScale = getXScale(isDates ? SCALE_TIME : SCALE_BAND, data, width, true);
  var yScale = getYScale(SCALE_LINEAR, getMax(getStackedMax(data, stackedSeries)), height);
  var line$$1 = line().curve(setLineType(lineType, lineTypeOption)).x(function (_ref2) {
    var name = _ref2.name;
    return isDates ? xScale(name) : xScale(name) + xScale.bandwidth() / 2;
  }).y(function (_ref3) {
    var value = _ref3.value;
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
  }, React.createElement("g", {
    className: "silky-charts-container",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")")
  }, grid && React.createElement(Grid, {
    ref: function ref(node) {
      return select(node).call(drawGrid(horizontal, xScale, height, yScale, width, ticks));
    }
  }), xAxisChartLabel && React.createElement(Label, {
    axis: "x",
    margin: margin,
    width: width,
    height: height
  }, xAxisChartLabel), yAxisChartLabel && React.createElement(Label, {
    axis: "y",
    margin: margin,
    width: width,
    height: height
  }, yAxisChartLabel), React.createElement(StackedBarDatum, {
    data: data,
    series: stack,
    isDates: isDates,
    theme: theme,
    x: xScale,
    y: yScale,
    width: width,
    height: height,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }), React.createElement(Axis, {
    axis: "x",
    position: {
      x: 0,
      y: height
    },
    ref: function ref(node) {
      select(node).call(axisBottom(xScale));
      isDates && extendXPath(id, width);
      xAxisLabelRotation && rotateXLabels(id, xAxisLabelRotationValue);
    }
  }), React.createElement(Axis, {
    axis: "y",
    ref: function ref(node) {
      return select(node).call(axisLeft(yScale).ticks(ticks));
    }
  }), lineData.map(function (datum, idx) {
    return React.createElement("g", {
      className: "".concat(head(datum)['series'], "-layer"),
      key: idx
    }, React.createElement(LineDatum, {
      chart: "bar-line",
      data: datum,
      isDates: isDates,
      color: palette.themes[secondaryTheme].base[idx],
      d: line$$1(datum),
      xScale: xScale,
      yScale: yScale,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }));
  })));
};

export default BarLine;
//# sourceMappingURL=BarLine.js.map
