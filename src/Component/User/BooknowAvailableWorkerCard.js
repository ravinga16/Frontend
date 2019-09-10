import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class BooknowAvailableWorkerCard extends React.Component{
    render(){
        return(          
            <MDBCard >                
                <MDBCardBody>
                <MDBCardTitle>{this.props.firstName} {this.props.lastName}</MDBCardTitle>
            
                workerId:{this.props.workerId} <br></br>
                firstName:{this.props.firstName} <br></br>
                lastName:{this.props.lastName}<br></br>
                baseLocation:{this.props.baseLocation}<br></br>
                rate:{this.props.rate}<br></br>
                skillDescription:{this.props.skillDescription}<br></br>
                hourlyCharge:{this.props.hourlyCharge}<br></br>
                <button style={{width:"100%", height:"55px", backgroundColor:"#90caf9 "}}onClick={this.handleBookNowSendReq}>Send Request</button>
                            
                </MDBCardBody>
            </MDBCard>
        
        )
    }
}


export default BooknowAvailableWorkerCard;