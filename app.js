var express = require('express');
var app = express();
const bodyParser = require('body-parser');

var bookmarkrouter = require('./bookmark');
var tagrouter = require('./tags');
var connectionrouter = require('./connection');


app.use(bodyParser.json());


app.use('/bookmarks',bookmarkrouter);
app.use('/tags',tagrouter);
app.use('/connection',connectionrouter);


app.listen(3000);