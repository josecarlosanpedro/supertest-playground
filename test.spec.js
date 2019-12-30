const request = require('supertest');
describe('GET /posts', function() {
  it('responds with 200', function(done) {
    request('https://jsonplaceholder.typicode.com/')
    .get('posts')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('Create /post', () => {
    it('responds with 201', done => {
    request('https://jsonplaceholder.typicode.com/')
    .post('posts')
    .set('Accept', 'application/json')
    .send({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .expect('Content-Type', /json/)
    .expect(201, done);
  });
});