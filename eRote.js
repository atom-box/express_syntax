/* Evan Genest sandbox for Express, Morgan, error-handlers, parsers  */
/*  January 15, 2018 */
/*  runs the EXPRESS part fine b/c weeks ago, installed */
/*  knew not the MORGAN, howerver */
/* Simple fix:  make sure a morgan file is downstream (in TEST/morgan/*)  */
/* then, from Bash type NPM INSTALL MORGAN --SAVE  */
/*  During installation it complained a little but later ran.   */


const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));

const jellybeanBag = {
	redPop: {
		number: 13
	},
	vanilla: {
		number: 6
	},
	northernSpy: {
		number: 0
	},
	cranberry: {
		number: 30
	},
	grape: {
		number: 50
	}
};

app.use(morgan('tiny'));
app.use(bodyParser);


app.get('/beans/', )
// RETURNS ALL BEANS AS OBJECT
app.post('/beans/')
// SOME EXISTING BEAN, ALTER THE NUMBER
app.get('/beans/:beanName',   )
// JUST BRING INFO ON MY FAVE BEAN
app.post('/beans/beanName/add',  )
// DEPOSIT SOME, BASED ON THE /add NUMBER
app.post('/beans/:beanName/remove')
// WITHDRAW SOME, BASED ON THE /remove nUMBER
app.delete('/beans/:beanName')
// DISCONTINUE THAT FLAVOR
app.listen( PORT, ()=> {
	console.log("hey we're the monkeys.")
});