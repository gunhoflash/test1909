const express = require('express');
const request = require('request');
const app = express();

var server = require('http').createServer(app);
var port = process.env.PORT || 1909;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	console.log('/');
	res.render('index');
});

server.listen(port);
console.log(`listen now with port:${port}`);

let i = 0;
let intervalObj = setInterval(() => {
	console.log(`interviewing the interval ${i++}`);
	sendPOST();
}, 6000);

sendPOST = () => {
	request('https://test1909.herokuapp.com/selfRequest',
		function (error, response, body) {}
	);
};

app.get('/selfRequest', (req, res) => {
	console.log('/selfRequest');
	res.json({
		hello: 'world'
	});
});