'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var d3Axis = require('d3-axis');
var d3Scale = require('d3-scale');
var d3Selection = require('d3-selection');
var identity = _interopDefault(require('ramda/src/identity'));
var styled = _interopDefault(require('styled-components'));
var reactDom = require('react-dom');
var d3Shape = require('d3-shape');
var all = _interopDefault(require('ramda/src/all'));
var compose = _interopDefault(require('ramda/src/compose'));
var complement = _interopDefault(require('ramda/src/complement'));
var groupBy = _interopDefault(require('ramda/src/groupBy'));
var prop = _interopDefault(require('ramda/src/prop'));
var toPairs = _interopDefault(require('ramda/src/toPairs'));
var apply = _interopDefault(require('ramda/src/apply'));
var curry = _interopDefault(require('ramda/src/curry'));
var length = _interopDefault(require('ramda/src/length'));
var uniq = _interopDefault(require('ramda/src/uniq'));
var map = _interopDefault(require('ramda/src/map'));
var max = _interopDefault(require('ramda/src/max'));
var filter = _interopDefault(require('ramda/src/filter'));
var sum = _interopDefault(require('ramda/src/sum'));
var reduce = _interopDefault(require('ramda/src/reduce'));
var values = _interopDefault(require('ramda/src/values'));
var always = _interopDefault(require('ramda/src/always'));
var cond = _interopDefault(require('ramda/src/cond'));
var equals = _interopDefault(require('ramda/src/equals'));
var T = _interopDefault(require('ramda/src/T'));
var d3Array = require('d3-array');
var flatten = _interopDefault(require('ramda/src/flatten'));
var omit = _interopDefault(require('ramda/src/omit'));
var mergeAll = _interopDefault(require('ramda/src/mergeAll'));
var splitEvery = _interopDefault(require('ramda/src/splitEvery'));
var head = _interopDefault(require('ramda/src/head'));
var last = _interopDefault(require('ramda/src/last'));
var type = _interopDefault(require('ramda/src/type'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Axis = styled.g.attrs(function (_ref) {
  var axis = _ref.axis,
      position = _ref.position;
  return {
    className: "axis-".concat(axis),
    transform: position && "translate(".concat(position.x, ", ").concat(position.y, ")")
  };
})(_templateObject());

var BarDatum$$1 = function BarDatum$$1(_ref) {
  var color = _ref.color,
      datum = _ref.datum,
      height = _ref.height,
      onClick = _ref.onClick,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseLeave = _ref.onMouseLeave,
      withTooltip = _ref.tooltip,
      width = _ref.width,
      x = _ref.x,
      y = _ref.y;

  var _useState = React.useState({
    pageX: null,
    pageY: null,
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      setTooltip = _useState2[1];

  return React__default.createElement(React.Fragment, null, React__default.createElement(Rect, {
    chart: "bar",
    fillColor: color,
    onClick: onClick,
    onMouseEnter: function onMouseEnter(event) {
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          show: true
        });
      });

      _onMouseEnter(event);
    },
    onMouseLeave: function onMouseLeave(event) {
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          show: false
        });
      });

      _onMouseLeave(event);
    },
    onMouseMove: function onMouseMove(event) {
      event.persist();
      var pageX = event.pageX,
          pageY = event.pageY;
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          pageX: pageX,
          pageY: pageY
        });
      });
    },
    position: {
      x: x,
      y: y
    },
    size: {
      width: width,
      height: height
    }
  }), withTooltip && tooltip.show && reactDom.createPortal(React__default.createElement(Tooltip, {
    pageX: tooltip.pageX,
    pageY: tooltip.pageY
  }, React__default.createElement(TooltipItem, _extends({
    color: color
  }, datum))), document.body));
};

var white = 'rgb(255, 255, 255)'; // #FFFFFF

var black = 'rgb(33, 33, 33)'; // #212121

var grey = 'rgb(220, 220, 220)'; // #DCDCDC

