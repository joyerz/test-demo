import 'jest';
import { setHistory, navTo, getHistory } from '../helper';

describe('test history helper', () => {
  it('test setHistory & navTo', () => {
    const history = {
      record: [],
      push: function (hash) {
        this.record.push(hash);
      },
    };
    setHistory(history);

    expect(getHistory()).toEqual(history);

    navTo('/history');
    expect(getHistory().record.length).toBe(1);
    expect(getHistory().record[0]).toBe('/history');
  });
});
