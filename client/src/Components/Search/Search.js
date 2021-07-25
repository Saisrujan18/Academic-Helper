/* eslint-disable no-unused-vars */
import React, { useState} from 'react';
import axios from 'axios';
import pdf from "../Search/download.pdf";
import TableHeader from "./TableHeader";

import '../Search/Search.css'; 

function Search()
{
    const [CourseNumber,setCourse]=useState("");
    const [Branch,setBranch]=useState("");
    const [Year,setYear]=useState(3);
    const [optradio,setopt]=useState('assignments');
    const [CC,setC]=useState(false);
    const [BC,setB]=useState(false);
    const [YC,setY]=useState(false);
    const [OC,setO]=useState(false);
    const [files,setFile]=useState([]);
    const [fetched,setFetch]=useState(false);
        
    function createCard(props)
    {
        return(
            <table>
            <tr>
                <td className="table1">{props.CourseNumber}</td>
                <td className="table2">{props.Branch}</td>
                <td className="table3">{props.Year}</td>
                <td className="table4">{props.optradio}</td>
                <td className="table5"><button id={props.id} onClick={fetch} className="btn btn-dark">Fetch</button></td>
            </tr>
            </table>
        );
    }

    function fetch(e)
    {
        e.preventDefault();
        setFetch(true);
        const id=e.target.id;
        console.log(id);
        axios.post("http://localhost:3001/search/fetch",{id})
            .then(res=>{alert("fetched");})
            .catch(err=>console.log(err))
    }

    function show(props)
    {
        // console.log(props);
        return(props.map(createCard));
    }

    function handleInputChange(e)
    {
        if(e.target.name==="Branch"){setBranch(e.target.value);}
        else {setopt(e.target.value);}
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        const query={CourseNumber,Branch,Year,optradio,CC,BC,YC,OC};
        axios
            .post("http://localhost:3001/search",query)
            .then(res=>
                {
                    setFile(res.data);
                }
            )
            .catch(err=>console.log(err))
        alert("Feteched");
    }
    function handleCheck(e)
    {
        if(e.target.name==="BC")
        {
            const val=BC;
            setB(!val);
        }
        else if(e.target.name==="CC")
        {
            const val=CC;
            setC(!val);
        }
        else if(e.target.name==="YC")
        {
            const val=YC;
            setY(!val);
        }
        else
        {
            const val=OC;
            setO(!val);
        }
    }
    function Download()
    {
        if(fetched===true)
        {
            return (<a href={pdf} download><button className="btn btn-light">Download File</button></a>);
        }
        else
        {
            return (<div></div>);
        }
    }

    return(

        <div className=" jumbotron container all">
        <h1 className="display-4"> Search files</h1><br></br>
        
        <form>
            
            <div className="form-group">
                <b><label htmlFor="icode" className="col-md-3 control-label">Course Number</label></b>
                <div className="col-md-9">
                    <input type="text" value={CourseNumber} onChange={e=>setCourse(e.target.value)} className="form-control" name="CourseNumber" />
                </div>
            </div>
            
            <div className="radio radiobtn">
                <br></br>
                <b><label htmlFor="icode" className="col-md-3 control-label" name="optrd" value={Branch}>Choose Branch :</label></b>
                <br></br>
                <label><input value="Computer Science" name="Branch" onChange={handleInputChange}  type="radio" defaultChecked  />Computer Science</label><br></br>
                <label><input value="Electrical" name="Branch" onChange={handleInputChange} type="radio"  />Electrical </label><br></br>
                <label><input value="Mechanical" name="Branch" onChange={handleInputChange} type="radio"/>Mechanical</label><br></br>
                <label><input value="Chemical" name="Branch" onChange={handleInputChange} type="radio"/>Chemical</label><br></br>
                <label><input value="Civil" name="Branch" onChange={handleInputChange} type="radio"/>Civil</label><br></br>
                <br></br>
            </div>


            <div className="form-group">
                <b><label htmlFor="icode" className="col-md-3 control-label">Year</label></b>
                <div className="col-md-9">
                    <input type="number" value={Year} onChange={e=>setYear(e.target.value)} className="form-control" name="Year" max="4" min="1"/>
                </div>
            </div>


            <div className="radio radiobtn">
                <br></br>
                <b><label htmlFor="icode" className="col-md-3 control-label" name="optrd" value={optradio}>Choose an Option :</label></b>
                <br></br>
                <label><input value="assignments" name="optradio" onChange={handleInputChange}  type="radio" defaultChecked  />Assignments</label><br></br>
                <label><input value="notes" name="optradio" onChange={handleInputChange} type="radio"  />Notes</label><br></br>
                <label><input value="coursematerial" name="optradio" onChange={handleInputChange} type="radio"/>Course Material</label><br></br>
                <br></br>
            </div>
            <div className="form-group">
                <b><label htmlFor="icode" className="col-md-3 control-label">Choose Filters :</label></b>
                <div className="col-md-9 form-check">
                    
                    <label><input className="form-check-input" type="checkbox" id="CC" name="CC" onChange={handleCheck} checked={CC}/>CourseNumber</label><br></br>
                    <label><input className="form-check-input" type="checkbox" id="BC" name="BC" onChange={handleCheck} checked={BC}/>Branch</label><br></br>
                    <label><input className="form-check-input" type="checkbox" id="YC" name="YC" onChange={handleCheck} checked={YC}/>Year</label><br></br>
                    <label><input className="form-check-input" type="checkbox" id="OC" name="OC" onChange={handleCheck} checked={OC}/>Option</label><br></br>
                
                </div>
            </div>
            <br></br>
            <input type="submit" value="Search File" className="btn btn-success" onClick={handleSubmit}/>
            <br></br>
            <br></br>

        </form>
        {Download()}
        <br></br>
        <div>
            <TableHeader/>
            {show(files)}
        </div>
        </div>
    );
}

export default Search;