var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
};

var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

var getTimezoneOffsetInMilliseconds = dirtyDate => {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset =
    date.getTime() % MILLISECONDS_IN_MINUTE;

  return (
    baseTimezoneOffset * MILLISECONDS_IN_MINUTE +
    millisecondsPartOfTimezoneOffset
  );
};

var toInteger = dirtyNumber => {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
};

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var isLeapYearIndex = year =>
  year % 400 === 0 || (year % 4 === 0 && year % 100);

var validateDate = (year, month, date) =>
  !(
    month < 0 ||
    month > 11 ||
    date < 1 ||
    date > (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  );

var validateDayOfYearDate = (year, dayOfYear) =>
  !(dayOfYear < 1 || dayOfYear > (isLeapYearIndex(year) ? 366 : 365));

var validateWeekDate = (_year, week, day) =>
  !(week < 0 || week > 52 || day < 0 || day > 6);

var validateTime = (hours, minutes, seconds) =>
  !(
    seconds < 0 ||
    seconds >= 60 ||
    minutes < 0 ||
    minutes >= 60 ||
    hours < 0 ||
    hours >= 25
  );

var validateTimezone = (_hours, minutes) => !(minutes < 0 || minutes > 59);

var splitDateString = dateString => {
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
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
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

var parseYear = (dateString, additionalDigits) => {
  var regex = new RegExp(
    '^(?:(\\d{4}|[+-]\\d{' +
      (4 + additionalDigits) +
      '})|(\\d{2}|[+-]\\d{' +
      (2 + additionalDigits) +
      '})$)'
  );

  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) {
    return { year: null };
  }

  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);

  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  };
};

var parseDate = (dateString, year) => {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
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

    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
};

var parseDateUnit = value => (value ? parseInt(value) : 1);

var parseTime = timeString => {
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

  return (
    (hours % 24) * MILLISECONDS_IN_HOUR +
    minutes * MILLISECONDS_IN_MINUTE +
    seconds * 1000
  );
};

var parseTimeUnit = value =>
  (value && parseFloat(value.replace(',', '.'))) || 0;

var parseTimezone = timezoneString => {
  if (timezoneString === 'Z') return 0;

  var captures = timezoneString.match(timezoneRegex);

  if (!captures) {
    return 0;
  }

  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = (captures[3] && parseInt(captures[3])) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return (
    sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE)
  );
};

var dayOfISOWeekYear = (isoWeekYear, week, day) => {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week || 0) * 7 + (day || 0) + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
};

export default (argument, dirtyOptions) => {
  var options = dirtyOptions || {};

  var additionalDigits =
    options.additionalDigits == null
      ? DEFAULT_ADDITIONAL_DIGITS
      : toInteger(options.additionalDigits);
  if (
    additionalDigits !== 2 &&
    additionalDigits !== 1 &&
    additionalDigits !== 0
  ) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (
    !(
      typeof argument === 'string' ||
      Object.prototype.toString.call(argument) === '[object String]'
    )
  ) {
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

    offset = getTimezoneOffsetInMilliseconds(fullTimeDate);

    // Adjust time when it's coming from DST
    var fullTimeDateNextDay = new Date(fullTime);
    fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1);
    var offsetDiff =
      getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) - offset;
    if (offsetDiff > 0) {
      offset += offsetDiff;
    }
  }

  return new Date(timestamp + time + offset);
};
