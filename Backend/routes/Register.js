const express = require("express");
const router = express.Router();
const User =require("../models/User");

router.use(express.json());

router.post("/register",function(req,res){
    const u=req.body;
    console.log(u);
});

module.exports=router;