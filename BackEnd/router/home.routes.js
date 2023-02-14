const express = require("express");
const router = express.Router();
const {getAllCategory,
    getAllFlashSale,
    getAllShopMall,setSession} = require("../controllers/home.controller");




const {isAuth} = require("../midlewares/isAuth")
router.get('/category',getAllCategory);
router.get("/flashsale",getAllFlashSale)
router.get("/shopmall",getAllShopMall)
router.post("/" ,isAuth, setSession)
module.exports = router 



