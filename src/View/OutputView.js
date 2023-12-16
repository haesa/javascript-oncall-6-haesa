import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/index.js';

const OntputView = {
  printTable(table) {
    table.forEach((row) => Console.print(OUTPUT_MESSAGE.row(row)));
  },

  printErrorMessage(error) {
    Console.print(error.message);
  },
};

export default OntputView;
