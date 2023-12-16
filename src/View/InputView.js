import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/index.js';

const InputView = {
  async readMonthDay() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.monthDay);
    InputValidator.monthDay(input);
    const [month, day] = input.split(',').trim((value) => value.trim());
    return [Number(month), day];
  },

  async readWorkSequence(message) {
    const input = await Console.readLineAsync(message);
    InputValidator.workSequence(input);
    return input.split(',').map((value) => value.trim());
  },
};

export default InputView;
