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