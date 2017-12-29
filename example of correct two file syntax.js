/**************************/
/*  Written by Codec.  
From lesson 3/7 Routers */
/**************************/


// main.js
const express = require('express');
const app = express();
const monstersRouter = require('./monsters.js');

app.use('/monsters', monstersRouter);



/**************************/
/*  A whole seperate file!  */
/**************************/

// monsters.js
const express = require('express');
const monstersRouter = express.Router();

const monsters = {
  '1': {
    name: 'godzilla',
    age: 250000000
  },
  '2': {
    Name: 'manticore',
    age: 21
  }
}

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id];
  If (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});

module.exports = monstersRouter;