// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: '/localhost/day1'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}
