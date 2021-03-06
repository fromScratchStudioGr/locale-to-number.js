const getNumber = require('../get-number');

beforeEach(() => {
  // Making sure the `console.error` implementation is empty
  // in order to avoid tests failing when a warning is logged.
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

describe('Testing `getNumber` on invalid cases', () => {
  test(`(Manually) It should return 'null' when locale is not supported`, () => {
    expect(getNumber('120', 'unsupported-locale')).toBe(null);
    expect(getNumber('120', 'gibberish')).toBe(null);
  });

  test(`(Manually) It should return 'null' when locale is not specified`, () => {
    expect(getNumber('120')).toBe(null);
    expect(getNumber('34.13')).toBe(null);
    expect(getNumber('34,13')).toBe(null);
    expect(getNumber('-34,13')).toBe(null);
    expect(getNumber('-34,13')).toBe(null);
    expect(getNumber('-340,130')).toBe(null);
  });
});
