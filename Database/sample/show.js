const db = require('../initdb'); // SQLite 연결

function printAdminUsers() {
  db.all(`SELECT * FROM admin_user`, (err, rows) => {
    if (err) return console.error('❌ admin_user 조회 실패:', err.message);
    console.log('\n📋 admin_user 테이블');
    rows.forEach((row) => console.log(row));
  });
}

function printReservationList() {
  db.all(`SELECT * FROM reservationList`, (err, rows) => {
    if (err) return console.error('❌ reservationList 조회 실패:', err.message);
    console.log('\n📋 reservationList 테이블');
    rows.forEach((row) => console.log(row));
  });
}

function printUsers() {
  db.all(`SELECT * FROM user`, (err, rows) => {
    if (err) return console.error('❌ user 조회 실패:', err.message);
    console.log('\n📋 user 테이블');
    rows.forEach((row) => console.log(row));
  });
}

// 실행
printAdminUsers();
printReservationList();
printUsers();