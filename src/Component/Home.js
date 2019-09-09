import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBAnimation} from 'mdbreact';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserEmail: "",
            Password: "",
            isAuth: "",
            id:"",
            test:"ravinga"

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Handling Functions
    handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
       
        // this.props.history.push('/redirected/');
        axios.post( "http://localhost:3000/user/login", this.state)
          .then(response => {   
              var checkMessage = response.data.message;
              if(checkMessage=="Unauthorized"){
                this.setState({isAuth:false});
                alert("Enter correct Details");                  
              }else{
                  if(checkMessage=="Authorized"){
                      this.setState({isAuth:true});
                      this.setState({id:response.data.result.UserId})
                      localStorage.setItem("UserId",response.data.result.UserId);
                      localStorage.setItem("sessionEmail",response.data.result.sessionEmail);
                      localStorage.setItem("sessionType",response.data.result.sessionType);
                      console.log("UserId:", localStorage.getItem("UserId"))//
                      //Redirect based on the UserType
                      if(response.data.result.sessionType=="Client"){
                        this.props.history.push('/client/profile/');
                      }else if(response.data.result.sessionType=="worker"){
                        this.props.history.push('/worker/profile/');
                      }
                      
                  }
              }           
          })
          .catch(error => {
              console.log(error)//
              alert("Enter correct Details")//
          })
    }
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                <MDBContainer>
                        {/* <MDBRow>
                            <MDBCol md="6"> */}
                        <MDBAnimation type="fadeInRight" delay=".3s">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.handleSubmit}>
                                        <p className="h4 text-center py-4">Log In</p>
                                        <div className="grey-text">
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
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="cyan" type="submit">
                                                Log In
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>

                                {/* foot note */}
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                <a className="blue-text ml-1"><Link to="/signin/">Sign Up</Link></a>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBAnimation>
                        {/* </MDBCol>
                            </MDBRow> */}
                    </MDBContainer>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Home;