import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class Showskill extends React.Component{
    render(){
        return (
            <MDBCol style={{marginTop:"15px"}}>
              <MDBCard style={{ width: "30rem" }}>
                
                <MDBCardBody>
                  <MDBCardTitle>Skill Title</MDBCardTitle>
                  <MDBCardText>
                   Skill Description provided
                  </MDBCardText>
                  <MDBBtn href="#">Delete</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
    }
}