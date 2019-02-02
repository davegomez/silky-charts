import { a as getId, b as _slicedToArray, d as SIZE, e as setupData, Y as appendStackedValues, G as buildStack, Z as getSeries, H as toStackedForm, I as getXScale, J as SCALE_TIME, K as SCALE_BAND, L as getYScale, M as SCALE_LINEAR, h as getMax, N as getStackedMax, _ as area, P as setLineType, i as debounce, j as SVG, l as Grid, m as select, n as drawGrid, o as Label, $ as bySeries, a0 as classify, a1 as Path, V as palette, s as Axis, t as axisBottom, u as rotateXLabels, v as axisLeft, W as LINE_TYPE, x as MARGIN, y as identity, z as THEME, B as TICKS, A as ROTATION, D as _objectSpread, E as getSize, F as ASPECT_RATIO } from './chunk-501b9e58.js';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import 'styled-components';
import 'react-dom';

var StackedArea = function StackedArea(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? ASPECT_RATIO : _ref$aspectRatio,
      chartData = _ref.data,
      grid = _ref.grid,
      _ref$height = _ref.height,
      svgHeight = _ref$height === void 0 ? undefined : _ref$height,
      isHorizontal = _ref.isHorizontal,
      _ref$lineSeries = _ref.lineSeries,
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
      xAxisLabel = _ref.xAxisLabel,
      xAxisLabelRotation = _ref.xAxisLabelRotation,
      _ref$xAxisLabelRotati = _ref.xAxisLabelRotationValue,
      xAxisLabelRotationValue = _ref$xAxisLabelRotati === void 0 ? ROTATION : _ref$xAxisLabelRotati,
      yAxisLabel = _ref.yAxisLabel;
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

  var _useMemo = useMemo(function () {
    return setupData(chartData);
  }, chartData),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      isDates = _useMemo2[0],
      data = _useMemo2[1];

  data = useMemo(function () {
    return appendStackedValues(buildStack(getSeries(data))(toStackedForm(data)), data);
  }, data);
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
      return select(node).call(drawGrid(isHorizontal, xScale, height, yScale, width, ticks));
    }
  }), xAxisLabel && React.createElement(Label, {
    axis: "x",
    margin: margin,
    width: width,
    height: height
  }, xAxisLabel), yAxisLabel && React.createElement(Label, {
    axis: "y",
    margin: margin,
    width: width,
    height: height
  }, yAxisLabel), bySeries(data).map(function (_ref5, idx) {
    var _ref6 = _slicedToArray(_ref5, 2),
        series = _ref6[0],
        datum = _ref6[1];

    return React.createElement("g", {
      className: "".concat(classify(series), "-layer"),
      key: idx
    }, React.createElement(Path, {
      chart: "stacked-area",
      fillColor: palette.themes[theme].base[idx],
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
