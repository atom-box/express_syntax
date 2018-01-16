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
const PORT = process.env.PORT || 4002;

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
app.use(bodyParser.json() );
app.use('/beans/:beanName', (req, res, next)=> {
	 const beanName =req.params.beanName
} )
/* WOW -- app.use(SOME-URL!! )    */

app.get('/beans/', (req, res, next)=> {
	res.send(jellybeanBag);
	/*OOPS!  DON'T 'return' ANYTHING.*/
} );
// RETURNS ALL BEANS AS OBJECT

app.post('/beans/', (req, res, next)=> {
	const body = req.body;
	const beanName = body.name;
	if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0){
		return res.status(400).send('Extant!');
	}
	const numberOfBeans = Number(body.number) || 0;
	jellybeanBag[beanName] = {
		number: numberOfBeans;
	};
	res.send(jellybeanBag[beanName]);
} );

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
	console.log(`Listening on Port ${PORT}.`)
});