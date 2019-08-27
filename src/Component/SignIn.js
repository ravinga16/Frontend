import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            contact:'',
            usertype:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return (
            <div style={{marginLeft:"500px",marginTop:"200px"}}>             
            <container >               
                <MDBContainer >
                    <MDBRow >
                        <MDBCol md="6">
                        <MDBCard >
                            <MDBCardBody > 
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center py-4">Sign up</p>
                                <div className="grey-text">
                                <label style={{marginLeft:"100px"}}>
                                    <input type="radio"  name ="usertype" value="Customer" onChange={this.handleChange}/>
                                    Customer       
                                </label>
                                <label style={{marginLeft:"125px"}}>
                                    <input type="radio" name ="usertype" value="Worker"  onChange={this.handleChange} />
                                    Worker
                                </label>
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

