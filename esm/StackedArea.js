import { b as getId, c as _slicedToArray, d as SIZE, e as setupData, L as appendStackedValues, B as buildStack, M as getSeries, C as toStackedForm, N as getXScale, O as SCALE_TIME, P as SCALE_BAND, Q as getYScale, R as SCALE_LINEAR, f as getMax, D as getStackedMax, E as setLineType, a as debounce, g as SVG, i as Grid, j as drawGrid, l as Label, S as bySeries, T as classify, U as Path, I as palette, q as Axis, r as rotateXLabels, J as LINE_TYPE, t as MARGIN, u as THEME, w as TICKS, v as ROTATION, y as _objectSpread, z as getSize, A as ASPECT_RATIO } from './chunk-c832da19.js';
import React, { useRef, useState, useEffect } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import 'd3-scale';
import { select } from 'd3-selection';
import 'd3-time-format';
import identity from 'ramda/src/identity';
import 'styled-components';
import 'react-dom';
import 'ramda/src/all';
import 'ramda/src/equals';
import 'ramda/src/or';
import 'ramda/src/type';
import 'ramda/src/complement';
import 'ramda/src/compose';
import { area } from 'd3-shape';
import 'ramda/src/groupBy';
import 'ramda/src/prop';
import 'ramda/src/toPairs';
import 'ramda/src/apply';
import 'ramda/src/curry';
import 'ramda/src/max';
import 'ramda/src/min';
import 'ramda/src/head';
import 'ramda/src/length';
import 'ramda/src/uniq';
import 'ramda/src/map';
import 'ramda/src/filter';
import 'ramda/src/sum';
import 'ramda/src/reduce';
import 'ramda/src/values';
import 'ramda/src/always';
import 'ramda/src/cond';
import 'ramda/src/T';
import 'ramda/src/flatten';
import 'ramda/src/omit';
import 'ramda/src/mergeAll';
import 'ramda/src/splitEvery';
import 'ramda/src/last';

var StackedArea = function StackedArea(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? ASPECT_RATIO : _ref$aspectRatio,
      chartData = _ref.data,
      grid = _ref.grid,
      _ref$height = _ref.height,
      svgHeight = _ref$height === void 0 ? undefined : _ref$height,
      horizontal = _ref.horizontal,
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

  var _useState = useState(getId('stacked-area')),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

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

  data = appendStackedValues(buildStack(getSeries(data))(toStackedForm(data)), data);
  var xScale = getXScale(isDates ? SCALE_TIME : SCALE_BAND, data, width);
  var yScale = getYScale(SCALE_LINEAR, getMax(getStackedMax(data)), height);
  var area$$1 = area().curve(setLineType(lineType, lineTypeOption)).x(function (_ref2) {
    var name = _ref2.name;
    return xScale(name);
  }).y0(function (_ref3) {
    var stackedValues = _ref3.stackedValues;
    return yScale(stackedValues[0]);
  }).y1(function (_ref4) {
    var stackedValues = _ref4.stackedValues;
    return yScale(stackedValues[1]);
  });

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
  }, [handleSize, responsive, handleResize]);
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
  }, yAxisChartLabel), bySeries(data).map(function (_ref5, idx) {
    var _ref6 = _slicedToArray(_ref5, 2),
        series = _ref6[0],
        datum = _ref6[1];

    return React.createElement("g", {
      className: "".concat(classify(series), "-layer"),
      key: idx
    }, React.createElement(Path, {
      chart: "stacked-area",
      fillColor: palette.themes[theme][idx],
      d: area$$1(datum),
      strokeWidth: 0,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }));
  }), React.createElement(Axis, {
    axis: "x",
    position: {
      x: 0,
      y: height
    },
    ref: function ref(node) {
      select(node).call(axisBottom(xScale));
      xAxisLabelRotation && rotateXLabels(id, xAxisLabelRotationValue);
    }
  }), React.createElement(Axis, {
    axis: "y",
    ref: function ref(node) {
      return select(node).call(axisLeft(yScale).ticks(ticks));
    }
  })));
};

export default StackedArea;
//# sourceMappingURL=StackedArea.js.map
