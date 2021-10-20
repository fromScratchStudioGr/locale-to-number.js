const getNumber = require('../get-number');
const testCaseGenerator = require('./test-case-generator');

describe('Testing `getNumber` with `en` locale', () => {
  test(`[Manually] It should return a positive decimal literal when given an 
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

  test(`[Manually] It should return a positive decimal literal when given an 
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

  test(`[Manually] It should return a negative decimal literal when given a
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

  test(`[Automatically][Range: 1 - 100] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 1, 100, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 100 - 1.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 100, 1000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 1.000 - 10.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 1000, 10000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 10.000 - 100.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 10000, 100000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 100.000 - 1.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 100000, 1000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 1.000.000 - 10.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 1000000, 10000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 10.000.000 - 100.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 10000000, 100000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 100.000.000 - 1.000.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 100000000, 1000000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 1.000.000.000 - 10.000.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 1000000000, 10000000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 10.000.000.000 - 100.000.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 10000000000, 100000000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 100.000.000.000 - 1.000.000.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 100000000000, 1000000000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 1.000.000.000.000 - 10.000.000.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 1000000000000, 10000000000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });

  test(`[Automatically][Range: 10.000.000.000.000 - 100.000.000.000.000] It should return a possible decimal literal when given an
  implicitly positive integer string representation`, () => {
    const testCases = testCaseGenerator('en', 10000000000000, 100000000000000, 1000);
    testCases.forEach(testCase => {
      expect(getNumber(testCase.stringRepresentation, 'en')).toBe(testCase.groundTruth);
    });
  });
});
