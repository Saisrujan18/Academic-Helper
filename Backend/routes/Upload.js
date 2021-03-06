const express = require("express");
const fs = require('fs');
const fileUpload = require('express-fileupload');
const mongodb = require('mongodb');
const binary = mongodb.Binary;

const app=express();
const router = express.Router();

const Note=require("../models/Note");

router.use(express.json());
app.use(fileUpload())

router.post('/',async (req,res)=>{
    try 
    {
        console.log("contacting server to upload");
        const newNote = await new Note({
            file: req.files===null?null:req.files.uploadedFile.data,
            CourseNumber:req.body.CourseNumber,
            Year:req.body.Year,
            Branch:req.body.Branch,
            optradio:req.body.optradio,
        });

        if(newNote.file!==null && newNote.CourseNumber!=="")
        {
            console.log("UPloaded");
            await newNote
            .save ()
            .then (result =>{ console.log (result);console.log("Successfully Uploaded");})
            .catch (err =>{throw err});
        }
        else {console.log("Failed to upload cause file maybe null or no coursenumber");}
        res.redirect("http://localhost:3000/");
    }
    catch(err){console.log(err);}
})

module.exports=router;

// console.log(req.files.uploadedFile.data);
// let file = { name: req.body.name, file: binary(req.files.uploadedFile.data) }
// insertFile(file, res)