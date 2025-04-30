const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');

const app = express();

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const routes = require('./routes');
app.use('/api', routes);
app.use(errorHandler);

module.exports = app;