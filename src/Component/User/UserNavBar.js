import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Search from './Search';
export default class UserNavBar extends Component {
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
              <MDBNavLink to="/profile/">User Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/usernavbar/search/">Search Worker</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/usernavbar/something/">Something</MDBNavLink>
            </MDBNavItem> 
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Order</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem >
                  <Link to="/usernavbar/order/upcoming/">Upcoming Order</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem href="http://localhost:3001/">Action</MDBDropdownItem>
                  <MDBDropdownItem >
                  <Link to="/usernavbar/order/completed/">Completed Order</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                  <Link to="/usernavbar/order/cancelled/">Cancelled Order</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                  <Link to="/usernavbar/order/else/">Something else</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>           
          </MDBNavbarNav>          
        </MDBCollapse>
      </MDBNavbar>
      <Route path="/search/" Component={Search}/>
    </Router>
    );
  }
}

