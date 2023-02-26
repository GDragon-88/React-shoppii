const express = require("express");
const router = express.Router();

const {isAuth} =require("../midlewares/isAuth")
const {getValueCart,updateCart,deleteCart,
checkoutCart} = require("../controllers/cart.controller")

router.post("/",isAuth,getValueCart)
router.post("/update",updateCart)
router.delete("/delete",deleteCart)
router.post("/checkout",checkoutCart)
module.exports = router 