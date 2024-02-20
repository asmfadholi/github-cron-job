var fs = require('fs');

fs.readFile('./data.text', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = new Date();
  // test
  fs.writeFile('./data.text', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
