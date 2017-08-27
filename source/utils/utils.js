const Str = require('string');
const scanf = require('scanf')
const sscanf = require('scanf').sscanf;
var floatsArray = [];
var i = 0;
var floatsRow = [];

module.exports.parseStrForFloats = (dataStr, prefixes) => {
  var dataRows = dataStr.toString().split('\n');
  dataRows.forEach((row) => {
    floatsRow = [];
    prefixes.forEach((prefix) => {
      floatsRow.push(sscanf(row, `${prefix}%f`));
    });
    floatsArray.push(floatsRow);
  });
  return floatsArray;
};
