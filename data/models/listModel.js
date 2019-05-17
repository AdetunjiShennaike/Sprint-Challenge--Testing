const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('games');
}

function getById(id) {
  return db('games')
  .where('id', id)
  .first()
}

function insert(title) {
  return db('games')
  .insert( title )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function update(id, changes) {
  return db('games')
  .where({ id })
  .update( changes )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function remove(id) {
  return db('games')
  .where('id', id)
  .del()
}

