//const Str = require('string');
const scanf = require('scanf')
const sscanf = require('scanf').sscanf;
var floatsArray = [];
var floatsRow = [];

module.exports.parseStrForFloats = (dataStr, fields) => {
  // Receives a string (e.g. from a text file),extracts values of "fields"
  // and returns those values as a 2D array of floats.

  floatsArray = [];
  var dataRows = dataStr.toString().split('\n');
  dataRows.forEach((row) => {
    floatsRow = [];
    fields.forEach((field) => {

      // Parse out floating point values found after 'fieldname:\s'
      // and create row of those values.
      floatsRow.push(sscanf(row, `${field}: %f`));
    });

    // Put row of floating point values into 2D array
    floatsArray.push(floatsRow);
  });
  return floatsArray;
};

module.exports.calcColAvgs = (floatsArray) => {
  // Calculate avg. value of each column and return averages as a 1D array

  var numElementsToAvg = floatsArray.length;
  var numAvgs = floatsArray[0].length;
  var colAvgs = [];
  for (var j = 0; j < numAvgs; j++) {
    var colSum = 0;
    var colAvg = 0;
    for (var i = 0; i < numElementsToAvg ; i++) {
      colSum += floatsArray[i][j];
    }
    colAvg = colSum / numElementsToAvg;
    colAvgs.push(colAvg);
  }
  return colAvgs;
}
