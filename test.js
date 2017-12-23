console.log = () => {};
//
const rewire = require('rewire');
const expect = require('chai').expect;
const request = require('supertest');

describe('', function() {
  it('', function(done) {
    process.env.PORT = 4001; // port 8000
    const appModule = rewire('./app.js');
    const app = appModule.__get__('app');
    const expressions = appModule.__get__('expressions');
    const invalidExpression = {name: 'test'};
    const validExpression = {name: 'testGood', emoji: 'test'};
    let originalExpressions;
    request(app)
    .post('/expressions')
    .query(validExpression)
    .then((response) => {
      const lastCreated = expressions[expressions.length - 1];
      expect(response.body, 'Did you send back a single expression object instead of the whole array?').to.not.be.an.instanceOf(Array);
      expect(response.status, 'Did you send a 201 response from the POST /expressions route?').to.equal(201);
      let validPlusId = Object.assign(validExpression, {id: response.body.id});
      expect(response.body, 'Did you send back the new expression?').to.deep.equal(validPlusId);
      const validFromDb = expressions.find((element) => {
        return element.id === Number(response.body.id);
      });
      expect(response.body, 'Did you add the object created by `createElement` to the `expressions` array?').to.deep.equal(validFromDb);
    })
    .then(() => {
      originalExpressions = Array.from(expressions);
      return request(app)
      .post('/expressions')
      .send(invalidExpression);
    })
    .then((response) => {
      expect(response.status, 'Your POST route should send back a 400 response on request that causes `createElement` to return `false`.').to.equal(400);
      expect(expressions, 'A POST /expressions should not alter update any expressions on a request with invalid input.').to.deep.equal(originalExpressions);
      done();
    })
    .catch(done);
  });
});


