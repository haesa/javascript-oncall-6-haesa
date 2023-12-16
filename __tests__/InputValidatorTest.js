import InputValidator from '../src/Validator/InputValidator';
import { ERROR_MESSAGE } from '../src/constants';

describe('InputValidator 객체 테스트', () => {
  test.each([['ㅁ,월'], ['13,월']])(
    '달은 1과 12 사이의 숫자를 입력하지 않으면 예외가 발생한다. (input: %s)',
    (input) => {
      expect(() => InputValidator.monthDay(input)).toThrow(ERROR_MESSAGE.month);
    }
  );

  test('요일은 월, 화, 수, 목, 금, 토, 일 중 하나로 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => InputValidator.monthDay('1,월요일')).toThrow(
      ERROR_MESSAGE.weekday
    );
  });

  test('근무자 닉네임이 중복되면 예외가 발생한다.', () => {
    expect(() =>
      InputValidator.workSequence('수아,수아,글로,고니,도밥,준팍')
    ).toThrow(ERROR_MESSAGE.uniquName);
  });

  test('근무자 닉네임이 없거나 5자가 넘어가면 예외가 발생한다.', () => {
    expect(() =>
      InputValidator.workSequence('수아글로리아,수아,글로,고니,도밥,준팍')
    ).toThrow(ERROR_MESSAGE.nameLength);
  });

  test.each([
    [
      ['수아', '글로'],
      ['고니', '도밥'],
    ],
    [
      [
        '허브,쥬니,말랑,라온,헤나,우코,에단,수달,파워,히이로,마코,슬링키,모디,연어,깃짱,리오,고니,박스터,달리,조이,노아이즈,도이,도치,홍고,스캇,폴로,해시,로지,첵스,아이크,우가,푸만능,애쉬,로이스,오션',
      ],
      [
        '토마토,오션,로이스,애쉬,푸만능,우가,아이크,첵스,로지,해시,폴로,스캇,홍고,도치,도이,노아이즈,조이,달리,박스터,고니,리오,깃짱,연어,모디,슬링키,마코,히이로,파워,수달,에단,우코,헤나,라온,말랑,쥬니,허브',
      ],
    ],
  ])(
    '총 근무자 수가 5명 아래거나 35명을 넘어가면 예외가 발생한다. (workers: %s)',
    (weekday, holiday) => {
      expect(() => InputValidator.numberOfWorkers(weekday, holiday)).toThrow(
        ERROR_MESSAGE.numberOfWorkers
      );
    }
  );
});
