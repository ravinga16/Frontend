import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class ImageCard extends React.Component{
    render(){
        return(
            <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://www.colourbox.com/preview/27873730-user-simple-icon-vector.jpg" waves />
                <MDBCardBody>
                <MDBCardTitle style={{textAlign:"centre"}}>Card title{this.props.name}</MDBCardTitle>
                <MDBCardText>
                    Description About Themself
                </MDBCardText>
                <MDBBtn href="#">Upload Profile Picture</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        )
    }
}