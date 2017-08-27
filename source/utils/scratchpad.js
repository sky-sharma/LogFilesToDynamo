var appDir = path.dirname(require.main.filename);
var logsDir = path.normalize(appDir + '/../LogFiles');


fs.readdir(logsDir, (err, items) => {
  items.forEach((element) => {
    fs.readFile((path.join(logsDir, element)), (err, data) => {
      if (err) throw err;
      dataArray.forEach((element) => {
        var temperature = sscanf(element, 'Temperature: %f');
        var pressure = sscanf(element, 'Pressure: %f');
        console.log(temperature + '\t' + pressure);
      })
    });
  });
});
