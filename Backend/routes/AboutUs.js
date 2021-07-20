const express = require("express");
const router = express.Router();
const User =require("../models/User");

router.use(express.json());

module.exports=router;