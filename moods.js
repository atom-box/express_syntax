
////// BUILT WHILE READING CODECADEMY OFFICIAL CODE /////
/* 
	"Build Your Own APIs", Unit 4:
	"l e a r n e x p r e s s   r o u t e s"
	  Lesson 3 of 15

	  Requires Express.js, the common backend javascript thingie
	  If you need to install Express.js, this worked for me in Bash terminal:
	  npm install express --save

	  Dec 19, 2017: I'm keeping this as a server playpen and so I can 
	  retrieve syntax from it after the course is finished.
*/


const express = require('express');
const app = express();
//const { seedElements } = require('./utils');


// Serves Express Yourself website
app.use(express.static('public'));

const PORT =  3000;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
//seedElements(expressions, 'expressions');
expressions.shift('dour', 'ghetto-fabulous', 'smarmy', 'meh.');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  // console.log(req);
  res.send(expressions)
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
