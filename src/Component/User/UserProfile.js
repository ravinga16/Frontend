import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBContainer } from "mdbreact";
import UserNavBar from "./UserNavBar";
import Userprofilecard from "./Userprofilecard";
import NotificationCard from "./notificationCard";

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

      <MDBContainer>
        <MDBRow>
          <MDBCol md="6"><Userprofilecard/></MDBCol>
          <MDBCol md="6"><NotificationCard/></MDBCol>
    
        </MDBRow>
      </MDBContainer>
      
    </div>
    
    );
  }
}

// ReactDOM.render(<UserProfile />, document.getElementById('root'));