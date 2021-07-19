require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors=require("cors");
const path=require("path");
const mogoose=require("mongoose");

// const user = require("./models/User");


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

// Mongoose
mogoose.connect(process.env.URI,{ useNewUrlParser: true,useUnifiedTopology: true });

// user.insertOne();
// const newComplaint = new user ({
//     emailId:"yayi",
//     password:"yo",
//   });
// newComplaint.save();

// Routes

app.listen(3001,function(){console.log("he");});

// Srujan
// zTckz5Ad9CfxbNYU