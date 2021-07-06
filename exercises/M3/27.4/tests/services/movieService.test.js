const { expect } = require('chai');
const sinon = require('sinon');
const MovieModel = require('../../models/movieModel');
const MovieService = require('../../services/movieService');

describe('create new movie', () => {
  describe('when payload is invalid', async () => {
    const payloadMovie = {};
    it('returns a boolean', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.a('boolean');
    });
    it('to be "false"', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });
  });

  describe('When payload is valid', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';

      sinon.stub(MovieModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MovieModel.create.restore();
    });

    it('returns an object', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.a('object');
    });
    it('returns movie id property', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.have.a.property('id');
    })
  })
});
