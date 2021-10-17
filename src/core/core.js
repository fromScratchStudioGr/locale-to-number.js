const localeMapper = require('./locale-mapper');

/**
 * Constructions the regular expression that can be used to match
 * number which use the given thousands and decimal separators.
 * @param {string} thousandsSeparator - The thousands separator. 
 * @param {string} decimalSeparator - The decimal separator.
 * @returns {RegExp} The regular expression that matches number which
 * use the given thousands and decimal separators.
 */
function constructExtractionRegex(thousandsSeparator, decimalSeparator) {
   return new RegExp(`^([+|-])?[1-9]{1}[0-9]{0,2}(${thousandsSeparator}([0-9]{3}))*(${decimalSeparator}[0-9]+)?$`);
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
   if (numberRepresentation.match(regex)) {
      // Removing the `thousands` separator and making
      // sure the `decimal` separator is the `dot`.
      const cleanNumberRepresentation = numberRepresentation
         .replace(localeConfiguration.thousands, '').replace(localeConfiguration.decimal, '.');

      return cleanNumberRepresentation;
   } else {
      console.warn(`The number representation does match the given locale.`);
      return null;
   }
}

/**
 * Gets the actual decimal literal of the given number.
 * @param {string} numberRepresentation - The initial number representation.
 * @param {string} locale - The locale id in a string format.
 * @returns The number in a decimal literal format.
 */
function getNumber(numberRepresentation, locale) {
   if (localeMapper[locale] != null) {
      const localeConfiguration = localeMapper[locale];
      const regex = constructExtractionRegex(localeConfiguration.thousands, localeConfiguration.decimal);
      const cleanNumber = cleanNumberRepresentation(numberRepresentation, regex, localeConfiguration);

      return cleanNumber != null ? parseFloat(cleanNumber) : null;
   } else {
      console.error(`Locale: ${locale} is not supported`);
      return null;
   }
}

module.exports = {
   constructExtractionRegex,
   cleanNumberRepresentation,
   getNumber
};