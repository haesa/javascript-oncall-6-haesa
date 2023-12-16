import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/index.js';
import InputValidator from '../Validator/InputValidator.js';

const InputView = {
  async readMonthDay() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.monthDay);
    InputValidator.monthDay(input);
    const [month, day] = input.split(',').map((value) => value.trim());
    return [Number(month), day];
  },

  async readWeekdayWorkSequence() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.weekday);
    InputValidator.workSequence(input);
    return input.split(',').map((value) => value.trim());
  },

  async readHolidayWorkSequence() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.holiday);
    InputValidator.workSequence(input);
    return input.split(',').map((value) => value.trim());
  },
};

export default InputView;
