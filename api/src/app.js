const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routesRecipes = require('./routes/routesRecipes.js');
const routesDiets = require('./routes/routesDiets.js');
const cors = require('cors');
const {
  URL_APP,
} = process.env;

require('./db.js');

const server = express();

server.name = 'API';

var corsOptions = {
  origin: `${URL_APP}`,
}
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors(corsOptions))


server.use('/recipes', routesRecipes);
server.use('/diets', routesDiets);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