var themes = {
  monteCarlo: ['rgb(8,104,172)', 'rgb(67,162,202)', 'rgb(123,204,196)', 'rgb(186,228,188)', 'rgb(240,249,232)'],
  vividCerise: ['rgb(152,0,67)', 'rgb(221,28,119)', 'rgb(223,101,176)', 'rgb(215,181,216)', 'rgb(241,238,246)'],
  sundown: ['rgb(122,1,119)', 'rgb(197,27,138)', 'rgb(247,104,161)', 'rgb(251,180,185)', 'rgb(254,235,226)'],
  madang: ['rgb(0,104,55)', 'rgb(49,163,84)', 'rgb(120,198,121)', 'rgb(194,230,153)', 'rgb(255,255,204)'],
  curiousBlue: ['rgb(37,52,148)', 'rgb(44,127,184)', 'rgb(65,182,196)', 'rgb(161,218,180)', 'rgb(255,255,204)']
};
var palette = {
  white: white,
  black: black,
  grey: grey,
  themes: themes
};

var ASPECT_RATIO = '16:9';
var DEBOUNCE = 100;
var MARGIN = {
  top: 40,
  right: 50,
  bottom: 50,
  left: 50
};
var ROTATION = -50;
var SIZE = {
  width: 0,
  height: 0,
  isSizeSet: false
};
var TICKS = 5;
var TIME_FORMAT = '%a %d';
var WIDTH = 640; // Scales

var SCALE_BAND = 'band';
var SCALE_LINEAR = 'linear';
var SCALE_PADDING = 0.1;
var SCALE_TIME = 'time'; // Themes

var THEME = 'monteCarlo';
var SECONDARY_THEME = 'vividCerise'; // Line options

var LINE_STROKE_WIDTH = 3;
var LINE_TYPE = 'curveLinear';
var LINE_TYPES = {
  curveBasis: d3Shape.curveBasis,
  curveBasisClosed: d3Shape.curveBasisClosed,
  curveBasisOpen: d3Shape.curveBasisOpen,
  curveBundle: d3Shape.curveBundle,
  curveCardinal: d3Shape.curveCardinal,
  curveCardinalClosed: d3Shape.curveCardinalClosed,
  curveCardinalOpen: d3Shape.curveCardinalOpen,
  curveCatmullRom: d3Shape.curveCatmullRom,
  curveCatmullRomClosed: d3Shape.curveCatmullRomClosed,
  curveCatmullRomOpen: d3Shape.curveCatmullRomOpen,
  curveLinear: d3Shape.curveLinear,
  curveLinearClosed: d3Shape.curveLinearClosed,
  curveMonotoneX: d3Shape.curveMonotoneX,
  curveMonotoneY: d3Shape.curveMonotoneY,
  curveNatural: d3Shape.curveNatural,
  curveStep: d3Shape.curveStep,
  curveStepAfter: d3Shape.curveStepAfter,
  curveStepBefore: d3Shape.curveStepBefore
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n  stroke: ", ";\n  stroke-width: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Circle = styled.circle.attrs(function (_ref) {
  var chart = _ref.chart;
  return {
    className: chart
  };
})(_templateObject$1(), white, function (_ref2) {
  var strokeColor = _ref2.strokeColor;
  return strokeColor;
}, LINE_STROKE_WIDTH);

function _templateObject$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var DataGroup = styled.g.attrs({
  className: 'dataviz-layer'
})(_templateObject$2());

function toDate(argument) {
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fpAk2");
      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

var isNotNaN = complement(isNaN);
var isValid = compose(isNotNaN, toDate);

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

var getTimezoneOffsetInMilliseconds = function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
};

var toInteger = function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}; // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var isLeapYearIndex = function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
};

var validateDate = function validateDate(year, month, date) {
  return !(month < 0 || month > 11 || date < 1 || date > (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28)));
};

var validateDayOfYearDate = function validateDayOfYearDate(year, dayOfYear) {
  return !(dayOfYear < 1 || dayOfYear > (isLeapYearIndex(year) ? 366 : 365));
};

