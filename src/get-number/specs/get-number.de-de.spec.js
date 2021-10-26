const getNumber = require('../get-number');
const testCaseGenerator = require('./test-case-generator');

beforeEach(() => {
  // Making sure the `console.error` implementation is empty
  // in order to avoid tests failing when a warning is logged.
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

describe('Testing `getNumber` with `de-DE` locale on positive numbers', () => {
  test(`(Manually) It should return a positive decimal literal when given an 
  implicitly positive string representation`, () => {
    expect(getNumber('0,0', 'de-DE')).toBeCloseTo(0.0, 20);
    expect(getNumber('0,45', 'de-DE')).toBeCloseTo(0.45, 20);
    expect(getNumber('0,3', 'de-DE')).toBeCloseTo(0.3, 20);
    expect(getNumber('0,243225', 'de-DE')).toBeCloseTo(0.243225, 20);
    expect(getNumber('200', 'de-DE')).toBeCloseTo(200, 20);
    expect(getNumber('200,45', 'de-DE')).toBeCloseTo(200.45, 20);
    expect(getNumber('873,00', 'de-DE')).toBeCloseTo(873.0, 20);
    expect(getNumber('2.050', 'de-DE')).toBeCloseTo(2050, 20);
    expect(getNumber('2.000,30', 'de-DE')).toBeCloseTo(2000.3, 20);
    expect(getNumber('2.342,0', 'de-DE')).toBeCloseTo(2342.0, 20);
    expect(getNumber('20.000', 'de-DE')).toBeCloseTo(20000, 20);
    expect(getNumber('20.000,34', 'de-DE')).toBeCloseTo(20000.34, 20);
    expect(getNumber('200.000', 'de-DE')).toBeCloseTo(200000, 20);
    expect(getNumber('2.000.000', 'de-DE')).toBeCloseTo(2000000, 20);
    expect(getNumber('12.054.100,55', 'de-DE')).toBeCloseTo(12054100.55, 20);
  });

  test(`(Manually) It should return a positive decimal literal when given an 
  explicitly positive string representation`, () => {
    expect(getNumber('+0,0', 'de-DE')).toBeCloseTo(0.0, 20);
    expect(getNumber('+0,45', 'de-DE')).toBeCloseTo(0.45, 20);
    expect(getNumber('+0,3', 'de-DE')).toBeCloseTo(0.3, 20);
    expect(getNumber('+0,243225', 'de-DE')).toBeCloseTo(0.243225, 20);
    expect(getNumber('+200', 'de-DE')).toBeCloseTo(200, 20);
    expect(getNumber('+200,45', 'de-DE')).toBeCloseTo(200.45, 20);
    expect(getNumber('+873,00', 'de-DE')).toBeCloseTo(873.0, 20);
    expect(getNumber('+2.050', 'de-DE')).toBeCloseTo(2050, 20);
    expect(getNumber('+2.000,30', 'de-DE')).toBeCloseTo(2000.3, 20);
    expect(getNumber('+2.342,0', 'de-DE')).toBeCloseTo(2342.0, 20);
    expect(getNumber('+20.000', 'de-DE')).toBeCloseTo(20000, 20);
    expect(getNumber('+20.000,34', 'de-DE')).toBeCloseTo(20000.34, 20);
    expect(getNumber('+200.000', 'de-DE')).toBeCloseTo(200000, 20);
    expect(getNumber('+2.000.000', 'de-DE')).toBeCloseTo(2000000, 20);
    expect(getNumber('+12.054.100,55', 'de-DE')).toBeCloseTo(12054100.55, 20);
  });

  test(`(Automatically)(Range: [0, 1]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 0, 0, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [1, 100]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 1, 100, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [100, 1.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 100, 1000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [1.000, 10.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 1000, 10000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [10.000, 100.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 10000, 100000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [100.000, 1.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 100000, 1000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [1.000.000, 10.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 1000000, 10000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [10.000.000, 100.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 10000000, 100000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [100.000.000, 1.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 100000000, 1000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [1.000.000.000, 10.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 1000000000, 10000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [10.000.000.000, 100.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 10000000000, 100000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [100.000.000.000, 1.000.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 100000000000, 1000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [1.000.000.000.000, 10.000.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 1000000000000, 10000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [10.000.000.000.000, 100.000.000.000.000]) It should return a possible decimal literal when given an
  implicitly positive string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 10000000000000, 100000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });
});

describe('Testing `getNumber` with `de-DE` locale on negative numbers', () => {
  test(`(Manually) It should return a negative decimal literal when given a
  negative string representation`, () => {
    expect(getNumber('-0,0', 'de-DE')).toBeCloseTo(-0.0, 20);
    expect(getNumber('-0,45', 'de-DE')).toBeCloseTo(-0.45, 20);
    expect(getNumber('-0,3', 'de-DE')).toBeCloseTo(-0.3, 20);
    expect(getNumber('-0,243225', 'de-DE')).toBeCloseTo(-0.243225, 20);
    expect(getNumber('-200', 'de-DE')).toBeCloseTo(-200, 20);
    expect(getNumber('-200,45', 'de-DE')).toBeCloseTo(-200.45, 20);
    expect(getNumber('-873,00', 'de-DE')).toBeCloseTo(-873.0, 20);
    expect(getNumber('-2.050', 'de-DE')).toBeCloseTo(-2050, 20);
    expect(getNumber('-2.000,30', 'de-DE')).toBeCloseTo(-2000.3, 20);
    expect(getNumber('-2.342,0', 'de-DE')).toBeCloseTo(-2342.0, 20);
    expect(getNumber('-20.000', 'de-DE')).toBeCloseTo(-20000, 20);
    expect(getNumber('-20.000,34', 'de-DE')).toBeCloseTo(-20000.34, 20);
    expect(getNumber('-200.000', 'de-DE')).toBeCloseTo(-200000, 20);
    expect(getNumber('-2.000.000', 'de-DE')).toBeCloseTo(-2000000, 20);
    expect(getNumber('-12.054.100,55', 'de-DE')).toBeCloseTo(-12054100.55, 20);
  });

  test(`(Automatically)(Range: [-1, 0]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', 0, -2, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-100, -1]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -100, -1, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-1.000, -100]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -1000, -100, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-10.000, -1.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -10000, -1000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-100.000, -10.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -100000, -10000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-1.000.000, -100.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -1000000, -100000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-10.000.000, -1.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -10000000, -1000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-100.000.000, -10.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -100000000, -10000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-1.000.000.000, -100.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -1000000000, -100000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-10.000.000.000, -1.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -10000000000, -1000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-100.000.000.000, -10.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -100000000000, -10000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-1.000.000.000.000, -100.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -1000000000000, -100000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });

  test(`(Automatically)(Range: [-10.000.000.000.000, -1.000.000.000.000]) It should return a possible decimal literal when given an
  negative string representation`, () => {
    const testCases = testCaseGenerator('de-DE', -10000000000000, -1000000000000, 1000);
    testCases.forEach((testCase) => {
      expect(getNumber(testCase.stringRepresentation, 'de-DE')).toBeCloseTo(testCase.groundTruth, 20);
    });
  });
});

describe('Testing `getNumber` with `de-DE` locale on invalid cases', () => {
  test(`(Manually) It should return 'null' when locale is not supported`, () => {
    expect(getNumber('120', 'unsupported-locale')).toBe(null);
  });

  test(`(Manually) It should return 'null' when the given number does not
  match the given locale`, () => {
    expect(getNumber('120,000.23', 'de-DE')).toBe(null);
    expect(getNumber('12 000.23', 'de-DE')).toBe(null);
    expect(getNumber("12'000,23", 'de-DE')).toBe(null);
  });
});