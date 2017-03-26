
exports.seed = function(knex, Promise) {
  return knex('dirtbike').del()
    .then(function () {
      return knex('dirtbike').insert([
        {
          make: 'Suzuki',
          name: 'SX',
          size: 450
        },
        {
          make: 'Honda',
          name: 'CR',
          size: 250
        },
        {
          make: 'KTM',
          name: 'EX', 
          size: 500
        }
      ])
    })
}
