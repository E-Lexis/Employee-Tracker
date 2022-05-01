db = require('../db/connection');

//View all Employees
const sql = `SELECT * from employees`;
db.query(sql, (err, rows) => {
    if(err) {
        res.status(500).json({ error: err.message});
        return
    }
    res.json({
        message: 'success',
        data: rows
    });
});

//Add Employee

//Update Employee