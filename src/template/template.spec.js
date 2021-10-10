const createTestingString = require('./template');

test('Template testing with no argument.', () => {
   expect(createTestingString()).toBe('Testing string.')
});

test('Template testing with argument.', () => {
   expect(createTestingString('test')).toBe('Testing string: test.');
   expect(createTestingString('another test')).toBe('Testing string: another test.');
   expect(createTestingString('final test')).toBe('Testing string: final test.');
});