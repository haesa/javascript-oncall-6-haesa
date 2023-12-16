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
  ])(
    '총 근무자 수가 5명 아래거나 35명을 넘어가면 예외가 발생한다. (workers: %s)',
    (weekday, holiday) => {
      expect(() => InputValidator.numberOfWorkers(weekday, holiday)).toThrow(
        ERROR_MESSAGE.numberOfWorkers
      );
    }
  );
});
