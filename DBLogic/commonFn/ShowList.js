//table 이름 url로 받아서 해당 테이블 출력
const express = require('express');
const db = require('../../db'); 

const app = express();

function showList(tableName) {
  const query = `SELECT * FROM ?`;
  db.all(query, tableName, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: `${tableName} 데이터 개시 실패` });
    }
    res.json(rows); // JSON으로 결과 반환


  });
}

module.exports = showList