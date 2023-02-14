const db = require("../utils/database.js");
const mysql = require("mysql2");

module.exports.addUser=(mail,password)=>{
    let sql = "INSERT INTO `shoppii_schemas`.`tbl_user` (`email`, `password`) VALUES ( ?, ?)";
    let value = [mail,password];
    sql = mysql.format(sql,value)
    return db.execute(sql)
}
module.exports.getAllUser =()=>{
    let sql = "SELECT * FROM shoppii_schemas.tbl_user;"
    return db.execute(sql)
}