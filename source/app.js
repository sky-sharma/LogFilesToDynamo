const fs = require('fs');
const path = require('path');
const Str = require('string');
const utils = require('./utils/utils.js');
const aws = require('aws-sdk');

var appDir = path.dirname(require.main.filename);
var logsDir = path.normalize(appDir + '/../LogFiles');
var fields = ['Temperature', 'Pressure'];
var s3 = new aws.S3();

var params = {
  Bucket: 'indie-log-files' /* required */};

s3.listObjects(params, function(err, data) {
  // List files in Bucket

  if (err) console.log(err, err.stack); // an error occurred
  else
  {
    var logFiles = data.Contents;
    logFiles.forEach((logFile) => {
      // Go through files in Bucket one by one

      var logFileName = logFile.Key;
      params.Key = logFileName;
      // Get Log File Name

      s3.getObject((params), (err, fileContents) => {
        // Read contents of fileContents

      if (err) throw err;
      var logContents = fileContents.Body;
      var floatsArray = utils.parseStrForFloats(logContents, fields);
      console.log(path.basename(logFileName, '.txt'));
      console.log(utils.calcColAvgs(floatsArray));
    });
  });
  };
});

/*
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
*/
