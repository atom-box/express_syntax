const express = require('express');
const app = express();
const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');
const PORT = process.env.PORT || 4001;
const expressionsRouter = express.Router();
app.use('/expressions', expressionsRouter); // ? LOWER ??

// Use static server to serve the Express Yourself Website
app.use(express.static('public'));
let expressions = [];
seedElements(expressions, 'expressions');
let animals = [];
seedElements(animals, 'animals');

// Get all expressions
expressionsRouter.get('', (req, res, next)=> {
  res.send(expressions);  
} )


// Get a single expression
app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

// Update an expression
