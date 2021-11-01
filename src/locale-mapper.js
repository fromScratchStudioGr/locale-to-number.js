/**
 * The `localeMapper` object holds the mapping between
 * the locale id and the actual `thousands` and `decimal`
 * separators. For more information, please do check
 * https://github.com/fromScratchStudioGr/locale-to-number.js/wiki/Supported-Locales
 */
const localeMapper = {
  'da': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'da-dk': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'de': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'de-at': {
    thousands: '[\\u202f\\u00a0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'de-ch': {
    thousands: "['΄’]?",
    decimal: '\\.',
  },
  'de-de': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'en': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'en-au': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'en-ca': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'en-gb': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'en-ie': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'en-in': {
    thousands: '\\,?',
    decimal: '\\.',
    indianNotation: true,
  },
  'en-nz': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'en-us': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'en-za': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'es': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'es-ar': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'es-cl': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'es-co': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'es-es': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'es-mx': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'es-us': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'fr': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'fr-be': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'fr-ca': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'fr-ch': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'fr-fr': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'hi': {
    thousands: '\\,?',
    decimal: '\\.',
    indianNotation: true,
  },
  'hi-in': {
    thousands: '\\,?',
    decimal: '\\.',
    indianNotation: true,
  },
  'pt': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'pt-br': {
    thousands: '\\.?',
    decimal: '\\,',
  },
  'pt-pt': {
    thousands: '[\\u202F\\u00A0\\u2000\\u2001\\u2003\\s]?',
    decimal: '\\,',
  },
  'ta': {
    thousands: '\\,?',
    decimal: '\\.',
    indianNotation: true,
  },
  'ta-in': {
    thousands: '\\,?',
    decimal: '\\.',
    indianNotation: true,
  },
  'ta-lk': {
    thousands: '\\,?',
    decimal: '\\.',
    indianNotation: true,
  },
  'el': {
    thousands: '\\.',
    decimal: '\\,',
  },
  'zh': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'zh-cn': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'zh-hk': {
    thousands: '\\,?',
    decimal: '\\.',
  },
  'zh-tw': {
    thousands: '\\,?',
    decimal: '\\.',
  },
};

module.exports = localeMapper;
