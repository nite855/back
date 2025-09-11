//SQLite 연결 페이지
//각 페이지별로 작성해야 하니, 한 페이지로 작성후 export로 외부로 내보내기

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./Database.db', (err) => {
  if (err) {
    console.error(' Failed to connect to the database:', err.message);
  } else {
    console.log('SQLite connected');
  }
});

module.exports = db;

