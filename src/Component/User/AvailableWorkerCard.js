import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class AvailableWorkerCard extends React.Component{
    render(){
        return(          
            <MDBCard style={{ width: "100%" ,marginTop:"15px"}}>                
                <MDBCardBody>
                <MDBCardTitle>{this.props.firstName} {this.props.lastName}</MDBCardTitle>
                <MDBCardText>   
                workerId:{this.props.workerId} <br></br>
                firstName:{this.props.firstName} <br></br>
                lastName:{this.props.lastName}<br></br>
                baseLocation:{this.props.baseLocation}<br></br>
                rate:{this.props.rate}<br></br>
                skillDescription:{this.props.skillDescription}<br></br>
                hourlyCharge:{this.props.hourlyCharge}<br></br>
                </MDBCardText>                
                </MDBCardBody>
            </MDBCard>
        
        )
    }
}


export default AvailableWorkerCard;