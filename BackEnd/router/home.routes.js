const express = require("express");
const router = express.Router();
const {getAllCategory,getAllFlashSale,getAllShopMall} = require("../controllers/home.controller")
router.get('/category',getAllCategory);
router.get("/flashsale",getAllFlashSale)
router.get("/shopmall",getAllShopMall)
module.exports = router



