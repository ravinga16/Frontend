import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Userprofilecard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserName:'',
            Email:'',
            Password:'',
            ContactNumber:''
        }
        this.handleCancel=this.handleCancel.bind(this);
        this.handleEditProfile=this.handleEditProfile.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
    }

 
    handleEditProfile(event){
        event.preventDefault();
        document.getElementById("showProfile").style.display = "none";
        document.getElementById("editProfile").style.display="block";
    }
    handleUpdate(event){
        event.preventDefault();
        // this.setState({UserName:document.getElementById("UserName").value});
        // this.setState({Email:document.getElementById("Email").value});
        // this.setState({Password:document.getElementById("Password").value});
        // this.setState({ContactNumber:document.getElementById("ContactNumber").value});
        this.state.UserName=document.getElementById("UserName").value;
        this.state.Email=document.getElementById("Email").value;
        this.state.Password=document.getElementById("Password").value;
        this.state.ContactNumber=document.getElementById("ContactNumber").value;
        console.log(this.state);
    }
    handleCancel(event){
        event.preventDefault();
        document.getElementById("editProfile").style.display="none";
        document.getElementById("showProfile").style.display="block";
    }
    render() {
        return (
            <MDBCol style={{marginTop:"25px"}}>
                <MDBCard style={{ width: "30rem" }}>
                    <MDBCardImage style={{marginLeft:"100px"}}className="img-fluid" src="https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg" waves />
                    <MDBCardBody>
                   
                        <form style={{ textAlign: "left",display:"block" ,fontSize:"13px"}} id="showProfile">
                        
                            <div class="row">
                                <div class="col-md-5">User Name:
                        </div>
                                <div class="col-md-5">
                                    <input type="text" name="UserName" placeholder="Ravinga Sewwandi" disabled></input>
                                </div>
                            </div><br></br>
                            <div class="row">
                                <div class="col-md-5">Email:
                        </div>
                                <div class="col-md-5">
                                    <input type="email" name="Email" placeholder="ravinga.p@eyepax.com" disabled></input>
                                </div>
                            </div><br></br>
                            <div class="row">
                                <div class="col-md-5">Password:
                        </div>
                                <div class="col-md-5">
                                    <input type="password" name="Password" placeholder="12345" disabled></input>
                                </div>
                            </div><br></br>
                            <div class="row">
                                <div class="col-md-5">Contact Number:
                        </div>
                                <div class="col-md-5">
                                    <input type="text" name="ContactNumber" placeholder="071404040" disabled></input>
                                </div>
                            </div><br></br>
                            
                         <MDBBtn onClick={this.handleEditProfile} style={{marginLeft:"120px"}}>Edit Profile</MDBBtn>
                          

                  
                        </form>

                    
                        
                        <form onSubmit={this.handleUpdate} style={{ textAlign: "left",display:"none" ,fontSize:"13px"}} id="editProfile"> 
                      
                            <div class="row">
                                <div class="col-md-5">User Name:
                        </div>
                                <div class="col-md-5">
                                    <input type="text" id="UserName" placeholder="Ravinga Sewwandi" ></input>
                                </div>
                            </div><br></br>
                            <div class="row">
                                <div class="col-md-5">Email:
                        </div>
                                <div class="col-md-5">
                                    <input type="email" id="Email" placeholder="ravinga.p@eyepax.com" ></input>
                                </div>
                            </div><br></br>
                            <div class="row">
                                <div class="col-md-5">Password:
                        </div>
                                <div class="col-md-5">
                                    <input type="password" id="Password" placeholder="12345"></input>
                                </div>
                            </div><br></br>
                            <div class="row">
                                <div class="col-md-5">Contact Number:
                        </div>
                                <div class="col-md-5">
                                    <input type="text" id="ContactNumber" placeholder="071404040" ></input>
                                </div>
                            </div><br></br>
                            <div class="row">
                            <div class="col-md-5"> <MDBBtn type="submit"  >Update</MDBBtn></div>
                            <div class="col-md-5"> <MDBBtn  style={{marginLeft:"115px"}}type="submit" onClick={this.handleCancel}>Cancel</MDBBtn></div>
                            </div>

                      
                        </form>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
}

export default Userprofilecard;