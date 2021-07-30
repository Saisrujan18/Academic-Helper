// THANK GOD !!!!!!!

require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors=require("cors");
const path=require("path");
const mongoose=require("mongoose");
const emailcr=require('email-existence');
const mongodb=require("mongodb");
const fileUpload =require("express-fileupload");
const fs=require("fs");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload());

const binary = mongodb.Binary;

const homeRouter = require ('./routes/Home');
const viewRouter = require ('./routes/Search');
const uploadRouter = require ('./routes/Upload');

app.use ('/', homeRouter);
app.use ('/search', viewRouter);
app.use ('/upload', uploadRouter);

const MONGO_DB_URI = process.env.URI;
const PORT =process.env.PORT;
const ADMIN=process.env.ADMIN;

const User =require('./models/User');


app.post ('/register', async function(req, res)
    {
        try 
        {
            let correctmail=true;
            let isAdmin = false;
            const email = req.body.email;
            const password= req.body.password;
            
            emailcr.check(email, function(err,resp){correctmail=resp;});
            
            if(correctmail===false){return res.send("Enter a valid email");}
            
            if(email===ADMIN){isAdmin=true;}
            
            if(!password){return res.send('Enter your password !');}

            if (!email.endsWith ('@iittp.ac.in')) {return res.send ('Only IIT Tirupati Folks are allowed');}
            
            const newUser = await new User ({
                emailId: email,
                password: password,
                isAdmin: isAdmin,
                isBlocked: false,
            });
            
            await newUser
                .save ()
                .then (result => {console.log (result); console.log("Registered");})
                .catch (err => {
                    console.log(err);
                    return res.send ('User Already Exists');
                });
            return res.send("done");
        }
        catch(err){console.log (err);}
    }
);

app.post ('/login', async function(req, res)
    {
        try{
            const {email, password} = req.body;
            console.log(email);
            const user =await User.find({emailId: email,},function(err,result){
                if (err) {throw err;}
                console.log(result);
            });

            if (user.length)
            {
                console.log(user);
                console.log("user found");
                if (password === user[0].password) 
                {
                    res.send ({
                    msg: 'User Found',
                    found: true,
                    user: 
                    {
                        _id: user[0]._id,
                        emailId: user[0].emailId,
                        isAdmin: user[0].isAdmin,
                        isBlocked:user[0].isBlocked,
                    },
                    });
                }
                else 
                {
                    res.send ({
                    msg: 'Wrong Password',
                    found: false,
                    user: null,
                    });
                }
            } 
            else 
            {
                console.log("entered an invalid emailid");
                res.send ({
                    msg: 'Invalid Email ID',
                    found: false,
                    user: null,
                });
            }
        }

        catch (error) 
        {
            console.log("ERROR");
            res.status (404).send ({
            msg: 'some error',
            found: false,
            user: null,
            });
        }
    }
);

mongoose.connect (
    MONGO_DB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => {
        console.log(MONGO_DB_URI);
        console.log ('connected to mongo_db');
        app.listen (PORT, () => console.log (`server running on ${PORT}`));
    }
);