/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import axios from 'axios';
import '../Upload/Upload.css'; 
import {Redirect} from 'react-router-dom';
// import fs from "fs";
// const fs=require('fs');

function Upload()
{
    const [type,changeType]=useState("Other");
    const [course,changeCourse]=useState("");
    const [year,changeYear]=useState(1);
    const [description,changeD]=useState("");
    const [branch,changeB]=useState("CS");
    const [file,UpdateFile]=useState("");
    const [done,update]=useState(false);
    
    function Onsubmit(event)
    {
        event.preventDefault();
        const user= JSON.parse (sessionStorage.getItem ('user'));
        const mail=user.emailId;
        console.log(document.getElementById("file").value);
        
        // if(document.getElementById("file").files[0].type==="application/pdf")
        // {
        //     // fs.copyFile(document.getElementById("file").files[0].name, 'upload.pdf', (err) => {
        //         // if (err) throw err;
        //         // console.log('source.txt was copied to destination.txt');
        //     // });
        //     var rd=fs.createReadStream(document.getElementById("file").files[0].name);
        // }
        // axios.post('http://localhost:3001/upload',{type,course,year,description,branch,file,mail})
        //     .then(res =>{
            //         if(res.data==="done"){update(true);alert("Successfully Uploaded !");}
            //         else {alert("Check again");}
            // })
            //     .catch(err=>{console.log(err);})
        }
    function typeC(e)
    {
        e.preventDefault();
        const cls1="btn btn-light";
        const cls2="btn btn-dark";
        changeType(e.target.name);
        document.getElementById("q").className=cls1;
        document.getElementById("a").className=cls1;
        document.getElementById("e").className=cls1;
        document.getElementById("o").className=cls1;
        e.target.className=cls2;
        // console.log(type);
    }

    function branchC(e)
    {
        e.preventDefault();
        const cls1="btn btn-light";
        const cls2="btn btn-dark";
        changeB(e.target.name);
        document.getElementById("cs").className=cls1;
        document.getElementById("ee").className=cls1;
        document.getElementById("me").className=cls1;
        document.getElementById("ch").className=cls1;
        document.getElementById("ce").className=cls1;
        e.target.className=cls2;
    }
    if(done===true){return <Redirect to="/view"/>}
    return(
        <div className="container all">

            <div className="type">
                <button type="button"  id="q" className="btn btn-light" onClick={typeC} name="QuestionPaper">Question Paper</button>
                <button type="button" id="a" className="btn btn-light" onClick={typeC} name="Assignment">Assignment</button>
                <button type="button" id="e" className="btn btn-light" onClick={typeC} name="Exams">Exams</button>
                <button type="button" id="o" className="btn btn-dark" onClick={typeC} name="Other">Other</button>
            </div>

            <div className="course">
                <input type="text" value={course} onChange={e=>{changeCourse(e.target.value);}} placeholder="Course"></input>
                <input type="number" value={year} onChange={e=>{changeYear(e.target.value);}} max="4" min="1"></input>
                <input type="text" value={description} onChange={e=>{changeD(e.target.value);}} placeholder="description"></input>
            </div>

            <div className="type">
                <button type="button"  id="cs" className="btn btn-light" onClick={branchC} name="CS">CS</button>
                <button type="button" id="ee" className="btn btn-light" onClick={branchC} name="EE">EE</button>
                <button type="button" id="me" className="btn btn-light" onClick={branchC} name="ME">ME</button>
                <button type="button" id="ch" className="btn btn-dark" onClick={branchC} name="CH">CH</button>
                <button type="button" id="ce" className="btn btn-light" onClick={branchC} name="CE">CE</button>
            </div>
            
            <input type="text" name="link" placeholder="link of the pdf" value={file}  onChange={e=>{UpdateFile(e.target.value);}}></input>
            <input type="file" name="file" id="file"></input>
            <button className="btn btn-success" onClick={Onsubmit}>Submit</button>
        </div>
    );
}

export default Upload;