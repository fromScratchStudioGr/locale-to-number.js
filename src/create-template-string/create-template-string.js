/**
 * Uses the given parameter to create a template string.
 * @param {string} template - Template string.
 * @returns {string} The template string.
 */
function createTemplateString(template) {
  if (template == null) {
    return 'Template string.';
  } else {
    return `Template string: ${template}.`;
  }
}

module.exports = createTemplateString;
