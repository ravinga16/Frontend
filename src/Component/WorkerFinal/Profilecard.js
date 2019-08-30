import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Profilecard extends React.Component{
    render(){
        return (
            <MDBCol>
              <MDBCard style={{ width: "30rem" }}>
                <MDBCardImage className="img-fluid" src="http://simpleicon.com/wp-content/uploads/user1.png" waves />
                <MDBCardBody>
                  <MDBCardTitle>Ravinga Sewwandi Perera</MDBCardTitle>
                  <MDBCardText>
                    I am capable of gas negima. Energic soul.<br></br>
                    <input style={{marginTop:"10px"}}placeholder="First Name"></input><br></br>
                    <input style={{marginTop:"10px"}}placeholder="First Name"></input><br></br>
                    <input style={{marginTop:"10px"}}placeholder="First Name"></input><br></br>
                    <input style={{marginTop:"10px"}}placeholder="First Name"></input><br></br>
                  </MDBCardText>
                  <MDBBtn href="#">Edit Profile</MDBBtn>
                  <MDBBtn href="#" disabled>Done </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
    }
}
export default Profilecard;