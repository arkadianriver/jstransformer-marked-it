'use strict'
const markedIt = require('marked-it-core');

exports.name = 'marked-it';
exports.outputFormat = 'html';
exports.inputFormats = ['md', 'markdown'];
exports.render = function (str, options) {
  // ignore options
  const result = markedIt.generate(str);
  return result.html.text;
}