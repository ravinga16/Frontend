import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


class RequestCard extends React.Component{
    render(){
        return (
            <MDBCol>
              <MDBCard style={{ width: "22rem" , marginTop:"15px"}}>
               
                <MDBCardBody>
                  <MDBCardTitle>Request ID : {this.props.RequestId}</MDBCardTitle>
                  <MDBCardText>
                  CreatedDate: {this.props.Crea}<br></br>
                  ClientId:{this.props.ClientId}<br></br>
                  StartTime:{this.props.StartTime}<br></br>
                  ExpectedEndTime:{this.props.ExpectedEndTime}<br></br>
                  OrderDate:{this.props.OrderDate}<br></br>
                  OrderLocation:{this.props.OrderLocation}<br></br>
                  SkillId:{this.props.SkillId}<br></br>
                  </MDBCardText>
                  <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
    }
}

export default RequestCard;