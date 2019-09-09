import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

export default class UserNavBar extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick(){
    axios.post( "http://localhost:3000/user/logout")
          .then(response => {       
              console.log(response.data,"************************")   //  
              localStorage.removeItem("UserId") ;
              localStorage.removeItem("sessionEmail") ;
              localStorage.removeItem("sessionType") ;
                    
          })
          .catch(error => {
              console.log(error)//             
          })
          window.location.reload();
                    
  }
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color=" unique-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Find Your Worker</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/client/profile/">User Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/client/search/">Search Worker</MDBNavLink>
            </MDBNavItem>  
            <MDBNavItem>
              <MDBNavLink to="/client/order/">Order Detail</MDBNavLink>
            </MDBNavItem> 
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <button onClick={this.handleClick}><Link to="/">logout</Link></button>
            </MDBNavItem>
          </MDBNavbarNav>          
        </MDBCollapse>
      </MDBNavbar>  
    </Router>
    );
  }
}

