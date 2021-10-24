/**
 * The `localeMapper` object holds the mapping between
 * the locale id and the actual `thousands` and `decimal`
 * separators. For more information, please do check
 * https://github.com/fromScratchStudioGr/locale-to-number.js/wiki/Supported-Locales
 */
const localeMapper = {
  'en': {
    thousands: ',',
    decimal: '.',
  },
  'en-au': {
    thousands: ',',
    decimal: '.',
  },
  'en-ca': {
    thousands: ',',
    decimal: '.',
  },
  'en-gb': {
    thousands: ',',
    decimal: '.',
  },
  'el': {
    thousands: '.',
    decimal: ',',
  },
};

module.exports = localeMapper;
