const express = require('express');
const app = express();
require('dotenv').config();
const corsMiddleware = require('.CorsConfig');
const PORT = process.env.PORT || 3000;

//swagger연결
const { swaggerUi, specs } = require('.Swagger.js');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

//cors설정, 다른 도메인에서 API 요청을 보낼 때, 백엔드가 그 요청을 허용해주는 역할
app.use(corsMiddleware);
app.use(express.json()); // JSON 파싱 미들웨어도 추가 추천

console.log('   corsMiddleware 타입:', typeof corsMiddleware);

// 로그인 라우터 불러오기
const loginRouter = require('./DBLogic/adminUser/Login');
console.log('  loginRouter 타입:', typeof loginRouter);

// 서버 IP 주소 출력
const os = require('os');
const networkInterfaces = os.networkInterfaces();

for (const name of Object.keys(networkInterfaces)) {
  for (const net of networkInterfaces[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      console.log(`✅ 서버 IP 주소: http://${net.address}:${PORT}`);
    }
  }
}

//라우터 연결, DBLogic 돌면서 모든 api호출, 
const fs = require('fs');
const path = require('path');

function loadRoutesFromDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);  //각 폴더의 하위 폴더를 찾아서 경로반환
    if (fs.statSync(fullPath).isDirectory()) {
      // 폴더면 재귀적으로 다시 탐색
      loadRoutesFromDir(fullPath);
    } else if (file.endsWith('.js')) {
      //.js파일이면 라우터 등록
      const route = require(fullPath);
      app.use('/', route);
      console.log(`✅ 라우터 등록: ${fullPath}`);
    }
  });
}

// DBLogic 폴더부터 시작
loadRoutesFromDir(path.join(__dirname, 'DBLogic'));



//서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});