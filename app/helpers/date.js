export {
  formatUpdateTime,
  getNumericDate,
  isEventRecent,
  getMonthsAndDaysBetween,
  humanizeDate,
};

const { LOCALE } = process.env;

const MONTHS_IN_YEAR = 12;

const datetimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const dateOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const roundDatetimeDown = (datetime, minutes) => {
  const minutesNow = datetime.getMinutes();
  const roundedMinutes = Math.floor(minutesNow / minutes) * minutes;
  datetime.setMinutes(roundedMinutes);
  datetime.setSeconds(0);
  datetime.setMilliseconds(0);

  return datetime;
};

const humanizeDate = (locale, options) => (datetime) =>
  datetime.toLocaleDateString(locale, options);

const MINUTES_TO_ROUND = 5;

const formatUpdateTime = (date) => {
  const datetime = roundDatetimeDown(new Date(date), MINUTES_TO_ROUND);
  const text = humanizeDate(LOCALE, datetimeOptions)(datetime);

  return {
    datetime,
    text,
  };
};

const getNumericDate = (value) => {
  const date = new Date(value);
  return humanizeDate(LOCALE, dateOptions)(date);
};

/**
 * Проверяет, произошло ли событие в течение указанного количества дней от сегодняшнего дня.
 *
 * @param {string} eventDate - Дата события в формате "YYYY-MM-DD".
 * @param {number} days - Количество дней для проверки.
 * @return {boolean} - Возвращает true, если событие произошло в течение указанных дней от текущей даты.
 */
const isEventRecent = (eventDate, days) => {
  const eventDateTime = new Date(eventDate).getTime();
  const now = new Date();
  const daysAgo = new Date(now.setDate(now.getDate() - days)).getTime();

  return eventDateTime >= daysAgo;
};

const getMonthsAndDaysBetween = (startDate, endDate) => {
  const getDateParts = (date) => ({
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  });

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const adjustDates = (start, end) =>
    start > end ? [end, start] : [start, end];

  const calculateMonthsDifference = (start, end) =>
    (end.year - start.year) * MONTHS_IN_YEAR + end.month - start.month;

  const calculateDaysDifference = (start, end) => {
    if (end.day >= start.day) {
      return end.day - start.day;
    }
    return daysInMonth(end.year, end.month - 1) - start.day + end.day;
  };

  const [start, end] = adjustDates(startDate, endDate).map(getDateParts);
  const monthsDifference = calculateMonthsDifference(start, end);
  const days = calculateDaysDifference(start, end, monthsDifference);
  const months = monthsDifference - (end.day < start.day ? 1 : 0);

  return { months, days };
};
