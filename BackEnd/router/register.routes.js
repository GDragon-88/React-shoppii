const express = require("express");
const router = express.Router();
const {addOneUser} = require('../controllers/register.controller')


router.post("/",addOneUser)

module.exports =router