var validateWeekDate = function validateWeekDate(_year, week, day) {
  return !(week < 0 || week > 52 || day < 0 || day > 6);
};

var validateTime = function validateTime(hours, minutes, seconds) {
  return !(seconds < 0 || seconds >= 60 || minutes < 0 || minutes >= 60 || hours < 0 || hours >= 25);
};

var validateTimezone = function validateTimezone(_hours, minutes) {
  return !(minutes < 0 || minutes > 59);
};

var splitDateString = function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
};

var parseYear = function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) {
    return {
      year: null
    };
  }

  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
};

var parseDate = function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) {
    return null;
  }

  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]) - 1;
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
};

var parseDateUnit = function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
};

var parseTime = function parseTime(timeString) {
  var captures = timeString.match(timeRegex);

  if (!captures) {
    return null; // Invalid ISO-formatted time
  }

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
};

var parseTimeUnit = function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
};

var parseTimezone = function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);

  if (!captures) {
    return 0;
  }

  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
};

var dayOfISOWeekYear = function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week || 0) * 7 + (day || 0) + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
};

var parseISO = (function (argument, dirtyOptions) {
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var fullTime = timestamp + time;
    var fullTimeDate = new Date(fullTime);
    offset = getTimezoneOffsetInMilliseconds(fullTimeDate); // Adjust time when it's coming from DST

    var fullTimeDateNextDay = new Date(fullTime);
    fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1);
    var offsetDiff = getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) - offset;

    if (offsetDiff > 0) {
      offset += offsetDiff;
    }
  }

  return new Date(timestamp + time + offset);
});

var isISODate = compose(isValid, parseISO);

var allDate = all(isISODate);

var idx = 0;
var appendStackedValues = (function (stack, data) {
  stack.forEach(function (values$$1) {
    data.forEach(function (datum) {
      if (values$$1.key === datum.series) {
        datum.stackedValues = values$$1[idx];
        idx += 1;
      }
    });
    idx = 0;
  });
  return data;
});

var buildStack = (function (keys) {
  return d3Shape.stack().keys(keys).order(d3Shape.stackOrderNone).offset(d3Shape.stackOffsetNone);
});

var bySeries = compose(toPairs, groupBy(prop('series')));

var classify = (function (str) {
  return str.replace(/ /g, '-').toLowerCase();
});

/**
 * Debounce function
 * Source: https://gist.github.com/tommmyy/daf61103d6022cd23d74c71b0e8adc0d
 *
 * @param {Boolean} immediate If true run `fn` at the start of the timeout
 * @param {Number} timeMs Debounce timeout
 * @param {Function} fn Function to debounce
 *
 * @return {Number} timeout
 * @example
 *
 *    const say = (x) => console.log(x)
 *    const debouncedSay = debounce_(false, 1000, say)();
 *
 *    debouncedSay("1")
 *    debouncedSay("2")
 *    debouncedSay("3")
 *
 */

var debounce_ = curry(function (immediate, timeMs, fn) {
  return function () {
    var timeout;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var later = function later() {
        timeout = null;

        if (!immediate) {
          apply(fn, args);
        }
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, timeMs);

      if (callNow) {
        apply(fn, args);
      }

      return timeout;
    };
  };
});
var debounceImmediate = debounce_(true);
var debounce = debounce_(false);

var debounce$1 = debounce(DEBOUNCE);
var debounceImmediate$1 = debounceImmediate(DEBOUNCE);

var drawGrid = (function (horizontal, xScale, height, yScale, width, xAxisTicks, yAxisTicks) {
  return horizontal ? d3Axis.axisBottom().scale(xScale).tickSize(height, 0, 0).ticks(xAxisTicks).tickFormat('') : d3Axis.axisLeft().scale(yScale).tickSize(-width, 0, 0).ticks(yAxisTicks).tickFormat('');
});

var getBaseColor = (function (theme) {
  return themes[theme][2];
});

