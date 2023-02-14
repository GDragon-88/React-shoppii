const mysql = require("mysql2");


let pool = mysql.createPool({
    host:"localhost",
    user:'root',
    password:"chien2811",
    database:'shoppii_schemas',
})
let db = pool.promise();
module.exports = db;