const express = require("express");
const router = express.Router();
// const User =require("../models/User");
const File=require("../models/file");
router.use(express.json());

router.post('/',async (req,res)=>{
    try 
    {
        const newFile = await new File({
            type:req.body.type,
            course:req.body.course,
            year:req.body.year,
            description:req.body.description,
            branch:req.body.branch,
            link:req.body.file,
            isApproved:false,
            uploader:req.body.mail,
        });

        console.log(newFile);
        await newFile
            .save ()
            .then (result => console.log (result))
            .catch (err => {
                console.log (err);
                return res.send("fuckedup");
                // return res.send ('User Already Exists');
            });
        res.send("done");
        }
        catch(err){console.log (err);}
    
    // return res.send("don");
    // <Redirect></Redirect>
})

module.exports=router;