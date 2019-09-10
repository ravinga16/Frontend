import React from 'react';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

export default class CancelledBooking extends React.Component{
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
    state={
        collapseID: "collapse3"
      }
      
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      
      render() {
      const { collapseID } = this.state;
        return (
          <MDBContainer>
            <MDBContainer className="mt-3">
              <MDBCard className="mt-3" style={{ width: "20rem" }}>
                <button onClick={this.toggleCollapse("collapse1")} style={{backgroundColor:"#e53935", color:"white", height:"38px"}}>
                  {this.props.title} job  
                  <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </button>
                <MDBCollapse id="collapse1" isOpen={collapseID}>
                  <MDBCardBody>
                  <form style={{ textAlign: "left",display:"block" ,fontSize:"13px"}} name="showProfile">                              
                              <div class="row">
                                  <div class="col-md-5">Order Id: </div>
                                  <div class="col-md-5">{this.props.OrderId}
                                      {/* <input type="text" name="OrderId" placeholder={this.props.OrderId} disabled></input> */}
                              </div>
                              </div><br></br> 
                                {/*  */}
                              <div class="row">
                                  <div class="col-md-5">Worker Id: </div>
                                  <div class="col-md-5">{this.props.WorkerId}
                                      {/* <input type="text" name="WorkerId" placeholder={this.props.WorkerId} disabled></input> */}
                              </div>
                              </div><br></br> 
                                {/*  */}
                                <div class="row">
                                  <div class="col-md-5">OrderDate: </div>
                                  <div class="col-md-5">{this.convertDate(this.props.OrderDate)}
                                      {/* <input type="text" name="OrderDate" placeholder={this.props.OrderDate} disabled></input> */}
                              </div>
                              </div><br></br>
                               {/*  */}
                               <div class="row">
                                  <div class="col-md-5"> Cancellation Reason: </div>
                                  <div class="col-md-5">{this.props.CancellationReason}
                                      {/* <input type="text" name="CancellationReason" placeholder={this.props.CancellationReason} disabled></input> */}
                              </div>
                              </div><br></br> 
                               
                  </form>
      
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </MDBContainer>
          </MDBContainer>
          );
        }
} 