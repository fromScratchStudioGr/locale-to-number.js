/**
 * The `localeMapper` object holds the mapping between
 * the locale id and the actual `thousands` and `decimal`
 * separators. For more information, please do check
 * https://github.com/fromScratchStudioGr/locale-to-number.js/wiki/Supported-Locales
 */
const localeMapper = {
  'de': {
    thousands: '\\.',
    decimal: '\\,'
  },
  'de-at': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]',
    decimal: '\\,'
  },
  'de-ch': {
    thousands: "['΄’]",
    decimal: '\\.'
  },
  'de-de': {
    thousands: '\\.',
    decimal: '\\,'
  },
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
  'hi': {
    thousands: '\\,',
    decimal: '\\.',
    indianNotation: true
  },
  'hi-in': {
    thousands: '\\,',
    decimal: '\\.',
    indianNotation: true
  },
  'ta': {
    thousands: '\\,',
    decimal: '\\.',
    indianNotation: true
  },
  'ta-in': {
    thousands: '\\,',
    decimal: '\\.',
    indianNotation: true
  },
  'el': {
    thousands: '\\.',
    decimal: '\\,'
  },
};

module.exports = localeMapper;
