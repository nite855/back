//화장장 table 생성
const db = require('../../db'); //sqlite 연결   


function createCrematouriumTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS Crematourium (
      id int PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(30) NOT NULL,
      address VARCHAR(100), 
      numberOfcremation INT,
      worktime time
      `,    (err) => {
      if (err) return console.error('❌ admin_user table creation failed:', err.message);
      console.log('✅ admin_user table created.');
    }
  );
}

module.exports = createAdminUserTable;

