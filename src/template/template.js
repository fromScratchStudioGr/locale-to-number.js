/**
 * Uses the given parameter to create a testing string.
 * @param {string} test - Testing string. 
 * @returns {string} The testing string.
 */
function createTestingString(test) {
   if (test == null) {
      return 'Testing string.';
   } else {
      return `Testing string: ${test}.`;
   }
}

module.exports = createTestingString; 