/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import '../Upload/Upload.css'; 
import {Redirect} from 'react-router-dom';

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
            optradio: 'assignments'
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleInputChange(e){this.setState({[e.target.name]: e.target.value});}
    handleSubmit(e){alert("Done");}
    render()
    {
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

                <input type="file" name="uploadedFile" onChange={this.onFileChange} className="form-control" accept="application/pdf"/>
                <br></br>
                <input type="submit" value="Upload File" className="btn btn-success" onClick={this.handleSubmit}/>
            
            </form>
            
            </div>
        );
    }
}

export default Upload;



// const [type,changeType]=useState("Other");
// const [course,changeCourse]=useState("");
// const [year,changeYear]=useState(1);
// const [description,changeD]=useState("");
// const [branch,changeB]=useState("CS");
// const [file,UpdateFile]=useState("");
// const [done,update]=useState(false);

// Onsubmit(event)
            // {
                //     event.preventDefault();
                //     const user= JSON.parse (sessionStorage.getItem ('user'));
                //     const mail=user.emailId;
                //     console.log(document.getElementById("file").value);
                
                //     // if(document.getElementById("file").files[0].type==="application/pdf")
                //     // {
                    //     //     // fs.copyFile(document.getElementById("file").files[0].name, 'upload.pdf', (err) => {
                        //     //         // if (err) throw err;
                        //     //         // console.log('source.txt was copied to destination.txt');
                        //     //     // });
                        //     //     var rd=fs.createReadStream(document.getElementById("file").files[0].name);
                        //     // }
                        //     // axios.post('http://localhost:3001/upload',{type,course,year,description,branch,file,mail})
                        //     //     .then(res =>{
                            //         //         if(res.data==="done"){update(true);alert("Successfully Uploaded !");}
                            //         //         else {alert("Check again");}
                            //         // })
                            //         //     .catch(err=>{console.log(err);})
                            //     }
                            // typeC(e)
                            // {
                                //     e.preventDefault();
                                //     const cls1="btn btn-light";
                                //     const cls2="btn btn-dark";
                                //     changeType(e.target.name);
                                //     document.getElementById("q").className=cls1;
                                //     document.getElementById("a").className=cls1;
                                //     document.getElementById("e").className=cls1;
                                //     document.getElementById("o").className=cls1;
                                //     e.target.className=cls2;
                                //     // console.log(type);
                                // }
                                
                                // function branchC(e)
                                // {
                                    //     e.preventDefault();
                                    //     const cls1="btn btn-light";
                                    //     const cls2="btn btn-dark";
                                    //     changeB(e.target.name);
                                    //     document.getElementById("cs").className=cls1;
                                    //     document.getElementById("ee").className=cls1;
                                    //     document.getElementById("me").className=cls1;
                                    //     document.getElementById("ch").className=cls1;
                                    //     document.getElementById("ce").className=cls1;
                                    //     e.target.className=cls2;
                                    // }
                                    
                                    /* <div className="type">
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
                        <button className="btn btn-success" onClick={Onsubmit}>Submit</button> */
                        /* 
                        <input type="text" name="name" placeholder="File Name.." /><br />
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="Assignment">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        
                        <div className="radio radiobtn">
                        <label ><input value="assignments" name="optradio"
                        onChange={this.handleInputChange}  
                        type="radio" 
                        defaultChecked  />Assignments</label>
                        <label >
                        <input value="notes"
                        name="optradio"
                        onChange={this.handleInputChange} 
                        type="radio"  />Notes</label>
                        <label >
                        <input value="coursematerial"
                        name="optradio"
                        onChange={this.handleInputChange} type="radio"  />Course Material</label>
                        </div>
                        {/* <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                        </select> */
                        
                        //     <input type="file" name="uploadedFile" />
                        //     <input type="submit" value="Upload File" />
                    // </form> */}

                    /* <div className="form-group">
                        <b><label for="icode" className="col-md-3 control-label">Branch</label></b>
                        <div className="col-md-9">
                            <input type="text" value={this.state.Branch} onChange={this.handleInputChange} className="form-control" name="Branch" />
                        </div>
                    </div> */