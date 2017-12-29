const path = require('path');

 exports.index = function (req, res) {
  res.sendfile('build/index.html');
 };
