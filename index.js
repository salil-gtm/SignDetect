var express = require('express');
var shell = require('shelljs');
var app = express();

app.use(express.static('public'));

app.get('/start',  function(req, res){
	console.log('/start');
	shell.exec('python main.py');	
});

app.listen(8000, function(){
	console.log('On port 8000');
});
