const db = require("../utils/database.js");
const mysql = require("mysql2");

module.exports.getCart = (user_id)=>{
    let sql = "SELECT * FROM shoppii_schemas.tbl_cart ,shoppii_schemas.tbl_product where tbl_cart.user_id = ? and tbl_product.id = tbl_cart.product_id ;"
    let value = [user_id]
    sql = mysql.format(sql,value)
    return db.execute(sql)
}
module.exports.updateTotalCart =(total,user,product_id)=>{
    let sql = "UPDATE `shoppii_schemas`.`tbl_cart` SET `total` = ? WHERE (`user_id` = ? ) and (`product_id` = ?);"
    let value =[total,user,product_id]
    sql = mysql.format(sql,value)
    return db.execute(sql) 
}   

module.exports.deleteOneCart =(user,product_id)=>{
    let sql = "DELETE FROM `shoppii_schemas`.`tbl_cart` WHERE (`user_id` = ?) and (`product_id` = ?)"
    let value =[user,product_id]
    sql = mysql.format(sql,value)
    return db.execute(sql) 
}
module.exports.addCart =(user,product_id,total)=>{
    let sql = "INSERT INTO `shoppii_schemas`.`tbl_cart` (`user_id`, `product_id`, `total`) VALUES (?, ?, ?);"
    let value =[user,product_id,total]
    sql = mysql.format(sql,value)
    return db.execute(sql) 
}
module.exports.getOneCart = (user_id,product_id)=>{
    let sql = "SELECT * FROM shoppii_schemas.tbl_cart where tbl_cart.user_id = ? and tbl_cart.product_id = ?;"
    let value =[user_id,product_id]
    sql = mysql.format(sql,value)
    return db.execute(sql) 
}
