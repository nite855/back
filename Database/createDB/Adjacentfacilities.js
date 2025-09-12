//화장장시설 데이터
// 원래 인접시설만 할 생각이였으나 화장장db로 활용할 생각, 시설이름을 기반으로 정보 가져올것
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const csv = require('csv-parser');
function createcrematoryStatusTable() {
// 1. SQLite DB 연결 (파일 기반)
const db = require('../../initdb');

// 2. 테이블 생성
db.serialize(() => {
  db.run(`CREATE TABLE facilities (
    province TEXT NOT NULL,               -- 시도 → province
    district TEXT NOT NULL,               -- 시군구 → district
    facilityName TEXT PRIMARY KEY,        -- 시설명 → facilityName
    address TEXT NOT NULL,                -- 주소 → address
    phoneNumber TEXT NOT NULL,            -- 전화번호 → phoneNumber
    website TEXT,                         -- 홈페이지주소 → website
    parkingCapacity INTEGER,              -- 주차대수 → parkingCapacity
    ownershipType TEXT,                   -- 공사설구분 → ownershipType
    cremationUnits INTEGER,               -- 화장로수 → cremationUnits
    hasRestaurant TEXT,                   -- 식당 → hasRestaurant                     이후부터는 설치,미설치가 담김
    hasStore TEXT,                        -- 매점 → hasStore
    hasParkingLot TEXT,                   -- 주차장 → hasParkingLot
    hasWaitingRoom TEXT,                  -- 유족대기실 → hasWaitingRoom
    hasAccessibilityFacilities TEXT       -- 장애인편의시설 → hasAccessibilityFacilities
);`
);}
);


//3. CSV 읽어서 DB에 삽입
fs.createReadStream('./CrematoriumStatus.csv')
  .pipe(csv({
    mapHeaders: ({ header }) => header.trim().replace(/^\uFEFF/, '')   //컬럼 '시도'앞에 BOM(Zero Width No-Break Space, \uFEFF) 문자가 붙어 있어 제거
  }))
  .on('data', (row) => {
    if (!row['시도']) {
      console.error('시도 값이 없습니다:', row);
      return;
    }
    db.run(`INSERT INTO facilities (
        province, district, facilityName, address, phoneNumber,
        website, parkingCapacity, ownershipType, cremationUnits,
        hasRestaurant, hasStore, hasParkingLot, hasWaitingRoom, hasAccessibilityFacilities
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        row['시도'],
        row['시군구'],
        row['시설명'],
        row['주소'],
        row['전화번호'],
        row['홈페이지 주소'],
        parseInt(row['주차대수']) || 0,
        row['공-사설 구분'],
        parseInt(row['화장로수']) || 0,
        row['식당'],
        row['매점'],
        row['주차장'],
        row['유족대기실'],
        row['장애인편의시설']
      ]
    );
  })
  .on('end', () => {
    console.log('CSV 파일을 DB에 성공적으로 삽입했습니다.');
    db.close();
  });
}

module.exports = createcrematoryStatusTable;
