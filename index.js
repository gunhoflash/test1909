const express = require('express');
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
}, 60000);
