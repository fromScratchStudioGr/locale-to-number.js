const createTemplateString = require('./create-template-string');

test('Template testing with no argument.', () => {
   expect(createTemplateString()).toBe('Template string.')
});

test('Template testing with argument.', () => {
   expect(createTemplateString('test')).toBe('Template string: test.');
   expect(createTemplateString('another test')).toBe('Template string: another test.');
   expect(createTemplateString('final test')).toBe('Template string: final test.');
});