const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
      });
    });
    //debe tirar error si no se ingresa una descripcion(summary)
    describe('No summary', () => {
      it('error when entering recipe without summary', (done) => {
        Recipe.create({ title: 'Milanesa a la napolitana'})
        .then(() => done(new Error('It requires a valid summary')))
          .catch(() => done());
      })
    })
    //debe tirar error si se ingresa un puntaje mayor a 100.0
    describe('Incorrect score', () => {
      it('error when entering a spoonacularScore greater than 100', (done) => {
        Recipe.create({ title: 'Milanesa a la napolitana',
                        spoonacularScore: 150.90})
        .then(() => done(new Error('It requires a valid spoonacularScore')))
          .catch(() => done());
      })
    })
  });
});
