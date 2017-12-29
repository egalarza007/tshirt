const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const expressMongoDb = require('express-mongo-db');
const config = require('./config')();
const routes = require('./routes');

const app = module.exports = express();

app.set('port', config.port);
app.use(expressMongoDb(config.db));
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
    extended: true
}));

//app.use(express.static(path.join(__dirname, 'build')));
app.use('/build',express.static(path.join(__dirname, 'build')));
app.use('/static',express.static(path.join(__dirname, 'build/static')));

app.use(routes);

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
  });