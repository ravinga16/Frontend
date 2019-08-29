import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


export default class SkillCard extends React.Component{
    render(){
        return(
            <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    
                    <MDBCardBody>
                    <MDBCardTitle>{this.props.title}</MDBCardTitle>
                    {/* <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText> */}
                    <MDBBtn href="http://localhost:3001/">Book Now</MDBBtn>
                    <MDBBtn href="/UserProfile/">Book Later</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
}