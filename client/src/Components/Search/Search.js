/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import pdf from "../Search/download.pdf";
import TableHeader from "./TableHeader";

import '../Search/Search.css'; 

class Search extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            CourseNumber:'',
            CC:false,
            Branch:'',
            BC:false,
            Year:3,
            YC:false,
            optradio: '',
            OC:false,
            files:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleCheck=this.handleCheck.bind(this);
        this.show=this.show.bind(this);
    }


        
    createCard(props)
    {
        return(
            <table>
            <tr>
                <td className="table1">{props.CourseNumber}</td>
                <td className="table2">{props.Branch}</td>
                <td className="table3">{props.Year}</td>
                <td className="table4">{props.optradio}</td>
                <td className="table5"><a href="www.google.com">here</a></td>
            </tr>
            </table>
        );
    }

    show(props)
    {
        console.log(props);
        return(props.map(this.createCard));
    }

    handleInputChange(e){this.setState({[e.target.name] : e.target.value});}

    handleSubmit(e)
    {
        e.preventDefault();
        const query=this.state;
        var fil=[];
        axios
            .post("http://localhost:3001/search",query)
            .then(res=>
                {
                    console.log(res.data);
                    for(var i=0;i<res.data.length;i++)
                    {
                        fil.push(res.data[0]);
                    }
                    console.log(fil);

                }
            )
            .catch(err=>console.log(err))
        this.setState({files:fil});
        console.log(this.state.files);
        alert("Feteched");
    }
    handleCheck(e)
    {
        if(e.target.name==="BC")
        {
            const val=this.state.BC;
            this.setState({BC:!val});
        }
        else if(e.target.name==="CC")
        {
            const val=this.state.CC;
            this.setState({CC:!val});
        }
        else if(e.target.name==="YC")
        {
            const val=this.state.YC;
            this.setState({YC:!val});
        }
        else
        {
            const val=this.state.OC;
            this.setState({OC:!val});
        }
    }

    render()
    {
        return(
            <div className=" jumbotron container all">
            <h1 className="display-4"> Search files</h1><br></br>
            
            {/* <form action="http://localhost:3001/search" method="POST" encType="multipart/form-data"> */}
            <form>
                
                <div className="form-group">
                    <b><label htmlFor="icode" className="col-md-3 control-label">Course Number</label></b>
                    <div className="col-md-9">
                        <input type="text" value={this.state.CourseNumber} onChange={this.handleInputChange} className="form-control" name="CourseNumber" />
                    </div>
                </div>
                
                <div className="radio radiobtn">
                    <br></br>
                    <b><label htmlFor="icode" className="col-md-3 control-label" name="optrd" value={this.state.Branch}>Choose Branch :</label></b>
                    <br></br>
                    <label><input value="Computer Science" name="Branch" onChange={this.handleInputChange}  type="radio" defaultChecked  />Computer Science</label><br></br>
                    <label><input value="Electrical" name="Branch" onChange={this.handleInputChange} type="radio"  />Electrical </label><br></br>
                    <label><input value="Mechanical" name="Branch" onChange={this.handleInputChange} type="radio"/>Mechanical</label><br></br>
                    <label><input value="Chemical" name="Branch" onChange={this.handleInputChange} type="radio"/>Chemical</label><br></br>
                    <label><input value="Civil" name="Branch" onChange={this.handleInputChange} type="radio"/>Civil</label><br></br>
                    <br></br>
                </div>


                <div className="form-group">
                    <b><label htmlFor="icode" className="col-md-3 control-label">Year</label></b>
                    <div className="col-md-9">
                        <input type="number" value={this.state.Year} onChange={this.handleInputChange} className="form-control" name="Year" max="4" min="1"/>
                    </div>
                </div>


                <div className="radio radiobtn">
                    <br></br>
                    <b><label htmlFor="icode" className="col-md-3 control-label" name="optrd" value={this.optradio}>Choose an Option :</label></b>
                    <br></br>
                    <label><input value="assignments" name="optradio" onChange={this.handleInputChange}  type="radio" defaultChecked  />Assignments</label><br></br>
                    <label><input value="notes" name="optradio" onChange={this.handleInputChange} type="radio"  />Notes</label><br></br>
                    <label><input value="coursematerial" name="optradio" onChange={this.handleInputChange} type="radio"/>Course Material</label><br></br>
                    <br></br>
                </div>
                <div className="form-group">
                    <b><label htmlFor="icode" className="col-md-3 control-label">Choose Filters :</label></b>
                    <div className="col-md-9 form-check">
                        
                        <label><input className="form-check-input" type="checkbox" id="CC" name="CC" onChange={this.handleCheck} checked={this.state.CC}/>CourseNumber</label><br></br>
                        <label><input className="form-check-input" type="checkbox" id="BC" name="BC" onChange={this.handleCheck} checked={this.state.BC}/>Branch</label><br></br>
                        <label><input className="form-check-input" type="checkbox" id="YC" name="YC" onChange={this.handleCheck} checked={this.state.YC}/>Year</label><br></br>
                        <label><input className="form-check-input" type="checkbox" id="OC" name="OC" onChange={this.handleCheck} checked={this.state.OC}/>Option</label><br></br>
                    
                    </div>
                </div>
                <br></br>
                <input type="submit" value="Search File" className="btn btn-success" onClick={this.handleSubmit}/>
                <br></br>
                <br></br>

            </form>
            <div>
              <TableHeader/>
              {this.show(this.state.files)}
            </div>
            </div>
        );
    }

//    Change(event)
//     {
//         event.preventDefault();
//         const file="no";
//         axios.post("http://localhost:3001/search",{file})
//             .then(res=>{console.log(res);})
//             .catch(err=>console.log(err))
//     }
    // return(
    //     <div>
    //         <a href={pdf} download onClick={Change}>download</a>
    //         <button onClick={Change}>Fetch</button>
    //     </div>
    // );
}

export default Search;