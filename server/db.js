const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'Krishna@2004',
  database: 'hostel_management'
});

db.connect((err) => {
  if (err) {
    console.error('DB Error:', err);
  } else {
    console.log('MySQL Connected!');
  }
});

module.exports = db;