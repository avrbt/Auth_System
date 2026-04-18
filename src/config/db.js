const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'auth_db',
  password: 'AviralBT@30',
  port: 5432,
});

module.exports = pool;