const sqlite3 = require('sqlite3').verbose();

// 기존 Database.db 파일 연결
const db = new sqlite3.Database('.DataBase/Database.db', (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.message);
    return;
  }
  console.log('Connected to the SQLite database.');
});

// 예시: reservation 테이블 전체 조회
db.all(`SELECT * FROM reservationList`, (err, rows) => {
  if (err) {
    console.error('Failed to fetch data:', err.message);
    return;
  }

  console.log('Reservation Records:');
  rows.forEach((row) => {
    console.log(row);
  });
});

// 연결 종료
db.close((err) => {
  if (err) {
    console.error('Failed to close the database:', err.message);
    return;
  }
  console.log('Database connection closed.');
});
