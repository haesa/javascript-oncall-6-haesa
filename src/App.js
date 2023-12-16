import { MONTH } from './constants/index.js';
import EmergencyDutyManager from './Domain/EmergencyDutyManager.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

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
    try {
      return await InputView.readMonthDay();
    } catch (error) {
      OutputView.printErrorMessage(error);
      const result = await this.readMonthDay();
      return result;
    }
  }

  async readWorkSequence() {
    try {
      const weekday = await InputView.readWeekdayWorkSequence();
      const holiday = await InputView.readHolidayWorkSequence();
      return { weekday, holiday };
    } catch (error) {
      OutputView.printErrorMessage(error);
      const result = await this.readWorkSequence();
      return result;
    }
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
