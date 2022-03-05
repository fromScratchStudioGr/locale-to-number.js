const getNumber = require('locale-to-number.js');

// English Locale.
console.log(getNumber('0.0', 'en'));
// Prints: 0

console.log(getNumber('0.45', 'en'));
// Prints: 0.45

console.log(getNumber('0.243225', 'en'));
// Prints: 0.243225

console.log(getNumber('2,050', 'en'));
// Prints: 2050

console.log(getNumber('+12,054,100.55', 'en'));
// Prints: 12054100.55

console.log(getNumber('-12054100.55', 'en'));
// Prints: -12054100.55

// Indian English Locale.
console.log(getNumber('2,342.0', 'en-IN'));
// Prints: 2342

console.log(getNumber('2,00,000', 'en-IN'));
// Prints: 200000

console.log(getNumber('+1,20,54,100.55', 'en-IN'));
// Prints: 12054100.55

// Greek Locale.
console.log(getNumber('+2.342,0', 'el'));
// Prints: 2342

console.log(getNumber('+2.000.000', 'el'));
// Prints: 2000000

console.log(getNumber('-12.054.100,55', 'el'));
// Prints: -12054100.55
