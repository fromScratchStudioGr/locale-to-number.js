/**
 * Returns a random integer in the range of [min, max].
 * @param {number} min - The minimum number of the range.
 * @param {number} max - The maximum number of the range.
 * @returns
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a random float in the range of [min, max].
 * @param {number} min - The minimum number of the range.
 * @param {number} max - The maximum number of the range.
 * @returns
 */
function randomFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

/**
 * Randomly generates valid test cases for numbers. Half of the
 * test cases are integers, while the rest of them are floats.
 * @param {string} locale - The desired locale.
 * @param {number} from - The lowest possible number for a test case.
 * @param {number} to - The highest possible number for a test case.
 * @param {number} numberOfTestCases - The number of test cases.
 * @returns
 */
function testCaseGenerator(locale, from, to, numberOfTestCases) {
  const testCases = [];
  let integer = true;
  for (let i = 0; i < numberOfTestCases; i++) {
    if (integer) {
      const groundTruth = randomInt(from, to);
      testCases.push({
        groundTruth,
        stringRepresentation: new Intl.NumberFormat(locale.toLowerCase(), {
          minimumFractionDigits: supportedNumberOfFractionDigits + 1,
          maximumFractionDigits: supportedNumberOfFractionDigits + 1,
        }).format(groundTruth),
      });
    } else {
      const groundTruth = randomFloat(from, to);
      testCases.push({
        groundTruth,
        stringRepresentation: new Intl.NumberFormat(locale.toLowerCase(), {
          minimumFractionDigits: supportedNumberOfFractionDigits + 1,
          maximumFractionDigits: supportedNumberOfFractionDigits + 1,
        }).format(groundTruth),
      });
    }
    integer = !integer;
  }

  return testCases;
}

// We, currently, support up to 19 fraction digits.
const supportedNumberOfFractionDigits = 19;

module.exports = { 
  testCaseGenerator,
  supportedNumberOfFractionDigits
};

