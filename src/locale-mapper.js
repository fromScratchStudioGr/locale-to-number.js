/**
 * The `localeMapper` object holds the mapping between
 * the locale id and the actual `thousands` and `decimal`
 * separators. For more information, please do check
 * https://github.com/fromScratchStudioGr/locale-to-number.js/wiki/Supported-Locales
 */
const localeMapper = {
  'en': {
    thousands: '\\,',
    decimal: '\\.'
  },
  'en-au': {
    thousands: '\\,',
    decimal: '\\.'
  },
  'en-ca': {
    thousands: '\\,',
    decimal: '\\.'
  },
  'en-gb': {
    thousands: '\\,',
    decimal: '\\.'
  },
  'en-ie': {
    thousands: '\\,',
    decimal: '\\.'
  },
  'en-in': {
    thousands: '\\,',
    decimal: '\\.',
    indianNotation: true
  },
  'en-nz': {
    thousands: '\\,',
    decimal: '\\.'
  },
  'en-us': {
    thousands: '\\,',
    decimal: '\\.'
  },
  'en-za': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]',
    decimal: '\\,'
  },
  'el': {
    thousands: '\\.',
    decimal: '\\,'
  },
};

module.exports = localeMapper;