var getHoverColor = (function (rgb) {
  return "rgb(".concat(rgb.split(/\D/).filter(function (x) {
    return x;
  }).map(function (x) {
    var val = parseInt(x) + -20;

    if (val > 255) {
      val = 255;
    } else if (val < 0) {
      val = 0;
    }

    return val;
  }).join(', '), ")");
});

var innerId = 0;
var getId = (function (prefix) {
  if (!prefix) {
    return null;
  }

  var id = "silky-charts_".concat(prefix, "-").concat(innerId);
  innerId += 1;
  return id;
});

var getLength = compose(length, uniq, map(prop('name')));

var getLineDataForSeries = (function (series, data) {
  return series.map(function (x) {
    return data.filter(function (datum) {
      return datum.series === x;
    });
  });
});

var getMax = (function (values$$1) {
  return values$$1.reduce(max, 0);
});

var reducer = function reducer(a, _ref) {
  var name = _ref.name,
      value = _ref.value;
  a[name] = a[name] ? [].concat(_toConsumableArray(a[name]), [value]) : [value];
  return a;
};
/**
 * Using an optional list of series names calculate the largest possible values
 * adding the values for the series names provided plus the rest of the values
 * present in the data
 *
 * @param {Array} data Chart data
 * @param {Array} seriesList List of series names whose values will be added to
 * calculate the largest possible value
 * @returns {Array} List of calculated values
 */


var getStackedMax = (function (data) {
  var seriesList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return compose(map(sum), values, reduce(reducer, {}), seriesList.length ? filter(function (_ref2) {
    var series = _ref2.series;
    return seriesList.includes(series);
  }) : identity)(data);
});

var getSeries = compose(uniq, map(prop('series')));

var getSize = (function (w1, h1, _ref, r) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;

  var _r$split = r.split(':'),
      _r$split2 = _slicedToArray(_r$split, 2),
      r1 = _r$split2[0],
      r2 = _r$split2[1];

  var w2 = w1 || WIDTH;
  var h2 = h1 || w2 / r1 * r2;

  if (w1 && h1) {
    return {
      width: w1 - left - right,
      height: h1 - top - bottom
    };
  }

  var width = w1 ? w2 : h2 / r2 * r1;
  var height = h1 ? h2 : w2 / r1 * r2;
  return {
    width: width - left - right,
    height: height - top - bottom
  };
});

var timeScale = function timeScale(data, width) {
  var barChart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var dataLength = getLength(data); // TODO: fix this fucking length

  var rangeWidth = width / dataLength / 1.8;
  return d3Scale.scaleTime().domain(d3Array.extent(data, function (_ref) {
    var name = _ref.name;
    return name;
  })).rangeRound(barChart ? [rangeWidth, width - rangeWidth] : [0, width]);
};

var bandScale = function bandScale(data, width) {
  return d3Scale.scaleBand().domain(data.map(function (_ref2) {
    var name = _ref2.name;
    return name;
  })).range([0, width]).padding(0.1);
};
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


var getXScale = (function (type$$1, data, width, barChart) {
  return cond([[equals(SCALE_TIME), always(timeScale(data, width, barChart))], [equals(SCALE_BAND), always(bandScale(data, width))], [(identity)]])(type$$1);
});

var linearScale = function linearScale(max$$1, height) {
  return d3Scale.scaleLinear().domain([0, max$$1]).range([height, 0]);
};

var getYScale = (function (type$$1, data, height) {
  return cond([[equals(SCALE_LINEAR), always(linearScale(data, height))], [(identity)]])(type$$1);
});

/**
 * Rotate the X axis labels to given degrees
 *
 * @param {String} id Unique chart id
 * @param {Number} deg Degrees to rotate
 */

var rotateXLabels = (function (id, deg) {
  var isNegative = deg < 0;
  d3Selection.selectAll("#".concat(id, " .axis-x .tick text")).attr('text-anchor', isNegative ? 'end' : 'start').attr('transform', "translate(".concat(isNegative ? -12 : 12, ", 6) rotate(").concat(deg, ")"));
});

