const getNumber = require('../get-number');

describe('Testing `getNumber` with `en` locale', () => {
  test(`It should return a positive decimal literal when given an 
  implicitly positive string representation`, () => {
    expect(getNumber('200', 'en')).toBe(200);
    expect(getNumber('200.45', 'en')).toBe(200.45);
    expect(getNumber('873.00', 'en')).toBe(873.0);
    expect(getNumber('2,050', 'en')).toBe(2050);
    expect(getNumber('2,000.30', 'en')).toBe(2000.3);
    expect(getNumber('2,342.0', 'en')).toBe(2342.0);
    expect(getNumber('20,000', 'en')).toBe(20000);
    expect(getNumber('20,000.34', 'en')).toBe(20000.34);
    expect(getNumber('200,000', 'en')).toBe(200000);
    expect(getNumber('2,000,000', 'en')).toBe(2000000);
    expect(getNumber('12,054,100.55', 'en')).toBe(12054100.55);
  });

  test(`It should return a positive decimal literal when given an 
  explicitly positive string representation`, () => {
    expect(getNumber('+200', 'en')).toBe(200);
    expect(getNumber('+200.45', 'en')).toBe(200.45);
    expect(getNumber('+873.00', 'en')).toBe(873.0);
    expect(getNumber('+2,050', 'en')).toBe(2050);
    expect(getNumber('+2,000.30', 'en')).toBe(2000.3);
    expect(getNumber('+2,342.0', 'en')).toBe(2342.0);
    expect(getNumber('+20,000', 'en')).toBe(20000);
    expect(getNumber('+20,000.34', 'en')).toBe(20000.34);
    expect(getNumber('+200,000', 'en')).toBe(200000);
    expect(getNumber('+2,000,000', 'en')).toBe(2000000);
    expect(getNumber('+12,054,100.55', 'en')).toBe(12054100.55);
  });

  test(`It should return a negative decimal literal when given a
  negative string representation`, () => {
    expect(getNumber('-200', 'en')).toBe(-200);
    expect(getNumber('-200.45', 'en')).toBe(-200.45);
    expect(getNumber('-873.00', 'en')).toBe(-873.0);
    expect(getNumber('-2,050', 'en')).toBe(-2050);
    expect(getNumber('-2,000.30', 'en')).toBe(-2000.3);
    expect(getNumber('-2,342.0', 'en')).toBe(-2342.0);
    expect(getNumber('-20,000', 'en')).toBe(-20000);
    expect(getNumber('-20,000.34', 'en')).toBe(-20000.34);
    expect(getNumber('-200,000', 'en')).toBe(-200000);
    expect(getNumber('-2,000,000', 'en')).toBe(-2000000);
    expect(getNumber('-12,054,100.55', 'en')).toBe(-12054100.55);
  });
});
