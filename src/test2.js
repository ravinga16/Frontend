import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Tets = () => {
  return (
     <MDBCol>
         <p>dd</p>
        <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />

        </MDBCard>
     </MDBCol>
    //     <MDBCardBody>
    //       <MDBCardTitle>Card title</MDBCardTitle>
    //       <MDBCardText>
    //         Some quick example text to build on the card title and make
    //         up the bulk of the card&apos;s content.
    //       </MDBCardText>
    //       <MDBBtn href="#">MDBBtn</MDBBtn>
    //     </MDBCardBody>
    //   </MDBCard>
    // </MDBCol>
  )
}

export default Tets;