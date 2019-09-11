import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class AvailableWorkerCard extends React.Component{
    render(){
        return(          
            <MDBCard style={{ width: "100%" ,marginTop:"15px" , backgroundColor:"#e3f2fd "}}>                
                <MDBCardBody>
                <MDBCardTitle>{this.props.firstName} {this.props.lastName}</MDBCardTitle>
                <MDBCardText>   
                WorkerId:{this.props.workerId} <br></br>
                FirstName:{this.props.firstName} <br></br>
                LastName:{this.props.lastName}<br></br>
                BaseLocation:{this.props.baseLocation}<br></br>
                Rate:{this.props.rate}<br></br>
                SkillDescription:{this.props.skillDescription}<br></br>
                HourlyCharge:{this.props.hourlyCharge}<br></br>
                </MDBCardText>                
                </MDBCardBody>
            </MDBCard>
        
        )
    }
}


export default AvailableWorkerCard;