const express = require("express");
const router = express.Router();
const {findUser} = require("../controllers/login.controller")

router.post("/",findUser)
module.exports = router