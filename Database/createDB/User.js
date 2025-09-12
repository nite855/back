const db = require('../initdb');

function createUserTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS user (
      name VARCHAR(10) PRIMARY KEY,
      date DATE
    )`,
    (err) => {
      if (err) return console.error('❌ user table creation failed:', err.message);
      console.log('✅ user table created.');
    }
  );
}

module.exports = createUserTable;
