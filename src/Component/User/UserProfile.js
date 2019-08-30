import React, { Component } from "react";
import {  MDBRow, MDBCol } from "mdbreact";

import UserNavBar from "./UserNavBar";
import Userprofilecard from "./Userprofilecard";

export default class UserProfile extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div>
      <UserNavBar/>
      <MDBRow>
        <MDBCol md="4"><Userprofilecard/></MDBCol>
        <MDBCol md="4">.col-md-4</MDBCol>
        <MDBCol md="4">.col-md-4</MDBCol>
      </MDBRow>
    </div>
    
    );
  }
}

// ReactDOM.render(<UserProfile />, document.getElementById('root'));