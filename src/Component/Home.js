import React from "react";
import axios from 'axios';
import "./Home.css";
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


export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
        UserEmail:'',
        Password:'',
         
     }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
      event.preventDefault();
      console.log(this.state);
      // axios.post( "http://localhost:3000/user/register/", this.state)
      //     .then(response => {
      //         console.log(response)
      //     })
      //     .catch(error => {
      //         console.log(error)
      //     })
    }
  

  render() {   
   
    return (
      <div name="classicformpage">
        
        {/* <MDBView> */}
          {/* <MDBMask className="d-flex justify-content-center align-items-center gradient"> */}
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Meet Your Worker And Customer!
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
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Log In
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                                    label="Your Email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="UserEmail"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="Password"
                                    onChange={this.handleChange}
                                />                                                    
                                
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="white"  >
                            <Link to="/worker/profile/">Log In</Link>        
                      
                          </MDBBtn>
                          <hr className="hr-light" />
                     </div>
                      </MDBCardBody>
                      <MDBModalFooter className="mx-5 pt-3 mb-1">
                      <p className="font-small grey-text d-flex justify-content-end">
                            Not a member?
                        <a><Link to="/SignIn/"> Sign Up</Link></a>             
                    </p>
                    </MDBModalFooter>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          {/* </MDBMask> */}
        {/* </MDBView> */}
        <h1>hi</h1>
      </div>
    );
  }
}

