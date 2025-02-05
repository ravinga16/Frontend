import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBAnimation } from 'mdbreact';
import axios from 'axios';
import './style.css'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserEmail:"",
            Password:"",
            ContactNumber:"",
            UserType:"",
          
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleWorkerType=this.handleWorkerType.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    //Handling Functions
    handleChange(event){
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
    }
    handleWorkerType(event){
        event.preventDefault();
        if(event.target.value=="Customer"){
            this.setState({UserType:0}); //If customer : 0
        }else{
            this.setState({UserType:1}); //If worker : 1
        }
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.Password.length > 6 && this.state.ContactNumber.length == 10) {
            axios.post("http://localhost:3000/user/register/", this.state)
                .then(response => {
                    console.log(response.data.message)

                    if (response.data.message == "User Created") {
                        this.props.history.push('/');
                        console.log("user created")
                    } else if (response.data.message == "User Already Exists") {
                        alert("User Name Already Taken. Check Another");
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        }else{
            if(this.state.ContactNumber.length!=10){
                alert("Enter valid phone number")
            }else{
                alert("Password should contain atleast 7 characters")
            }
        }
        
    }
    render(){
        return (

            <div className="bg">
            <MDBRow>
                {/* sign in form */}
                <MDBContainer>               
                    {/* <MDBAnimation type="fadeInRight" delay=".3s"> */}
                    <MDBCard style={{marginTop:"15%", marginLeft:"25%", width:"50%"}}>
                        <MDBCardBody>
                        <form onSubmit={this.handleSubmit}>
                            <p className="h4 text-center py-4">Sign Up</p>
                            <div className="grey-text">
                                {/* selection whether user or client */}
                                <label style={{marginLeft:"10%"}} id="customersign">
                                    <input type="radio"   name ="UserType" value="Customer" onChange={this.handleWorkerType} required/>Customer       
                                </label>
                                
                                <label style={{marginLeft:"50%"}}>
                                    <input type="radio" id="workersign" name ="UserType" value="Worker"  onChange={this.handleWorkerType} required />Worker
                                </label>

                                {/*  */}
                                    <MDBInput
                                        id="emailsignup"
                                        label="Your Email"
                                        icon="envelope"
                                        group
                                        text-color="indigo"
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        name="UserEmail"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <MDBInput
                                        id="passwordsign"
                                        label="Your Password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        error="wrong"
                                        success="right"
                                        name="Password"
                                        onChange={this.handleChange}
                                        required
                                    />                                                    
                                    <MDBInput
                                        id="contactnumbersignup"
                                        label="Your Contact Number"
                                        icon="phone"
                                        group
                                        type="number"
                                        validate
                                        name="ContactNumber"
                                        onChange={this.handleChange}
                                        required
                                    />       
                            </div>
                            <div className="text-center py-4 mt-3">
                            <MDBBtn  id="registersignup" color="cyan" type="submit">
                                Register
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCardBody>                        
                    </MDBCard>
                    {/* </MDBAnimation> */}
                   
                </MDBContainer>
            </MDBRow>
            </div>

            
          );
    }
}

export default SignIn;