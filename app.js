'use strict'

// app
let express = require('express');
let app = express();

// routes
let routes = require('./routes');

// error middleware
let morgan = require('morgan');
app.use(morgan('dev'));

// body-parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rendering
let nunjucks = require('nunjucks');
var env = nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

// get routes
app.use('/', routes);

// static routes
app.use(express.static(__dirname+'/public'));


// error routing





// server listen
const PORT = 1337;
app.listen(PORT, function () {
            console.log(`Server is listening on port ${PORT}!`);
        });



//export
module.exports = app;
