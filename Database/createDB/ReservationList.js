const db = require('../initdb');


function createReservationListTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS reservationList (
      name CHAR(10),
      id VARCHAR(20) PRIMARY KEY,
      date DATE,
      numberOfcremation INT,
      deadPersonName VARCHAR(10)
    )`,
    (err) => {
      if (err) return console.error('❌ reservationList table creation failed:', err.message);
      console.log('✅ reservationList table created.');
    }
  );
}

module.exports = createReservationListTable;