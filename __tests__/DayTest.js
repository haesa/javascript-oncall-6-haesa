import Day from '../src/Domain/Day.js';

describe('Day 객체 테스트', () => {
  test('휴일이면 true, 아니면 false를 반환한다.', () => {
    expect(Day.isHoliday(5, 5)).toBe(true);
    expect(Day.isHoliday(5, 6)).toBe(false);
  });
});
