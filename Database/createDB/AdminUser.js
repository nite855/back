const db = require('../initdb');

function createAdminUserTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS admin_user (
      id VARCHAR(20) PRIMARY KEY,  --관리자 ID
      password VARCHAR(20) NOT NULL, --관리자 PW
      facility VARCHAR(30)    --화장장이름 : 한 화장장에 관리자 여러명 고려하여 중복가능하게 함
    )`,
    (err) => {
      if (err) return console.error('❌ admin_user table creation failed:', err.message);
      console.log('✅ admin_user table created.');
    }
  );
}

module.exports = createAdminUserTable;

