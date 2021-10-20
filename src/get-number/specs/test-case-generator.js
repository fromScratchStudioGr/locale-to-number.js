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
 * Randomly generates valid test cases for integer numbers.
 * @param {string} locale - The desired locale. 
 * @param {number} from - The lowest possible number for a test case.
 * @param {number} to - The highest possible number for a test case.
 * @param {number} numberOfTestCases - The number of test cases.
 * @returns 
 */
function testCaseGenerator(locale, from, to, numberOfTestCases) {
  const testCases = [];
  for (let i = 0; i < numberOfTestCases; i++) {
    const groundTruth = randomInt(from, to);
    const stringRepresentation = new Intl.NumberFormat(locale).format(groundTruth);
    testCases.push({
      groundTruth,
      stringRepresentation
    });
  }

  return testCases;
}

module.exports = testCaseGenerator;