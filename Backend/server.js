require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors=require("cors");
const path=require("path");
const mongoose=require("mongoose");
const bcrypt = require ('bcrypt');
const emailcr=require('email-existence');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


const homeRouter = require ('./routes/Home');
const viewRouter = require ('./routes/View');
const uploadRouter = require ('./routes/Upload');
const aboutusRouter = require ('./routes/AboutUs');

app.use ('/', homeRouter);
app.use ('/view', viewRouter);
app.use ('/upload', uploadRouter);
app.use ('/aboutus', aboutusRouter);

const MONGO_DB_URI = process.env.URI;
const PORT =process.env.port;
const ADMIN=process.env.ADMIN;

const User =require('./models/User');

mongoose.connect (
    MONGO_DB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => {
        console.log ('connected to mongo_db');
        app.listen (PORT, () => console.log (`server running`));
    }
);

app.post ('/register', async function(req, res)
    {
        try 
        {
            let correctmail=true;
            let isAdmin = false;
            const email = req.body.email;
            const password= await bcrypt.hash(req.body.password,10);
            
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
                .then (result => console.log (result))
                .catch (err => {
                    console.log (err);
                    return res.send ('User Already Exists');
                });
            res.send("done");
        }
        catch(err){console.log (err);}
    }
);

app.post ('/login', async function(req, res)
    {
        try{
            const {email, password} = req.body;
            const user = await User.find({emailId: email,});
            if (user.length)
            {
                if (await bcrypt.compare (password, user[0].password)) 
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
                res.send ({
                    msg: 'Invalid Email ID',
                    found: false,
                    user: null,
                });
            }
        }
        catch (error) 
        {
            res.status (404).send ({
            msg: 'some error',
            found: false,
            user: null,
            });
        }
    }
);