const express = require('express');
const https = require('https');
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

	const data = JSON.stringify({
		hello: 'world'
	});

	const options = {
		hostname: 'http://test1909.herokuapp.com',
		port: 443,
		path: '/selfRequest',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length
		}
	};

	const req = https.request(options, (res) => {
		console.log(`statusCode: ${res.statusCode}`)
		res.on('data', process.stdout.write);
	});

	req.on('error', console.error);
	req.write(data);
	req.end();
};

app.post('/selfRequest', (req, res) => {
	console.log('/selfRequest');
	console.log(req.body);
	res.json({
		hello: 'world'
	});
});