const express = require('express');
const request = require('request');
const app = express();
const D = {	result: 1 };

let intervalCount;
let intervalObj;
var server = require('http').createServer(app);
var port = process.env.PORT || 1909;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// /
app.get('/', (req, res) => {
	console.log('/');
	res.render('index');
});

// /selfRequest
app.get('/selfRequest', (req, res) => {
	console.log('/selfRequest');
	res.json(D);
});

// /start
app.get('/start', (req, res) => {
	console.log('/start');
	intervalCount = 0;
	intervalObj = setInterval(() => {
		intervalCount++;
		console.log(`Interval ${intervalCount}/180`);
		if (intervalCount == 180)
			clearInterval(intervalObj);
		else
			request('https://test1909.herokuapp.com/selfRequest',  (error, response, body) => {});
	}, 60000);
	res.json(D);
});

// /end
app.get('/end', (req, res) => {
	console.log('/end');
	clearInterval(intervalObj);
	res.json(D);
});

// start
server.listen(port);
console.log(`listen now with port:${port}`);