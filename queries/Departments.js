const db = require("../db/connection");

//View all Departments
const sql = `SELECT * from departments`;
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

//Add Department