import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class Notification extends React.Component{
    render(){
        return (     
              <MDBCard style={{ width: "30rem" , marginTop:"15px"}}>                
                <MDBCardBody style={{fontSize:"13px"}}>
                  <MDBCardTitle style={{fontSize:"18px"}}>Notification Details</MDBCardTitle>             
                    Title: {this.props.title}<br></br>
                    Amount: {this.props.amount}<br></br>               
                  {/* Should redirect to the paypal bar */}
                  <MDBBtn  style={{marginLeft:"300px"}}>Pay Here</MDBBtn>
                </MDBCardBody>
              </MDBCard>
 
          )
    }
}