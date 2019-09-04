import React from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline} from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import appointment from './appointment';
import axios from 'axios';
export default class WorkerNavBar extends React.Component {
  constructor(props){
    super(props);
    // this.handleClick=this.handleClick.bind(this);
  }
  // handleClick(){
  //   axios.post( "http://localhost:3000/user/logout")
  //         .then(response => {       
  //             console.log(response.data,"************************")   //  
  //             localStorage.setItem("UserId","null") ;
  //             localStorage.setItem("sessionEmail","null") ;
  //             localStorage.setItem("sessionType","null") ;
                    
  //         })
  //         .catch(error => {
  //             console.log(error)//             
  //         })
          
  // }
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color=" teal darken-4" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Find Your Worker</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {/* <MDBNavItem active> */}
            <MDBNavItem >
              <MDBNavLink to="/worker/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/worker/appointment/">Appointments</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/worker/request/">Job Request</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
              <MDBNavLink to="/">Log Out</MDBNavLink>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          {/* <MDBNavbarNav right>
            <MDBNavItem>
              <button onClick={this.handleClick}><Link to="/">logout</Link></button>
            </MDBNavItem>
          </MDBNavbarNav>   */}
        </MDBCollapse>
      </MDBNavbar>
      
    </Router>
    );
  }
}

