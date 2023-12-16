import Day from '../Domain/Day.js';

const OUTPUT_MESSAGE = Object.freeze({
  row: ({ month, date, day, name }) =>
    `${month}월 ${date}일 ${day}${
      Day.isHoliday(month, date) ? '(휴일)' : ''
    } ${name}`,
});

export default OUTPUT_MESSAGE;
