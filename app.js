var express = require('express');
var config = require('./config/config');

var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.HOST_PORT, function () {
    console.log('Server Running in IP - ', config.HOST_IP, 'PORT - ',  config.HOST_PORT);    
});