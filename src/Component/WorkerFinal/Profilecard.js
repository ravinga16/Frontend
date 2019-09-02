import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';
class Profilecard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      FirstName:"",
      LastName:"",
      BaseLocation:"",
      Status:"",
      ContactNumber:"",
      personalData:[],
      skills:[]
    }
    this.handleEdit=this.handleEdit.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }
  //get worker details and update profileCard
  componentDidMount(){
    axios.get('http://localhost:3000/worker/profile/5')
    .then(response => {
       
        //get the response sent by the API. setState to the response data this.setState({posts:response.data})
        this.setState({personalData:response.data.result.recordsets[0][0]});
        this.setState({skills:response.data.result.recordsets[1]});
        console.log(this.state.personalData.FirstName)
        console.log(this.state.skills)
    })
    .catch(error => {
        console.log(error)
    })
}
  handleEdit(){
    document.getElementById('profile').style.display="none";
    document.getElementById('editProfile').style.display="block";
  }
  handleCancel(){
    document.getElementById('editProfile').style.display="none";
    document.getElementById('profile').style.display="block";
  }
  handleUpdate(event){
    event.preventDefault();
    console.log(this.state);
  }
  handleChange(e){
    if (e.target.name != "Availability"){
      this.setState({[e.target.name]:e.target.value})
    }else{
      if(e.target.value=="Available"){
        this.setState({Status:true})
      }else{
        this.setState({Status:false})
      }
    }
  }
    render(){
      //getting the status value and converting it to a string value
      var statusValue ;
      if(this.state.personalData.Status==true){
        statusValue="Available";
      }else{
        statusValue="Not Available"
      }
        return (
            <MDBCol>
              <MDBCard style={{ width: "30rem" }} id="profile"style={{display:"block"}}>
                <MDBCardImage className="img-fluid" src="http://simpleicon.com/wp-content/uploads/user1.png" waves />
                <MDBCardBody>
                  <MDBCardTitle>Ravinga Sewwandi Perera</MDBCardTitle>
                  <MDBCardText>
                    I am capable of gas negima. Energic soul.<br></br>
                    <div class="row">
                      <div class="col-md-5">FirstName</div>
                      <div class="col-md-5"><input name="FirstName" style={{marginTop:"10px"}}placeholder={this.state.personalData.FirstName} disabled></input><br></br></div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">LastName</div>
                      <div class="col-md-5"><input name="LastName" style={{marginTop:"10px"}}placeholder={this.state.personalData.LastName} disabled></input><br></br></div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">BaseLocation</div>
                      <div class="col-md-5"><input name="BaseLocation" style={{marginTop:"10px"}}placeholder={this.state.personalData.BaseLocation} disabled></input><br></br></div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">status</div>
                      <div class="col-md-5"><input name="Status" style={{marginTop:"10px"}}placeholder={statusValue} disabled></input><br></br></div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">ContactNumber</div>
                      <div class="col-md-5"><input name="ContactNumber" style={{marginTop:"10px"}}placeholder={this.state.personalData.ContactNumber} disabled></input><br></br></div>
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
                    I am capable of gas negima. Energic soul.<br></br>
                    <div class="row">
                      <div class="col-md-5">FirstName</div>
                      <div class="col-md-5"><input name="FirstName" value={this.state.FirstName} style={{marginTop:"10px"}}placeholder={this.state.personalData.FirstName} onChange={this.handleChange}></input><br></br></div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">LastName</div>
                      <div class="col-md-5"><input name="LastName" value={this.state.LastName}style={{marginTop:"10px"}}placeholder={this.state.personalData.LastName} onChange={this.handleChange}></input><br></br></div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">BaseLocation</div>
                      <div class="col-md-5"><input name="BaseLocation" value={this.state.BaseLocation}  style={{marginTop:"10px"}}placeholder={this.state.personalData.BaseLocation} onChange={this.handleChange}></input><br></br></div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">ContactNumber</div>
                      <div class="col-md-5"><input name="ContactNumber" value={this.state.ContactNumber} style={{marginTop:"10px"}} placeholder={this.state.personalData.ContactNumber} onChange={this.handleChange}></input><br></br></div>
                    </div>
                    
                    
                                        
                    
                    <br></br>
                    <label style={{marginLeft:"70px"}}>
                       <input type="radio"  name ="Availability" value="Available" onChange={this.handleChange}/>Available                                           
                    </label>
                    <label style={{marginLeft:"125px"}}>
                        <input type="radio" name ="Availability" value="Not Available"  onChange={this.handleChange} /> Not Available                                   
                    </label>
                  </MDBCardText>
                  <div class="row">
                    <div class="col-md-5"><MDBBtn href="#" onClick={this.handleUpdate}>Update</MDBBtn></div> 
                    <div class="col-md-5"><MDBBtn href="#" onClick={this.handleCancel}>Cancel</MDBBtn></div>  
                  </div>                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
    }
}
export default Profilecard;