import { WEEKDAY, HOLIDAY } from '../constants/index.js';

const Day = {
  isHoliday(month, date) {
    return HOLIDAY[month].includes(date);
  },

  isWeekday(day) {
    return WEEKDAY.includes(day);
  },
};

export default Day;