var setLineType = (function (type$$1) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return cond([[equals('curveBundle'), function () {
    return LINE_TYPES[type$$1].beta(option);
  }], [equals('curveCardinalOpen'), function () {
    return LINE_TYPES[type$$1].tension(option);
  }], [equals('curveCatmullRomOpen'), function () {
    return LINE_TYPES[type$$1].alpha(option);
  }], [T, function () {
    return LINE_TYPES[type$$1];
  }]])(type$$1);
});

var setupData = (function (d) {
  var isDates = allDate(d.map(function (_ref) {
    var name = _ref.name;
    return name;
  }));
  var data = isDates ? d.map(function (x) {
    return _objectSpread({}, x, {
      name: new Date(x.name)
    });
  }) : d;
  return [isDates, data];
});

var toSingle = function toSingle(datum) {
  return compose(map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        series = _ref2[0],
        value = _ref2[1];

    return {
      name: datum.name,
      series: series,
      value: value
    };
  }), toPairs, omit(['name']))(datum);
};

compose(flatten, map(toSingle));

var toStackedForm = (function (data) {
  return compose(map(mergeAll), splitEvery(getSeries(data).length), map(function (_ref) {
    var name = _ref.name,
        series = _ref.series,
        value = _ref.value;
    return _defineProperty({
      name: name
    }, series, value);
  }))(data);
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  path {\n    stroke: transparent;\n  }\n\n  line {\n    stroke: ", ";\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Grid = styled.g.attrs(function () {
  return {
    className: 'grid'
  };
})(_templateObject$3(), palette.grey);

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  text-anchor: middle;\n  transform: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled.text.attrs(function (_ref) {
  var axis = _ref.axis,
      margin = _ref.margin,
      width = _ref.width,
      height = _ref.height;
  return {
    className: "".concat(axis, "-axis-label"),
    x: axis === 'x' ? width / 2 : 0 - height / 2,
    y: axis === 'x' ? height + margin.bottom : 0 - margin.left / 1.5
  };
})(_templateObject$4(), function (_ref2) {
  var axis = _ref2.axis;
  return axis === 'y' && 'rotate(-90deg)';
});

var LineDatum$$1 = function LineDatum$$1(_ref) {
  var chart = _ref.chart,
      color = _ref.color,
      d = _ref.d,
      data = _ref.data,
      onClick = _ref.onClick,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseLeave = _ref.onMouseLeave,
      withTooltip = _ref.tooltip,
      xScale = _ref.xScale,
      yScale = _ref.yScale;

  var _useState = React.useState({
    pageX: null,
    pageY: null,
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      setTooltip = _useState2[1];

  return React__default.createElement(React.Fragment, null, React__default.createElement(Path, {
    chart: chart,
    d: d,
    className: "line-path",
    strokeColor: color
  }), React__default.createElement("g", {
    className: "line-dot-group"
  }, data.map(function (_ref2, idx) {
    var name = _ref2.name,
        value = _ref2.value;
    return React__default.createElement(Circle, {
      key: idx,
      chart: "bar-line",
      strokeColor: color,
      cx: xScale(name) + xScale.bandwidth() / 2,
      cy: yScale(value),
      r: 4,
      onClick: onClick,
      onMouseEnter: function onMouseEnter(event) {
        setTooltip(function (state) {
          return _objectSpread({}, state, {
            show: true
          });
        });

        _onMouseEnter(event);
      },
      onMouseLeave: function onMouseLeave(event) {
        setTooltip(function (state) {
          return _objectSpread({}, state, {
            show: false
          });
        });

        _onMouseLeave(event);
      },
      onMouseMove: function onMouseMove(event) {
        event.persist();
        var pageX = event.pageX,
            pageY = event.pageY;
        setTooltip(function (state) {
          return _objectSpread({}, state, {
            name: name,
            pageX: pageX,
            pageY: pageY,
            value: value
          });
        });
      }
    });
  })), withTooltip && tooltip.show && reactDom.createPortal(React__default.createElement(Tooltip, {
    pageX: tooltip.pageX,
    pageY: tooltip.pageY
  }, React__default.createElement(TooltipItem, {
    color: color,
    name: tooltip.name,
    value: tooltip.value
  })), document.body));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var MainGroup = styled.g.attrs(function (_ref) {
  var _ref$margin = _ref.margin,
      left = _ref$margin.left,
      top = _ref$margin.top;
  return {
    className: 'silky-charts-container',
    transform: "translate(".concat(left, ", ").concat(top, ")")
  };
})(_templateObject$5());

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n  stroke: ", ";\n  stroke-width: ", ";\n  pointer-events: ", "\n\n  &:hover {\n    fill: ", ";\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Path = styled.path.attrs(function (_ref) {
  var chart = _ref.chart;
  return {
    className: chart
  };
})(_templateObject$6(), function (_ref2) {
  var fillColor = _ref2.fillColor;
  return fillColor || 'none';
}, function (_ref3) {
  var strokeColor = _ref3.strokeColor;
  return strokeColor || 'none';
}, LINE_STROKE_WIDTH, function (_ref4) {
  var chart = _ref4.chart;
  return chart === 'bar-line' && 'none';
}, function (_ref5) {
  var chart = _ref5.chart,
      fillColor = _ref5.fillColor;
  return chart === 'stacked-area' && getHoverColor(fillColor);
});

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n\n  &:hover {\n    fill: ", ";\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Rect = styled.rect.attrs(function (_ref) {
  var chart = _ref.chart,
      _ref$position = _ref.position,
      x = _ref$position.x,
      y = _ref$position.y,
      _ref$size = _ref.size,
      height = _ref$size.height,
      width = _ref$size.width;
  return {
    className: chart,
    height: height,
    width: width,
    x: x,
    y: y
  };
})(_templateObject$7(), function (_ref2) {
  var fillColor = _ref2.fillColor;
  return fillColor;
}, function (_ref3) {
  var fillColor = _ref3.fillColor;
  return getHoverColor(fillColor);
});

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.8em;\n  font-style: italic;\n  text-anchor: end;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Source = styled.text.attrs(function (_ref) {
  var height = _ref.height,
      margin = _ref.margin,
      width = _ref.width;
  return {
    className: "chart-source",
    x: width,
    y: height + margin.bottom / 1.5
  };
})(_templateObject$8());

var StackedBarDatum = function StackedBarDatum(_ref) {
  var data = _ref.data,
      height = _ref.height,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      series = _ref.series,
      theme = _ref.theme,
      tooltip = _ref.tooltip,
      width = _ref.width,
      x = _ref.x,
      y = _ref.y;
  return series.map(function (layer) {
    return React__default.createElement("g", {
      key: layer.index,
      className: "".concat(layer.key, "-layer")
    }, layer.map(function (datum, idx) {
      var value = last(datum) - head(datum);
      var name = datum.data.name;
      return React__default.createElement(BarDatum$$1, {
        key: idx,
        color: palette.themes[theme][layer.index],
        datum: {
          name: name,
          value: value
        },
        height: height - y(value),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        tooltip: tooltip,
        width: x.bandwidth(),
        x: x(name),
        y: y(last(datum))
      });
    }));
  });
};

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  height: ", "px;\n  width: ", "px;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var SVG = styled.svg.attrs(function (_ref) {
  var identifier = _ref.identifier;
  return {
    id: identifier,
    className: 'silky-charts'
  };
})(_templateObject$9(), function (_ref2) {
  var size = _ref2.size;
  return size.height;
}, function (_ref3) {
  var size = _ref3.size;
  return size.width;
});

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5em;\n  text-anchor: middle;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var Title = styled.text.attrs(function (_ref) {
  var height = _ref.height,
      margin = _ref.margin,
      width = _ref.width;
  return {
    className: "chart-title",
    x: width / 2,
    y: 0 - margin.top / 2
  };
})(_templateObject$a());

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);\n  padding: 10px;\n  pointer-events: none;\n  position: absolute;\n  text-align: center;\n  left: 0;\n  top: 0;\n  z-index: 10;\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div.attrs(function (_ref) {
  var pageX = _ref.pageX,
      pageY = _ref.pageY,
      width = _ref.width,
      height = _ref.height;
  return {
    className: 'silky-charts-tooltip',
    style: {
      left: "".concat(pageX - width / 2, "px"),
      top: "".concat(pageY - height - 10, "px")
    }
  };
})(_templateObject$b(), white, grey);

var Tooltip = function Tooltip(props) {
  var tooltipRef = React.useRef();

  var _useState = React.useState({
    width: 0,
    height: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  React.useEffect(function () {
    var _tooltipRef$current = tooltipRef.current,
        offsetWidth = _tooltipRef$current.offsetWidth,
        offsetHeight = _tooltipRef$current.offsetHeight;
    setSize({
      width: offsetWidth,
      height: offsetHeight
    });
  }, []);
  return React__default.createElement(Container, _extends({
    ref: tooltipRef
  }, size, props), props.children);
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.2em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 4px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  margin-right: 10px;\n  padding: 0 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled.div(_templateObject$c());
var Swatch = styled.span(_templateObject2(), function (_ref) {
  var swatchColor = _ref.swatchColor;
  return swatchColor || grey;
});
var Data = styled.div(_templateObject3());
var Name = styled.span(_templateObject4());
var Value = styled.span(_templateObject5());

var TooltipItem = function TooltipItem(_ref2) {
  var color = _ref2.color,
      _ref2$dateFormat = _ref2.dateFormat,
      name = _ref2.name,
      value = _ref2.value;
  return React__default.createElement(Container$1, null, React__default.createElement(Swatch, {
    swatchColor: color
  }), React__default.createElement(Data, null, React__default.createElement(Name, null, type(name) === 'Date' && isValid(name) ? name : name), React__default.createElement(Value, null, value)));
};

exports.getId = getId;
exports._slicedToArray = _slicedToArray;
exports.SIZE = SIZE;
exports.setupData = setupData;
exports.getMax = getMax;
exports.debounce = debounce$1;
exports.SVG = SVG;
exports.MainGroup = MainGroup;
exports.Grid = Grid;
exports.drawGrid = drawGrid;
exports.Title = Title;
exports.Label = Label;
exports.Source = Source;
exports.DataGroup = DataGroup;
exports.BarDatum = BarDatum$$1;
exports.getBaseColor = getBaseColor;
exports.Axis = Axis;
exports.rotateXLabels = rotateXLabels;
exports.TIME_FORMAT = TIME_FORMAT;
exports.MARGIN = MARGIN;
exports.THEME = THEME;
exports.ROTATION = ROTATION;
exports.TICKS = TICKS;
exports.SCALE_PADDING = SCALE_PADDING;
exports._objectSpread = _objectSpread;
exports.getSize = getSize;
exports.ASPECT_RATIO = ASPECT_RATIO;
exports.buildStack = buildStack;
exports.toStackedForm = toStackedForm;
exports.getStackedMax = getStackedMax;
exports.setLineType = setLineType;
exports.getLineDataForSeries = getLineDataForSeries;
exports.StackedBarDatum = StackedBarDatum;
exports.LineDatum = LineDatum$$1;
exports.palette = palette;
exports.LINE_TYPE = LINE_TYPE;
exports.SECONDARY_THEME = SECONDARY_THEME;
exports.appendStackedValues = appendStackedValues;
exports.getSeries = getSeries;
exports.getXScale = getXScale;
exports.SCALE_TIME = SCALE_TIME;
exports.SCALE_BAND = SCALE_BAND;
exports.getYScale = getYScale;
exports.SCALE_LINEAR = SCALE_LINEAR;
exports.bySeries = bySeries;
exports.classify = classify;
exports.Path = Path;
//# sourceMappingURL=chunk-7c4d8f21.js.map
