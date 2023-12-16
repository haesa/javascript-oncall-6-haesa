const DAYS_INDEX = Object.freeze({
  월: 0,
  화: 1,
  수: 2,
  목: 3,
  금: 4,
  토: 5,
  일: 6,
});
const WEEKDAY = Object.freeze(['월', '화', '수', '목', '금']);
const WEEKS = Object.freeze(['월', '화', '수', '목', '금', '토', '일']);
const HOLIDAY = Object.freeze({
  1: [1],
  3: [1],
  5: [5],
  6: [6],
  8: [15],
  10: [3, 9],
  12: [25],
});

export { DAYS_INDEX, WEEKDAY, WEEKS, HOLIDAY };
