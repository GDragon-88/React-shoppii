const db = require("../utils/database.js");
const mysql = require("mysql2");

module.exports.getCategory = ()=>{
    let sql ='SELECT * FROM shoppii_schemas.tbl_category'
    return db.execute(sql)
}
module.exports.getFlashSale = ()=>{
    let sql = "SELECT * FROM shoppii_schemas.tbl_flash_sale;"
    return db.execute(sql)
}
module.exports.getShopMall =()=>{
    let sql = "SELECT * FROM shoppii_schemas.tbl_shop_mall"
    return db.execute(sql)
}