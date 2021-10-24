/**
 * Constructions the regular expression that can be used to match
 * number which use the given thousands and decimal separators.
 * @param {string} thousandsSeparator - The thousands separator.
 * @param {string} decimalSeparator - The decimal separator.
 * @param {boolean} indianNotation - Indicates if the Indian notation
 * must be used.
 * @returns {RegExp} The regular expression that matches number which
 * use the given thousands and decimal separators.
 */
function constructExtractionRegex(thousandsSeparator, decimalSeparator, indianNotation = false) {
  if (indianNotation) {
    return new RegExp(
      `^[+|-]?(([1-9]{1}[0-9]{0,1}${thousandsSeparator})+([0-9]{2}${thousandsSeparator})*[0-9]{3}|[1-9]{1}[0-9]{0,2}|0)(${decimalSeparator}[0-9]+)?$`
    );
  } else {
    return new RegExp(`^[+|-]?([1-9]{1}[0-9]{0,2}(${thousandsSeparator}[0-9]{3})*|0)(${decimalSeparator}[0-9]+)?$`);
  }
}

/**
 * Cleans the number representation in order to match
 * the decimal literal format.
 * @param {string} numberRepresentation - The initial number representation.
 * @param {RegExp} regex - The regular expression that corresponds to `numberRepresentation`'s locale.
 * @param {Object} localeConfiguration - The locale configuration.
 * @returns The representation of the number in a string format.
 */
function cleanNumberRepresentation(numberRepresentation, regex, localeConfiguration) {
  numberRepresentation = numberRepresentation.trim();
  if (numberRepresentation.match(regex)) {
    // Removing the `thousands` separator and making
    // sure the `decimal` separator is the `dot`.
    const cleanNumberRepresentation = numberRepresentation
      .replace(new RegExp(localeConfiguration.thousands, 'g'), '')
      .replace(new RegExp(localeConfiguration.decimal), '.');

    return cleanNumberRepresentation;
  } else {
    console.warn(`The number representation does match the given locale.`);
    return null;
  }
}

module.exports = {
  constructExtractionRegex,
  cleanNumberRepresentation,
};
