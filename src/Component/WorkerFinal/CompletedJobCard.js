import React  from "react";
import { MDBBtn, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";

class CompletedJobCard extends React.Component {
  constructor(props){
    super(props);
   
    this.convertTime=this.convertTime.bind(this)
    this.convertDate=this.convertDate.bind(this)
  }

  //converting date and time
  convertTime(time) {
    return (<p>{new Date(time).toUTCString().split(" ")[4]}</p>)
  }

  convertDate(OrderDate) {
    return (<p>{new Date(OrderDate).toUTCString().split(" ").slice(1, 4).join(" ")}</p>)
  }
render() {
  return (
        <tr>
            <td>{this.props.OrderId}</td>
            <td>{this.props.ContactNumber}</td>
            <td>{this.props.SkillTitle}</td>
            <td>{this.props.OrderDate}</td>
            <td>{this.props.StartTime }</td>
            <td> {this.props.EndTime}</td>
            <td>{this.props.FinalPrice}</td>
            <td>{this.props.OrderLoaction}</td>
            <td>{this.props.FirstName}</td>
            <td>{this.props.LastName}</td>
            <td>{this.props.Duration}</td>
            <td>{this.props.HourlyCharge}</td>
            <td>{this.props.Rate}</td>
            <td>{this.props.Review}</td>
        </tr>   
     );
  }
}

export default CompletedJobCard;