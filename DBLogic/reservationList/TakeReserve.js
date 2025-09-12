const express = require('express');
const db = require('./db'); 
const app = express();

app.use(express.json()); 

// 예약 등록 API
app.post('/reservations', (req, res) => {
  const { name, id, date, numberOfcremation, deadPersonName } = req.body;

  // 필수값 체크
  if (!name || !id || !date || !numberOfcremation || !deadPersonName) {
    return res.status(400).json({ error: '모든 필드를 입력해주세요.' });
  }

  const query = `
    INSERT INTO reservationList (name, id, date, numberOfcremation, deadPersonName)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [name, id, date, numberOfcremation, deadPersonName], function (err) {
    if (err) {
      console.error('❌ 예약 삽입 실패:', err.message);
      return res.status(500).json({ error: 'DB 삽입 실패' });
      
      //예약 확정 후 user테이블에 추가
      const userQuery = `INSERT INTO user (name, id) VALUES (?, ?)`;
      db.run(userQuery, [name, id], function (userErr) {
        if (userErr) {
          console.error('❌ 사용자 삽입 실패:', userErr.message);
          // 사용자 삽입 실패는 치명적이지 않으므로 500 에러는 반환하지 않음
        } else {
          console.log(`¡¡사용자 등록 완료: ${id}`);
        }
    }
    console.log(`¡¡예약 등록 완료: ${id}`);
    res.status(201).json({ message: '예약이 등록되었습니다.', id });
  });
});
