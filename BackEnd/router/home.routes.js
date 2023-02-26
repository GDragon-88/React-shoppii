const express = require("express");
const router = express.Router();
const {getAllCategory,
    getAllFlashSale,
    getAllShopMall,setSession,getAllProduct,
    getDetailProduct,
    addProductToCart
} = require("../controllers/home.controller");




const {isAuth} = require("../midlewares/isAuth")
router.get('/category',getAllCategory);
router.get("/flashsale",getAllFlashSale)
router.get("/shopmall",getAllShopMall)
router.get("/product",getAllProduct)
router.get("/detail/:value",getDetailProduct)
router.post("/detail/:id",addProductToCart)
router.post("/" ,isAuth, setSession)

module.exports = router 



