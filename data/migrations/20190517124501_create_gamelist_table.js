
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', tbl => {
    tbl.increments();

    tbl
    .string('Title', 128)
    .notNullable()
    .unique();

    tbl
    .integer('Year')
    .notNullable()

    tbl
    .string('System', 128)
    .notNullable()

  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
