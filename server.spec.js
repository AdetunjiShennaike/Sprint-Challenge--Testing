const request = require('supertest');

const server = require('./server');
const route = '/api/games'

describe('server', () => {
  it('sets the environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('should return 200 OK', () => {
      // we return the promise
      return request(server)
        .get('/')
        .expect(200);
    });

    it('should return JSON using done callback', done => {
      // using the done callback
      request(server)
        .get('/')
        .then(res => {
          expect(res.type).toBe('text/html'); // Content-Type
          done();
        });
    });
  });

  describe('game route', () => {
    describe('get()', () => {      
      it('returns 200', async () => {
        // use the squad
        const res = await request(server).get(route);
        expect(res.status).toBe(200);
      });
      
      it('returns a list', async () => {
        const res = await request(server).get(route)
        expect(res.body.title).toHaveLength(3); 
      });
      
      it('return the second entry', async () => {
        const expected = { "System": "Sega", "Title": "Streets of Rage", "Year": 1990, "id": 2 };
        const game = await request(server).get(route)
        
        expect(game.body.title[1]).toEqual(expected);
        
      });
    })

    describe('post()', () => {
      it('should return 200 OK', () => {
        // we return the promise
        return request(server)
        .get(route)
        .expect(200);
      });
      
      it('using the squad (async/await)', async () => {
        // use the squad
        const res = await request(server).get(route);
        expect(res.status).toBe(200);
      });
      
      it('should return JSON using done callback', done => {
        // using the done callback
        request(server)
        .get(route)
        .then(res => {
          expect(res.type).toBe('application/json'); // Content-Type
          done();
        });
      });
      
      it('should return { api: "up" }', () => {
        const expected = { api: 'up' };
        return request(server)
        .get(route)
        .then(res => {
          expect(res.body).toEqual(expected);
        });
      });
    })

    describe('put()', () => {
      it('should return 200 OK', () => {
        // we return the promise
        return request(server)
        .get(route)
        .expect(200);
      });
      
      it('using the squad (async/await)', async () => {
        // use the squad
        const res = await request(server).get(route);
        expect(res.status).toBe(200);
      });
      
      it('should return JSON using done callback', done => {
        // using the done callback
        request(server)
        .get(route)
        .then(res => {
          expect(res.type).toBe('application/json'); // Content-Type
          done();
        });
      });
      
      it('should return { api: "up" }', () => {
        const expected = { api: 'up' };
        return request(server)
        .get(route)
        .then(res => {
          expect(res.body).toEqual(expected);
        });
      });
    })

    describe('delete()', () => {
      it('should return 200 OK', () => {
        // we return the promise
        return request(server)
        .get(route)
        .expect(200);
      });
      
      it('using the squad (async/await)', async () => {
        // use the squad
        const res = await request(server).get(route);
        expect(res.status).toBe(200);
      });
      
      it('should return JSON using done callback', done => {
        // using the done callback
        request(server)
        .get(route)
        .then(res => {
          expect(res.type).toBe('application/json'); // Content-Type
          done();
        });
      });
      
      it('should return { api: "up" }', () => {
        const expected = { api: 'up' };
        return request(server)
        .get(route)
        .then(res => {
          expect(res.body).toEqual(expected);
        });
      });
    })

  });
});
