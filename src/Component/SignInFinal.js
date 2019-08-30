import React from "react";
import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
  MDBModalFooter
} from "mdbreact";
import "./Home.css";

export default class SignInFinal extends React.Component {
  constructor(props){
    super(props);
    this.state={
        UserEmail:'',
        Password:'',
        ContactNumber:'',
        UserType:0    
     }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        if(event.target.name!="UserType"){
          this.setState({[event.target.name]:event.target.value})
        }else{
          if(event.target.value=="Customer"){
            this.setState({UserType:0})
          }else{
            this.setState({UserType:1})
          }
        }
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post( "http://localhost:3000/user/register/", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
  

  render() {   
   
    return (
      <div id="classicformpage">
        
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign In To The WebSite
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                      <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center py-4">Sign up</p>
                                <div className="grey-text">
                                <label style={{marginLeft:"70px"}}>
                                    <input type="radio"  name ="UserType" value="Customer" onChange={this.handleChange}/>
                                    Customer       
                                </label>
                                <label style={{marginLeft:"125px"}}>
                                    <input type="radio" name ="UserType" value="Worker"  onChange={this.handleChange} />
                                    Worker
                                </label>
                                <MDBInput
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
                                />
                                <MDBInput
                                    label="Your Password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="Password"
                                    onChange={this.handleChange}
                                />                                                    
                                <MDBInput
                                    label="Your Contact Number"
                                    icon="phone"
                                    group
                                    type="text"
                                    validate
                                    name="ContactNumber"
                                    onChange={this.handleChange}
                                />                                                              
                                </div>                                
                                <div className="text-center py-4 mt-3">
                                <MDBBtn color="indigo" type="submit">
                                    Sign Up
                                </MDBBtn>
                                </div>
                            </form>
                      </MDBCardBody>                     
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

