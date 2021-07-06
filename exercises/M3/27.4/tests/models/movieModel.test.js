const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const movieModel = require('../../models/movieModel');

describe('create new movie', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();
    const connectionMock = await MongoClient
      .connect(URLMock, { useNewUrlParser: true, useUnifiedTopology: true });
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
