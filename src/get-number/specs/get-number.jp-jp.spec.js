const getNumber = require('../get-number');
const { testCaseGenerator, supportedNumberOfFractionDigits } = require('./test-case-generator');

beforeEach(() => {
  // Making sure the `console.error` implementation is empty
  // in order to avoid tests failing when a warning is logged.
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

describe('Testing `getNumber` with `jp-JP` locale on positive numbers', () => {
  test(`(Manually) It should return a positive decimal literal when given an 
  implicitly positive string representation`, () => {
    expect(getNumber('0.0', 'jp-JP')).toBeCloseTo(0.0, supportedNumberOfFractionDigits);
    expect(getNumber('0.45', 'jp-JP')).toBeCloseTo(0.45, supportedNumberOfFractionDigits);
    expect(getNumber('0.3', 'jp-JP')).toBeCloseTo(0.3, supportedNumberOfFractionDigits);
    expect(getNumber('0.243225', 'jp-JP')).toBeCloseTo(0.243225, supportedNumberOfFractionDigits);
    expect(getNumber('200', 'jp-JP')).toBeCloseTo(200, supportedNumberOfFractionDigits);
    expect(getNumber('200.45', 'jp-JP')).toBeCloseTo(200.45, supportedNumberOfFractionDigits);
    expect(getNumber('873.00', 'jp-JP')).toBeCloseTo(873.0, supportedNumberOfFractionDigits);
    expect(getNumber('2,050', 'jp-JP')).toBeCloseTo(2050, supportedNumberOfFractionDigits);
    expect(getNumber('2050', 'jp-JP')).toBeCloseTo(2050, supportedNumberOfFractionDigits);
    expect(getNumber('2,000.30', 'jp-JP')).toBeCloseTo(2000.3, supportedNumberOfFractionDigits);
    expect(getNumber('2000.30', 'jp-JP')).toBeCloseTo(2000.3, supportedNumberOfFractionDigits);
    expect(getNumber('2,342.0', 'jp-JP')).toBeCloseTo(2342.0, supportedNumberOfFractionDigits);
    expect(getNumber('2342.0', 'jp-JP')).toBeCloseTo(2342.0, supportedNumberOfFractionDigits);
    expect(getNumber('20,000', 'jp-JP')).toBeCloseTo(20000, supportedNumberOfFractionDigits);
    expect(getNumber('20000', 'jp-JP')).toBeCloseTo(20000, supportedNumberOfFractionDigits);
    expect(getNumber('20,000.34', 'jp-JP')).toBeCloseTo(20000.34, supportedNumberOfFractionDigits);
    expect(getNumber('20000.34', 'jp-JP')).toBeCloseTo(20000.34, supportedNumberOfFractionDigits);
    expect(getNumber('200,000', 'jp-JP')).toBeCloseTo(200000, supportedNumberOfFractionDigits);
    expect(getNumber('200000', 'jp-JP')).toBeCloseTo(200000, supportedNumberOfFractionDigits);
    expect(getNumber('2,000,000', 'jp-JP')).toBeCloseTo(2000000, supportedNumberOfFractionDigits);
    expect(getNumber('2000000', 'jp-JP')).toBeCloseTo(2000000, supportedNumberOfFractionDigits);
    expect(getNumber('12,054,100.55', 'jp-JP')).toBeCloseTo(12054100.55, supportedNumberOfFractionDigits);
    expect(getNumber('12054100.55', 'jp-JP')).toBeCloseTo(12054100.55, supportedNumberOfFractionDigits);
  });

  test(`(Manually) It should return a positive decimal literal when given an 
  explicitly positive string representation`, () => {
    expect(getNumber('+0.0', 'jp-JP')).toBeCloseTo(0.0, supportedNumberOfFractionDigits);
    expect(getNumber('+0.45', 'jp-JP')).toBeCloseTo(0.45, supportedNumberOfFractionDigits);
    expect(getNumber('+0.3', 'jp-JP')).toBeCloseTo(0.3, supportedNumberOfFractionDigits);
    expect(getNumber('+0.243225', 'jp-JP')).toBeCloseTo(0.243225, supportedNumberOfFractionDigits);
    expect(getNumber('+200', 'jp-JP')).toBeCloseTo(200, supportedNumberOfFractionDigits);
    expect(getNumber('+200.45', 'jp-JP')).toBeCloseTo(200.45, supportedNumberOfFractionDigits);
    expect(getNumber('+873.00', 'jp-JP')).toBeCloseTo(873.0, supportedNumberOfFractionDigits);
    expect(getNumber('+2,050', 'jp-JP')).toBeCloseTo(2050, supportedNumberOfFractionDigits);
    expect(getNumber('+2050', 'jp-JP')).toBeCloseTo(2050, supportedNumberOfFractionDigits);
    expect(getNumber('+2,000.30', 'jp-JP')).toBeCloseTo(2000.3, supportedNumberOfFractionDigits);
    expect(getNumber('+2000.30', 'jp-JP')).toBeCloseTo(2000.3, supportedNumberOfFractionDigits);
    expect(getNumber('+2,342.0', 'jp-JP')).toBeCloseTo(2342.0, supportedNumberOfFractionDigits);
    expect(getNumber('+2342.0', 'jp-JP')).toBeCloseTo(2342.0, supportedNumberOfFractionDigits);
    expect(getNumber('+20,000', 'jp-JP')).toBeCloseTo(20000, supportedNumberOfFractionDigits);
    expect(getNumber('+20000', 'jp-JP')).toBeCloseTo(20000, supportedNumberOfFractionDigits);
    expect(getNumber('+20,000.34', 'jp-JP')).toBeCloseTo(20000.34, supportedNumberOfFractionDigits);
    expect(getNumber('+20000.34', 'jp-JP')).toBeCloseTo(20000.34, supportedNumberOfFractionDigits);
    expect(getNumber('+200,000', 'jp-JP')).toBeCloseTo(200000, supportedNumberOfFractionDigits);
    expect(getNumber('+200000', 'jp-JP')).toBeCloseTo(200000, supportedNumberOfFractionDigits);
    expect(getNumber('+2,000,000', 'jp-JP')).toBeCloseTo(2000000, supportedNumberOfFractionDigits);
    expect(getNumber('+2000000', 'jp-JP')).toBeCloseTo(2000000, supportedNumberOfFractionDigits);
    expect(getNumber('+12,054,100.55', 'jp-JP')).toBeCloseTo(12054100.55, supportedNumberOfFractionDigits);
    expect(getNumber('+12054100.55', 'jp-JP')).toBeCloseTo(12054100.55, supportedNumberOfFractionDigits);
  });

  test(`(Automatically)(Range: [0, 1]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 0, 0, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [1, 100]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 1, 100, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [100, 1.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 100, 1000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [1.000, 10.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 1000, 10000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [10.000, 100.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 10000, 100000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [100.000, 1.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 100000, 1000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [1.000.000, 10.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 1000000, 10000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [10.000.000, 100.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 10000000, 100000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [100.000.000, 1.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 100000000, 1000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [1.000.000.000, 10.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 1000000000, 10000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [10.000.000.000, 100.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 10000000000, 100000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [100.000.000.000, 1.000.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 100000000000, 1000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [1.000.000.000.000, 10.000.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 1000000000000, 10000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [10.000.000.000.000, 100.000.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 10000000000000, 100000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });
});

describe('Testing `getNumber` with `jp-JP` locale on negative numbers', () => {
  test(`(Manually) It should return a negative decimal literal when given a
  negative string representation`, () => {
    expect(getNumber('-0.0', 'jp-JP')).toBeCloseTo(-0.0, supportedNumberOfFractionDigits);
    expect(getNumber('-0.45', 'jp-JP')).toBeCloseTo(-0.45, supportedNumberOfFractionDigits);
    expect(getNumber('-0.3', 'jp-JP')).toBeCloseTo(-0.3, supportedNumberOfFractionDigits);
    expect(getNumber('-0.243225', 'jp-JP')).toBeCloseTo(-0.243225, supportedNumberOfFractionDigits);
    expect(getNumber('-200', 'jp-JP')).toBeCloseTo(-200, supportedNumberOfFractionDigits);
    expect(getNumber('-200.45', 'jp-JP')).toBeCloseTo(-200.45, supportedNumberOfFractionDigits);
    expect(getNumber('-873.00', 'jp-JP')).toBeCloseTo(-873.0, supportedNumberOfFractionDigits);
    expect(getNumber('-2,050', 'jp-JP')).toBeCloseTo(-2050, supportedNumberOfFractionDigits);
    expect(getNumber('-2050', 'jp-JP')).toBeCloseTo(-2050, supportedNumberOfFractionDigits);
    expect(getNumber('-2,000.30', 'jp-JP')).toBeCloseTo(-2000.3, supportedNumberOfFractionDigits);
    expect(getNumber('-2000.30', 'jp-JP')).toBeCloseTo(-2000.3, supportedNumberOfFractionDigits);
    expect(getNumber('-2,342.0', 'jp-JP')).toBeCloseTo(-2342.0, supportedNumberOfFractionDigits);
    expect(getNumber('-2342.0', 'jp-JP')).toBeCloseTo(-2342.0, supportedNumberOfFractionDigits);
    expect(getNumber('-20,000', 'jp-JP')).toBeCloseTo(-20000, supportedNumberOfFractionDigits);
    expect(getNumber('-20000', 'jp-JP')).toBeCloseTo(-20000, supportedNumberOfFractionDigits);
    expect(getNumber('-20,000.34', 'jp-JP')).toBeCloseTo(-20000.34, supportedNumberOfFractionDigits);
    expect(getNumber('-20000.34', 'jp-JP')).toBeCloseTo(-20000.34, supportedNumberOfFractionDigits);
    expect(getNumber('-200,000', 'jp-JP')).toBeCloseTo(-200000, supportedNumberOfFractionDigits);
    expect(getNumber('-200000', 'jp-JP')).toBeCloseTo(-200000, supportedNumberOfFractionDigits);
    expect(getNumber('-2,000,000', 'jp-JP')).toBeCloseTo(-2000000, supportedNumberOfFractionDigits);
    expect(getNumber('-2000000', 'jp-JP')).toBeCloseTo(-2000000, supportedNumberOfFractionDigits);
    expect(getNumber('-12,054,100.55', 'jp-JP')).toBeCloseTo(-12054100.55, supportedNumberOfFractionDigits);
    expect(getNumber('-12054100.55', 'jp-JP')).toBeCloseTo(-12054100.55, supportedNumberOfFractionDigits);
  });

  test(`(Automatically)(Range: [-1, 0]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', 0, -2, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-100, -1]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -100, -1, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-1.000, -100]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -1000, -100, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-10.000, -1.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -10000, -1000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-100.000, -10.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -100000, -10000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-1.000.000, -100.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -1000000, -100000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-10.000.000, -1.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -10000000, -1000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-100.000.000, -10.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -100000000, -10000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-1.000.000.000, -100.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -1000000000, -100000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-10.000.000.000, -1.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -10000000000, -1000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-100.000.000.000, -10.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -100000000000, -10000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-1.000.000.000.000, -100.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -1000000000000, -100000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });

  test(`(Automatically)(Range: [-10.000.000.000.000, -1.000.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('jp-JP', -10000000000000, -1000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'jp-JP')).toBeCloseTo(testCase.groundTruth, supportedNumberOfFractionDigits);
    });
  });
});

describe('Testing `getNumber` with `jp-JP` locale on invalid cases', () => {
  test(`(Manually) It should return 'null' when the given number does not
  match the given locale`, () => {
    expect(getNumber('120.000,23', 'jp-JP')).toBe(null);
    expect(getNumber('12 000.23', 'jp-JP')).toBe(null);
    expect(getNumber("12'000,23", 'jp-JP')).toBe(null);
  });
});