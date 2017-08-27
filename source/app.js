const fs = require('fs');
const path = require('path');
const Str = require('string');
const utils = require('./utils/utils.js');

var appDir = path.dirname(require.main.filename);
var logsDir = path.normalize(appDir + '/../LogFiles');
var parsingPrefixes = ['Temperature: ', 'Pressure: '];

fs.readdir(logsDir, (err, logFiles) => {
  logFiles.forEach((logFile) => {
    fs.readFile((path.join(logsDir, logFile)), (err, logContents) => {
      if (err) throw err;
      console.log(utils.parseStrForFloats(logContents, parsingPrefixes));
    });
  });
});
