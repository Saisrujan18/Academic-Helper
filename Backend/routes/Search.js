const express = require("express");
const router = express.Router();
const Note=require("../models/Note");
const fs=require('fs');
router.use(express.json());

const mongodb = require('mongodb');
const binary = mongodb.Binary;
const conv= require('arraybuffer-to-buffer');

router.post('/',async (req,res)=>{
    try
    {
        console.log(req.body);
        console.log("Seraching started");

        var finder={};
        if(req.body.CC===true){finder.CourseNumber=req.body.CourseNumber}
        if(req.body.BC===true){finder.Branch=req.body.Branch}
        if(req.body.YC===true){finder.Year=req.body.Year}
        if(req.body.OC===true){finder.optradio=req.body.optradio}
        console.log(finder);

        const answer=Note.find(finder,function(err,doc)
        {
           
            if(err){throw err;}
            else 
            {
                if(doc.length===0){return res.send([]);}
                else
                {
                    var sender=[];
                    for(var i=0;i<doc.length;i++)
                    {
                        var ind={};
                        ind.optradio=doc[i].optradio;
                        ind.Year=doc[i].Year;
                        ind.Branch=doc[i].Branch;
                        ind.CourseNumber=doc[i].CourseNumber;
                        ind.id=doc[i]._id;
                        sender.push(ind);
                    }
                    res.send(sender);
                }
                console.log(doc);
            }
        })
    }
    catch(err){console.log("Down here is the error that popped out.CATCH BLOCK");console.log(err);}
})

router.post('/fetch',async(req,res)=>{
    try
    {
        console.log("FETCHING FOR A FILE ");

        const ide=req.body.id;
        const answer=Note.findById(ide,function(err,doc){
            if(err){console.log(err);throw err;}
            else 
            {
                console.log(doc);
                let buff=doc.file.buffer;
                console.log(buff);
                fs.writeFile("../client/src/Components/Search/download.pdf",conv(buff),err=>{
                    if(err){throw err;}
                    else{console.log("FILE SUCCESSFULLY FETCHED");}
                });
            }

        });
    }
    catch(err)
    {
        console.log("Down here is the error that popped out.CATCH BLOCK");
        console.log(err);
    }
});


module.exports=router;