import { MONTH } from './constants/index.js';
import EmergencyDutyManager from './Domain/EmergencyDutyManager.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import repeatAsyncFunction from './utils/repeat.js';

class App {
  #month;
  #day;
  #sequence;
  #workers = [];

  async run() {
    const [month, day] = await this.readMonthDay();
    this.#month = month;
    this.#day = day;
    this.#sequence = await this.readWorkSequence();
    this.positionWorker();
    this.printTable();
  }

  async readMonthDay() {
    const callback = async () => {
      const result = await InputView.readMonthDay();
      return result;
    };
    return await repeatAsyncFunction(callback);
  }

  async readWorkSequence() {
    const callback = async () => {
      const weekday = await InputView.readWeekdayWorkSequence();
      const holiday = await InputView.readHolidayWorkSequence();
      return { weekday, holiday };
    };
    return await repeatAsyncFunction(callback);
  }

  positionWorker() {
    const manager = new EmergencyDutyManager(
      this.#month,
      this.#day,
      this.#sequence
    );

    for (let date = 1; date <= MONTH[this.#month]; date += 1) {
      const worker = manager.pickWorker(this.#workers);
      this.#workers.push(worker);
    }
  }

  printTable() {
    OutputView.printTable(this.#workers);
  }
}

export default App;
