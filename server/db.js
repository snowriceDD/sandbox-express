const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://dcinside:dcinside@localhost:5432/dcinside')

module.exports = db;