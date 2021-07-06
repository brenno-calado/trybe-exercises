const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');

const movieModel = require('../../models/movieModel');

describe('create new movie', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(() => {
    const MOCK_ID = '604cb554311d68f491ba5781';
    const connectionMock = {
      db: async () => ({ collection: async () => ({ insertOne: async () => ({ insertedId: MOCK_ID }) }) }),
    };
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

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
