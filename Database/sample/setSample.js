const db = require('../initdb'); // SQLite 연결

function insertAdminUserSamples() {
  db.run(`INSERT INTO admin_user VALUES ('admin01', 'pass123', 'Seoul Crematory')`);
  db.run(`INSERT INTO admin_user VALUES ('admin02', 'secure456', 'Busan Memorial')`);
  db.run(`INSERT INTO admin_user VALUES ('admin03', 'admin789', 'Daegu Peace Center')`);
  console.log('✅ admin_user 샘플 데이터 삽입 완료');
}

function insertReservationListSamples() {
  db.run(`INSERT INTO reservationList VALUES ('진우', 'resv001', '2025-09-12', 1, '김철수')`);
  db.run(`INSERT INTO reservationList VALUES ('민수', 'resv002', '2025-09-13', 2, '이영희')`);
  db.run(`INSERT INTO reservationList VALUES ('진우', 'resv003', '2025-09-14', 1, '박지민')`);
  console.log('✅ reservationList 샘플 데이터 삽입 완료');
}

function insertUserSamples() {
  db.run(`INSERT INTO user VALUES ('진우', '2025-09-12')`);
  db.run(`INSERT INTO user VALUES ('민수', '2025-09-13')`);
  db.run(`INSERT INTO user VALUES ('지훈', '2025-09-14')`);
  console.log('✅ user 샘플 데이터 삽입 완료');
}

// 실행
insertAdminUserSamples();
insertReservationListSamples();
insertUserSamples();