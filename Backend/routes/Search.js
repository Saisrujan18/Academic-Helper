const express = require("express");
const router = express.Router();
const Pile =require("../models/uploadfile");
const fs=require('fs');
router.use(express.json());

const mongodb = require('mongodb');
const binary = mongodb.Binary;
const conv= require('arraybuffer-to-buffer');

router.post('/',async (req,res)=>{
    try{
        console.log("HEY");
        const pile = Pile.find({},function(err,doc){
           
            if(err){console.log(err);throw err;}
            else 
            {
                console.log("HEYY");
                console.log(doc);
                let buff=doc[0].file.buffer;
                console.log(buff);
                fs.writeFile("download.pdf",conv(buff),err=>{
                    if(err)
                    {
                        console.log(err);
                        throw err;
                    }
                    else
                    {
                        console.log("EEEU");
                    }
                });
                // let buffer = doc[0].file.buffer
                // fs.writeFileSync('uploadedImage.jpg', buffer)
            }
        })
        res.send("done");
        // res.redirect('/');
    }
    catch(err){console.log(err);}
})

module.exports=router;