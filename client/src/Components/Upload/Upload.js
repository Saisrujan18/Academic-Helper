/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import '../Upload/Upload.css'; 
import {Redirect} from "react-router-dom";
class Upload extends Component
{
    constructor(props)
    {
        const user= JSON.parse(sessionStorage.getItem ('user'));
        super(props);
        this.state=
        {
            CourseNumber:'',
            Branch:'Computer Science',
            Year:1,
            Uploader: user.emailId,
            optradio: 'assignments',
            done:false
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleInputChange(e){this.setState({[e.target.name]: e.target.value});}
    handleSubmit(e){alert("Done");}
    render()
    {
        if(this.state.done===true){return <Redirect to="/" />;}
        return(
            
            <div className=" jumbotron container all">
            <h1 className="display-4"> Upload files </h1><br></br>
            
            <form action="http://localhost:3001/upload" method="POST" encType="multipart/form-data">

                <div className="form-group">
                    <b><label for="icode" className="col-md-3 control-label">Course Number</label></b>
                    <div className="col-md-9">
                        <input type="text" value={this.state.CourseNumber} onChange={this.handleInputChange} className="form-control" name="CourseNumber" />
                    </div>
                </div>
                
                <div className="radio radiobtn">
                    <br></br>
                    <b><label for="icode" className="col-md-3 control-label" name="optrd" value={this.state.Branch}>Choose Branch :</label></b>
                    <br></br>
                    <label><input value="Computer Science" name="Branch" onChange={this.handleInputChange}  type="radio" defaultChecked  />Computer Science</label><br></br>
                    <label><input value="Electrical" name="Branch" onChange={this.handleInputChange} type="radio"  />Electrical </label><br></br>
                    <label><input value="Mechanical" name="Branch" onChange={this.handleInputChange} type="radio"/>Mechanical</label><br></br>
                    <label><input value="Chemical" name="Branch" onChange={this.handleInputChange} type="radio"/>Chemical</label><br></br>
                    <label><input value="Civil" name="Branch" onChange={this.handleInputChange} type="radio"/>Civil</label><br></br>
                    <br></br>
                </div>


                <div className="form-group">
                    <b><label for="icode" className="col-md-3 control-label">Year</label></b>
                    <div className="col-md-9">
                        <input type="number" value={this.state.Year} onChange={this.handleInputChange} className="form-control" name="Year" max="4" min="1"/>
                    </div>
                </div>


                <div className="radio radiobtn">
                    <br></br>
                    <b><label for="icode" className="col-md-3 control-label" name="optrd" value={this.optradio}>Choose an Option :</label></b>
                    <br></br>
                    <label><input value="assignments" name="optradio" onChange={this.handleInputChange}  type="radio" defaultChecked  />Assignments</label><br></br>
                    <label><input value="notes" name="optradio" onChange={this.handleInputChange} type="radio"  />Notes</label><br></br>
                    <label><input value="coursematerial" name="optradio" onChange={this.handleInputChange} type="radio"/>Course Material</label><br></br>
                    <br></br>
                </div>
                <div className="form-group">
                    <b><label for="icode" className="col-md-3 control-label">Uploader</label></b>
                    <div className="col-md-9">
                        <input type="text" value={this.state.Uploader} className="form-control" name="Uploader" disabled/>
                    </div>
                </div>
                <br></br>

                <input type="file" name="uploadedFile" className="form-control" accept="application/pdf" size='2097152'/>
                <br></br>
                <input type="submit" value="Upload File" className="btn btn-success" onClick={this.handleSubmit}/>
            
            </form>
            
            </div>
        );
    }
}

export default Upload;