# back
백 파일 업로드
====================
#데이터베이스
1. Admin_USer
   관라자 정보를 저장하는 db, id, facility를 저장하고 crematorium 화장장시설 정보를 가져옴
2. crematorium
   화장장시설 DB,2025 화장시설 csv에서 받아옴



# 📘 API 목록

## 🛠️ Admin

- `GET /admin/login`  
  > 관리자 로그인
  -쿼리로 `id`, `password`를 받아 로그인 처리
  -성공 시 JWT 토큰 반환

- `PUT /admin/{id}`  
  > 관리자 정보 수정
  - 관리자 비밀번호와 화장장이름 수정
  - 다른 관리자와 중복된 비밀번호는 사용 불가

- `DELETE /admin`
  > 관리자 삭제 (ID와 비밀번호 확인)
  - `id`, `password`를 JSON으로 입력 받아 관리자 계정 삭제
 
- **POST /signup**
  > 관리자 삭제 (ID와 비밀번호 확인)      
    - `id`, `password`를 JSON으로 받아 새로운 관리자 계정 등록
    - 중복된 아이디 또는 비밀번호는 허용되지 않음

## 🧍‍♂️ Default

- `GET /table/{tableName}`  
  > 지정한 테이블의 모든 데이터 조회
  - 다방면으로 프런트엔드 컴포넌트 구현에 사용가능


## 🏢 Crematorium

- `GET /facility`  
  > 화장터 이름으로 정보 조회
  - 허용된 테이블 이름을 경로로 입력하면 해당 테이블의 모든 데이터를 반환

---

## 📅 Reservation

- `DELETE /CancleReservations`  
  > 예약자 삭제
  -`id`, `name`을 JSON으로 입력 받아 예약 정보 삭제

- `POST /TakeReservations`  
  > 화장장 예약 등록
  - 예약자 정보 입력 후 예약 등록 및 사용자 정보 저장

  ### 주요 검증 로직
  - 예약자 ID 중복 확인
  - 시설 존재 여부 확인
  - 시설의 화장로 수 초과 여부 확인
  - 동일 시간·화장로 중복 예약 여부 확인

- `GET /checkReservations/{id}`  
  > 특정 예약자의 예약 목록 조회
  - 예약자 ID를 기반으로 예약 목록 조회

- `DELETE /clearReservations`  
  > 지난 예약 삭제
  -현재 시간을 기준으로 현재시간 초과시 삭제

- `PUT /ModifyReservations/{id}`  
  > 예약자 정보 수정
  - 예약자 ID를 기준으로 예약 정보 수정
---

## 🔮 Model

- `post /predict`  
  > 특정 월의 사망자 수 예측
  구현중

---

## 🔮 Predict

- `GET /predict?month={n}`  
  > 특정 월의 사망자 수 예측 (머신러닝 모델 기반)

