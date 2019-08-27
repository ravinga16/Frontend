import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import "./SignIn.css";
export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            contact:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        alert(this.state.email)
    }
    render(){
        return (
            <div className="bg">             
            <container style={{marginLeft:"800px"}}>
                <MDBContainer >
                    <MDBRow >
                        <MDBCol md="6">
                        <MDBCard >
                            <MDBCardBody > 
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center py-4">Sign up</p>
                                <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="email"
                                    onChange={this.handleChange}
                                />
                                                    
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    name="password"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Your contact number"
                                    icon="phone"
                                    group
                                    type="text"
                                    validate
                                    name="contact"
                                    onChange={this.handleChange}
                                />
                                </div>
                                <div className="text-center py-4 mt-3">
                                <MDBBtn color="cyan" type="submit">
                                    Sign Up
                                </MDBBtn>
                                </div>
                            </form>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer> 
                </container>                          
            </div>
      
          );
    }
}

