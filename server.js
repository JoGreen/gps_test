var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip, function () {
  console.log('app listening on port '+port+'!');
});

app.get('/', function(req, res) {
	let file = path.join(__dirname, 'index.html');
	res.sendFile(file);
});