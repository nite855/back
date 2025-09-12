const express = require('express');  //express묘듈 가져오기
const db = require('../../db');  //sqlite 연결

const app = express(); //express 객체 생성

//관리자 로그인 api
app.get("/login", (req,res) => {
   
    const requester = req.query; //브라우저에서 요청자 정보(로그인 시도자) id,password받기
    b.all(`SELECT * FROM admin_user`, (err, rows) => {  
    if (err) return res.status(500).json({ error: err.message });  //table에러 확인

    // 조건에 맞는 관리자 찾기
    const matched = rows.find(admin => admin.id === id && admin.password === password);

    if (matched) {
        res.json({ message: '로그인 성공', admin: matched });
    } else {
        res.status(401).json({ error: '로그인 실패: 아이디 또는 비밀번호가 올바르지 않습니다.' });
    }
    });
});
      
