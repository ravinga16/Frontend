import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class ProfileCard extends React.Component {
    render() {
        return (
            <MDBCol>
                <MDBCard style={{ width: "30rem" }}>
  
                    <MDBCardBody>
                        <MDBCardTitle>Profile</MDBCardTitle>
                        <MDBCardText>
                            
                            First Name:<input type="text" name="fname"></input><br></br>
                            Last Name:<input type="text" name="fname"></input><br></br>
                        </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
}

export default ProfileCard;