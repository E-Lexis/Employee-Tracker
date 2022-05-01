db = require('../db/connection');

//View All Roles
const sql = `SELECT * from roles`;
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

//Add a Role