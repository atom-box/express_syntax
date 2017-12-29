const express = require('express');
const { seedElements } = require('./utils');

const expressionsRouter = express.Router();


const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});

module.exports(expressionsRouter );
