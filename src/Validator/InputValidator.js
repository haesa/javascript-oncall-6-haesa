import { ERROR_MESSAGE } from '../constants/index.js';
import { WEEKS } from '../constants/index.js';

const InputValidator = {
  monthDay(input) {
    const [month, day] = input.split(',').map((value) => value.trim());
    if (!/^[0-9]+$/.test(month)) {
      throw new Error(ERROR_MESSAGE.month);
    }

    if (Number(month) < 1 || Number(month) > 12) {
      throw new Error(ERROR_MESSAGE.month);
    }

    if (!WEEKS.includes(day)) {
      throw new Error(ERROR_MESSAGE.weekday);
    }
  },

  workSequence(input) {
    const workers = input.split(',').map((value) => value.trim());
    if (new Set(workers).size !== workers.length) {
      throw new Error(ERROR_MESSAGE.uniquName);
    }

    if (workers.some((worker) => worker.length < 1 || worker.length > 5)) {
      throw new Error(ERROR_MESSAGE.nameLength);
    }
  },

  numberOfWorkers(weekday, holiday) {
    const workers = new Set([...weekday, ...holiday]);
    if (workers.size < 5 || workers.size > 35) {
      throw new Error(ERROR_MESSAGE.numberOfWorkers);
    }
  },
};

export default InputValidator;
