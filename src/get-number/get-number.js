const localeMapper = require('../locale-mapper');
const { constructExtractionRegex, cleanNumberRepresentation } = require('../core/core');

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
    console.warn(`Locale: ${locale} is not supported`);
    return null;
  }
}

module.exports = getNumber;
