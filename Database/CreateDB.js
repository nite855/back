const createAdminUserTable = require('./createDB/AdminUser');
const createReservationListTable = require('./createDB/ReservationList');
const createUserTable = require('./createDB/User');
const createCrematoriumStatusTable = require('./createDB/Crematorium')



// 테이블 생성 실행
createAdminUserTable() 
createReservationListTable();
createUserTable();
createCrematoriumStatusTable();
