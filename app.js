////// BUILT WHILE READING CODECADEMY OFFICIAL CODE /////
/* 
  "Build Your Own APIs", Unit 4:
  "l e a r n e x p r e s s   r o u t e s"
    Lesson 14 of 15
    
    I only wrote the part after Line 90;

    Me:   Evan Genest  github:  atom-box   twitter: mistergenest  email: genest dot 1 at osu dot edu

    This is a sort of mini-project at the end of the five hour lesson 'How to Write Routes in Express.js'

    My to do list is at the bottom.

    This requires Express.js, the common backend javascript thingie
    If you need to install Express.js, this worked for me in Bash terminal:
    npm install express --save

    To run this code, from BASH TERMINAL:      node app.js  

    Dec 22, 2017: I pulled this out of the tiny Coudecademy cloud-browser  environment.
    Why: so I can use my larger IDE and so I can check details of its dependencies.
    Prediction:  This will probably take all morning to write.   
*/

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

app.delete('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
});


/*
          I   N   S   T   R   U  C   T   I   O   N   S    
1.
In your app.js file, Create a GET /animals route to return an array of all animals.
2.
Create a GET /animals/:id route to respond with a single animal.
3.
Create a PUT /animals/:id route to update an animal in animals and send back the updated animal. 
4.
Create a POST /animals route to add new animals to the animals and respond with the new animal.
5.
Create a DELETE /animals/:id route to delete animals by ID. */

