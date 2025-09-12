// apis경로에 glob로 실제 JS 파일 목록만 추출해 전달하지 않으면
// swagger-jsdoc가 디렉터리 경로를 파일처럼 읽으려다 EISDIR 에러 발생
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// glob로 DBLogic 하위 모든 .js 파일 절대경로 수집
let files = glob.sync(path.join(__dirname, 'DBLogic', '**', '*.js').replace(/\\/g, '/'));

// 혹시 모를 디렉터리 경로 제거
files = files.filter(f => fs.existsSync(f) && fs.statSync(f).isFile());

// 파일명만 출력 (.js 포함)
console.log('Swagger 대상 파일 목록:', files.map(f => path.basename(f)));

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'My API', version: '1.0.0' },
  },
  apis: files, // 디렉터리 없이 실제 파일만 전달
};

const specs = swaggerJsdoc(options);
module.exports = { swaggerUi, specs };
