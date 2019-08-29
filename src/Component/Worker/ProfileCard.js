import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class ProfileCard extends React.Component {
    constructor(props){
        super(props);
        this.Change=this.Change.bind(this);
        this.state={
            disabled: true
        }
        
    }
    Change(){   
        this.setState({disabled:!this.state.disabled})
        
    }
    render() {
        return (
            <MDBCol>
                <MDBCard style={{ width: "55rem" }}>
  
                    <MDBCardBody>
                        <MDBCardTitle>Profile</MDBCardTitle>
                        <MDBCardText style={{textAlign:"left"}}>                            
                            First Name:<input style={{marginTop:"10px",marginLeft:"100px"}} type="text" name="fname" placeholder={"ravinga"} disabled={this.state.disabled?"disabled":""}></input><br></br>
                            Last Name:<input style={{marginTop:"10px",marginLeft:"100px"}} type="text" name="fname" placeholder={"ravinga"}disabled></input><br></br>
                            Base Location:<input style={{marginTop:"10px",marginLeft:"80px"}} type="text" name="fname" placeholder={"ravinga"}disabled></input><br></br>
                            Availability:<input style={{marginTop:"10px",marginLeft:"99px"}} type="text" name="fname" placeholder={"ravinga"}disabled></input><br></br>
                        </MDBCardText>
                        <MDBBtn  onClick={this.Change}>Update Profile</MDBBtn>
                        <MDBBtn  onClick={this.Change}>Confirm Update</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
}

export default ProfileCard;