
exports.up = function(knex) {
  return knex.schema.createTable('dirtbike', d => {
    d.increments('id')
    d.string('make')
    d.string('name')
    d.integer('size')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dirtbike')
}
