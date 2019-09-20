
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, Title: 'Chrono Trigger', Year: 1994, System: 'Super Nintendo' },
        {id: 2, Title: 'Streets of Rage', Year: 1990, System: 'Sega' },
        {id: 3, Title: 'Golden Eye 007', Year: 1999, System: 'N64' }
      ]);
    });
};
