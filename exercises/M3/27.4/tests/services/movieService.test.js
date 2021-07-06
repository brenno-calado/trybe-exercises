const { expect } = require('chai');

const MovieService = { service: () => {} };

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
    it('returns an object', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.a('object');
    });
    it('returns movie id property', async () => {
      const response = await MovieService.create(payload);
      expect(response).to.have.a.property('id');
    })
  })
});
