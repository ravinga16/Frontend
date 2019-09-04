import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';

class WorkerProfileCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname :"",
            baseL:"",
            contactno:"", 
            status:"",
            personalData:[],
            skills:[]       
        }
        this.handleEdit=this.handleEdit.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleDone=this.handleDone.bind(this);
       
      }
     //once the profile card is mounted
      componentDidMount(){
        let userId = localStorage.getItem('UserId');
        let url = "http://localhost:3000/worker/profile/"+userId;    
        axios.get(url,{withCredentials:true})
        .then(response => { 
         console.log("componentdidmount method called");   
        this.setState({personalData:response.data.result.recordsets[0][0]})
        this.setState({skills:response.data.result.recordsets[1]})
        console.log(this.state.personalData.FirstName)
        console.log(this.state.skills)          
          
        })
        .catch(error => {
            console.log(error)
        })
     }
     //handling events
     
     //when edit profile button click
      handleEdit(){
        document.getElementById('profile').style.display="none";
        document.getElementById('editProfile').style.display="block";
      }
      //when cancel button click
      handleCancel(){
        document.getElementById('editProfile').style.display="none";
        document.getElementById('profile').style.display="block";
      }
      //when update button click
      handleUpdate(event){
        event.preventDefault();
        console.log("update button event");
        console.log(this.state)  ;
        let a = {
            "fname":"aa",
            "lname":"sdasd",
            "baseL":"dkfjfksjf"
        } 
        axios.put('http://localhost:3000/worker/profile/146', a)
        .then(response => {        
          console.log("response.data",response.data); 
                      
        })
        .catch(error => {
            console.log(error)
        }) 
               

      }
      handleDone(e){       
        document.getElementById('editProfile').style.display="none";    
        document.getElementById('profile').style.display="block";    
      }
      handleChange(e){        
          if(e.target.value!=""){
            this.setState({[e.target.name]:e.target.value})
          }
                  
      }
        render(){          
            return (
                <MDBCol>
                  <MDBCard style={{ width: "30rem" }} id="profile"style={{display:"block"}}>
                    <MDBCardImage className="img-fluid" src="http://simpleicon.com/wp-content/uploads/user1.png" waves />
                    <MDBCardBody>
                      <MDBCardTitle>Ravinga Sewwandi Perera</MDBCardTitle>
                      <MDBCardText>
                        <div class="row">
                          <div class="col-md-5">User Email</div>
                          <div class="col-md-5"><input name="UserEmail" style={{marginTop:"10px"}} placeholder={this.state.personalData.UserEmail} disabled></input><br></br></div>
                        </div>

                        <div class="row">
                          <div class="col-md-5">FirstName</div>
                          <div class="col-md-5"><input name="FirstName" style={{marginTop:"10px"}} placeholder={this.state.personalData.FirstName} disabled></input><br></br></div>
                        </div>
                        <div class="row">
                          <div class="col-md-5">LastName</div>
                          <div class="col-md-5"><input name="LastName" style={{marginTop:"10px"}} placeholder={this.state.personalData.LastName} disabled></input><br></br></div>
                        </div>
                        <div class="row">
                          <div class="col-md-5">BaseLocation</div>
                          <div class="col-md-5"><input name="BaseLocation" style={{marginTop:"10px"}}placeholder={this.state.personalData.BaseLocation} disabled></input><br></br></div>
                        </div>

                        <div class="row">
                          <div class="col-md-5">Status</div>
                          <div class="col-md-5"><input name="Status" style={{marginTop:"10px"}}placeholder={this.state.personalData.Status} disabled></input><br></br></div>
                        </div>

                        <div class="row">
                          <div class="col-md-5">ContactNumber</div>
                          <div class="col-md-5"><input name="ContactNumber" style={{marginTop:"10px"}} placeholder={this.state.ContactNumber} disabled></input><br></br></div>
                        </div> 

                        <div class="row">
                          <div class="col-md-5">Rate</div>
                          <div class="col-md-5"><input name="Rate" style={{marginTop:"10px"}} placeholder={this.state.contactno} disabled></input><br></br></div>
                        </div> 
                        </MDBCardText>
                      <MDBBtn href="#" onClick={this.handleEdit}>Edit Profile</MDBBtn>                  
                    </MDBCardBody>
                  </MDBCard>
    
                  <MDBCard style={{ width: "30rem" }} id="editProfile" style={{display:"none"}}>
                    <MDBCardImage className="img-fluid" src="http://simpleicon.com/wp-content/uploads/user1.png" waves />
                    <MDBCardBody>
                      <MDBCardTitle>Ravinga Sewwandi Perera</MDBCardTitle>
                      <MDBCardText>
                   
                        <form>
                            <div class="row">
                            <div class="col-md-5">FirstName</div>
                            <div class="col-md-5"><input name="fname" value={this.state.fname} style={{marginTop:"10px"}} placeholder={this.state.fname} onChange={this.handleChange}></input><br></br></div>
                            </div>
                            <div class="row">
                            <div class="col-md-5">LastName</div>
                            <div class="col-md-5"><input name="lname" value={this.state.lname}style={{marginTop:"10px"}} placeholder={this.state.lname} onChange={this.handleChange}></input><br></br></div>
                            </div>
                            <div class="row">
                            <div class="col-md-5">BaseLocation</div>
                            <div class="col-md-5"><input name="baseL" value={this.state.baseL}  style={{marginTop:"10px"}} placeholder={this.state.baseL} onChange={this.handleChange}></input><br></br></div>
                            </div>
                            <div class="row">
                            <div class="col-md-5">ContactNumber</div>
                            <div class="col-md-5"><input name="contactno" value={this.state.contactno} style={{marginTop:"10px"}} placeholder={this.state.contactno}  onChange={this.handleChange}></input><br></br></div>
                            </div>             
                                                                
                        
                            <br></br>
                            
                        
                        <div class="row">
                            <div class="col-md-5"><MDBBtn  id="update" onClick={this.handleUpdate}>Update</MDBBtn></div> 
                            <div class="col-md-5"><MDBBtn id="cancel" style={{display:"block"}} onClick={this.handleCancel}>Cancel</MDBBtn></div>  
                            {/* <div class="col-md-5"><MDBBtn id="done" style={{display:"none"}}onClick={this.handleDone}>Done</MDBBtn></div>  */}
                        </div>                         
                        </form>  

                      </MDBCardText>               
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              )
        }
}

export default WorkerProfileCard;