// written by Savvas Petridis

var express = require( 'express' );
var morgan = require( 'morgan' );
var app = express();

app.use(morgan('dev'))

var server = app.listen(3000, function () 
{
	console.log('server listening')
})

app.get('/', function (req, res) 
{
  res.send('Welcome to the server!!')
})