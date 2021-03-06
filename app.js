// written by Savvas Petridis

var express = require( 'express' );
var morgan = require( 'morgan' );
var swig = require( 'swig' );
var app = express();

swig.setDefaults({ cache: false });
app.use(morgan('dev'))
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var server = app.listen(3000, function () 
{
	console.log('server listening')
})

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

/*app.get('/', function (req, res) 
{
  res.render( 'index', {title: 'Hall of Fame', people: people} );
})*/

var routes = require('./routes/');
app.use('/', routes);

app.use(express.static(__dirname + '/public'));