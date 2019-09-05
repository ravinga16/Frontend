import React  from "react";
import { MDBBtn, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";

class CompletedJobCard extends React.Component {

render() {
  return (
        <tr>
            <td>{this.props.OrderId}</td>
            <td>{this.props.ContactNumber}</td>
            <td>{this.props.SkillTitle}</td>
            <td>{this.props.OrderDate}</td>
            <td>{this.props.ExpectedStartTime}</td>
            <td> {this.props.ExpectedEndTime}</td>
            <td>{this.props.ExpectedPrice}</td>
            <td>{this.props.OrderLoaction}</td>
            <td>{this.props.FirstName}</td>
            <td>{this.props.LastName}</td>
            <td>{this.props.Duration}</td>
            <td>{this.props.HourlyCharge}</td>
        </tr>   
     );
  }
}

export default CompletedJobCard;