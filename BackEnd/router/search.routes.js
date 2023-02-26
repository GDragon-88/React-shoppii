const express = require("express");
const router = express.Router();
const {getDataSearch} = require("../controllers/search.controller")
router.post('/:value',getDataSearch)


module.exports = router