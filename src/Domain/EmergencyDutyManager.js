import { DAYS_INDEX, WEEKS } from '../constants/index.js';
import Day from './Day.js';

class EmergencyDutyManager {
  #month;
  #date = 1;
  #days;
  #weekdaySequence = [];
  #holidaySequence = [];

  constructor(month, day, { weekday, holiday }) {
    this.#month = month;
    this.#days = [
      ...WEEKS.slice(DAYS_INDEX[day]),
      ...WEEKS.slice(0, DAYS_INDEX[day]),
    ];
    this.#weekdaySequence = weekday;
    this.#holidaySequence = holiday;
  }

  pickWorker(workers) {
    let worker;
    while (true) {
      worker = this.getNextWorker();
      if (!this.isConsecutiveWorkDays(workers, worker)) {
        break;
      }
      this.changeWorkSequence();
    }

    this.completedWork();
    return worker;
  }

  getNextWorker() {
    if (
      Day.isHoliday(this.#month, this.#date) ||
      !Day.isWeekday(this.#days[0])
    ) {
      return {
        month: this.#month,
        date: this.#date,
        day: this.#days[0],
        name: this.#holidaySequence[0],
      };
    }

    return {
      month: this.#month,
      date: this.#date,
      day: this.#days[0],
      name: this.#weekdaySequence[0],
    };
  }

  isConsecutiveWorkDays(workers, worker) {
    return (
      workers.length !== 0 && workers[workers.length - 1].name === worker.name
    );
  }

  completedWork() {
    if (
      Day.isHoliday(this.#month, this.#date) ||
      !Day.isWeekday(this.#days[0])
    ) {
      const worker = this.#holidaySequence.shift();
      this.#holidaySequence = [...this.#holidaySequence, worker];
      this.nextDate();
      this.changeDays();
      return;
    }

    const worker = this.#weekdaySequence.shift();
    this.#weekdaySequence = [...this.#weekdaySequence, worker];
    this.nextDate();
    this.changeDays();
  }

  nextDate() {
    this.#date += 1;
  }

  changeDays() {
    const day = this.#days.shift();
    this.#days = [...this.#days, day];
  }

  changeWorkSequence(worker) {
    if (
      Day.isHoliday(this.#month, this.#date) ||
      !Day.isWeekday(this.#days[0])
    ) {
      this.#holidaySequence[0] = this.#holidaySequence[1];
      this.#holidaySequence[1] = worker.name;
      return;
    }

    this.#weekdaySequence[0] = this.#weekdaySequence[1];
    this.#weekdaySequence = temp;
  }
}

export default EmergencyDutyManager;
