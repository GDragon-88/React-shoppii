const db = require("../utils/database.js");
const mysql = require("mysql2");

module.exports.getAllProduct = ()=>{
    let sql = "SELECT * FROM shoppii_schemas.tbl_product"
    return db.execute(sql)
}
