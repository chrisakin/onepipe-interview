process.env.NODE_ENV = 'test';
const Cards = require('../models/cardModel');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
chai.should();


chai.use(chaiHttp);
describe('Cards', () => {
describe('/POST post a card details', () => {
    it('it should save a card details', (done) => {
      let card = new Cards(req.body);
      chai.request(server)
          .post('/api/cards/savecard')
          .send(card)
          .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('message').equal('Card saved successfully');
            done();
          });
        });
    });
});