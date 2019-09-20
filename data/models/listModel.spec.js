const db = require('../dbConfig');
const Games = require('./listModel.js');

describe('List model', () => {
  afterAll(async () => {
    await db('games').truncate();
  });

  describe('get()', () => {
    it('provide game list', async () => {
      await Games.get();

      const titles = await db('games');

      expect(titles).toHaveLength(3);
    });

    it('provides individual game', async () => {
      const game = await Games.getById(1);
      expect(game.Title).toBe('Chrono Trigger');
      
    })
  });

  describe('insert()', () => {
      it('should insert provided title', async () => {
      let game = await Games.insert({ Title: 'DigDug', Year: 1988, System: 'Arcade' });
      expect(game.Title).toBe('DigDug');

      const list = await db('games');

      expect(list).toHaveLength(4);
    });
  });

  describe('update()', () => {
    it('should update the title', async () => {
      let update = await Games.update('4', {Title:'Pole Patrol'});
      expect(update.Title).toBe('Pole Patrol');
    })
  })

  describe('delete()', () => {
    it('should delete a title', async () => {
      await  Games.remove(2);
      let titles = await db('games');

      expect(titles).toHaveLength(3);
    })
  })
});
