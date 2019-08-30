import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Userprofilecard extends React.Component{
    render(){
        return(
            <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg" waves />
                <MDBCardBody>
                <MDBCardTitle>Ravinga Perera</MDBCardTitle>
                <MDBCardText style={{textAlign:"left"}}>
                    <div class="row">
                        <div class="col-md-6">User Name:                      
                        </div>
                        <div class="col-md-6">
                        <input type="text" name="firstname"></input>
                        </div>

                    </div>
                     <br></br><br></br>
                    Email: <input type="email" name="firstname"></input><br></br>
                    Password: <input type="password" name="firstname"></input><br></br>
                    Contact Number: <input type="int" name="firstname"></input><br></br>
                </MDBCardText>
                <MDBBtn href="#">Edit Profile</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        );
    }
}

export default Userprofilecard;