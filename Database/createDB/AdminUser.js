const db = require('../initdb');

function createAdminUserTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS admin_user (
      id VARCHAR(20) PRIMARY KEY,
      password VARCHAR(20) NOT NULL,
      facility VARCHAR(30)
    )`,
    (err) => {
      if (err) return console.error('❌ admin_user table creation failed:', err.message);
      console.log('✅ admin_user table created.');
    }
  );
}

module.exports = createAdminUserTable;

