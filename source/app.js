const fs = require('fs');
const path = require('path');
const Str = require('string');
const utils = require('./utils/utils.js');

var appDir = path.dirname(require.main.filename);
var logsDir = path.normalize(appDir + '/../LogFiles');
var fields = ['Temperature', 'Pressure'];

fs.readdir(logsDir, (err, logFiles) => {
  logFiles.forEach((logFile) => {
    fs.readFile((path.join(logsDir, logFile)), (err, logContents) => {
      if (err) throw err;
      console.log(path.basename(logFile, '.txt'));
      var floatsArray = utils.parseStrForFloats(logContents, fields);
      console.log(floatsArray);
      console.log(utils.calcColAvgs(floatsArray));
    });
  });
});
