const { expect } = require('chai');

const movieModel = {
  create: () => {}
}

describe('create new movie', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  describe('on success', async () => {
    it('returns an object', async () => {
      const response = await movieModel.create(payloadMovie);
      expect(response).to.be.a('object');
    });
    it('has the movie id property', async () => {
      const response = await movieModel.create(payloadMovie);
      expect(response).to.have.a.property('id');
    });
  });
});
