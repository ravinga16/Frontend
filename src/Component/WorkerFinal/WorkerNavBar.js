import React from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline} from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import appointment from './appointment';

export default class WorkerNavBar extends React.Component {
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
            <MDBNavItem active>
              <MDBNavLink to="/worker/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/worker/appointment/">Appointments</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <MDBNavLink to="/">Log Out</MDBNavLink>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Switch>
          {/* <Route path="/worker/" component={Profile} /> */}
          <Route path="/worker/appointment/" component={appointment}/>
      </Switch>
    </Router>
    );
  }
}

