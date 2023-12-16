import EmergencyDutyManager from '../src/Domain/EmergencyDutyManager';

describe('EmergencyDutyManager 클래스 테스트', () => {
  test('다음 근무자 데이터를 가져온다.', () => {
    const month = 5;
    const day = '화';
    const weekday = ['준팍'];
    const holiday = ['수아'];
    const manager = new EmergencyDutyManager(month, day, { weekday, holiday });
    expect(manager.getNextWorker()).toEqual({
      month: 5,
      date: 1,
      day: '화',
      name: '준팍',
    });
  });

  test('연속 2일 근무하는지 확인한다.', () => {
    const month = 5;
    const day = '월';
    const weekday = ['준팍'];
    const holiday = ['수아'];
    const manager = new EmergencyDutyManager(month, day, weekday, holiday);
    const workers = [];
    expect(manager.isConsecutiveWorkDays(workers)).toBe(false);
  });
});
