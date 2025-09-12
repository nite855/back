//사용자 명단(이전에 아용했던 고객) 테이블 생성

const db = require('../initdb.js');

function createUserTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS user (
      name VARCHAR(10) PRIMARY KEY, --사용자 이름
      date DATE --사용자 등록일
    )`,
    //어떤걸 넣어야 할지 고민중
    (err) => {
      if (err) return console.error('❌ user table creation failed:', err.message);
      console.log('✅ user table created.');
    }
  );
}

module.exports = createUserTable;
