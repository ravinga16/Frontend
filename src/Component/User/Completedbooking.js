import React from 'react';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

export default class CompletedBooking extends React.Component{
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
              <MDBCard className="mt-3" style={{ width: "30rem" }}>
                <button onClick={this.toggleCollapse("collapse1")}>
                  {this.props.title} job Id 
                  <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                </button>
                <MDBCollapse id="collapse1" isOpen={collapseID}>
                  <MDBCardBody>
                  <form style={{ textAlign: "left",display:"block" ,fontSize:"13px"}} id="showProfile">   
                                <div class="row">
                                  <div class="col-md-5">Order ID: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="OrderId" placeholder={this.props.OrderId} disabled></input>
                              </div>
                              </div><br></br> 
                                {/*  */}
                                
                              {/*  */}
                              <div class="row">
                                  <div class="col-md-5">Order Date: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="OrderDate" placeholder={this.props.OrderDate} disabled></input>
                              </div>
                              </div><br></br> 
                              <div class="row">
                                  <div class="col-md-5">Worker ID: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="WorkerId" placeholder={this.props.WorkerId} disabled></input>
                              </div>
                              </div><br></br> 
                                {/*  */}
                              <div class="row">
                                  <div class="col-md-5">Worker Name: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="Name" placeholder={this.props.Name} disabled></input>
                              </div>
                              </div><br></br> 
                              
                               {/*  */}
                               <div class="row">
                                  <div class="col-md-5">Start Time: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="StartTime" placeholder={this.props.StartTime} disabled></input>
                              </div>
                              </div><br></br> 
                               {/*  */}
                               <div class="row">
                                  <div class="col-md-5">End Time: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="EndTime" placeholder={this.props.EndTime} disabled></input>
                              </div>
                              </div><br></br> 
                              {/*  */}
                              <div class="row">
                                  <div class="col-md-5">Final Price: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="FinalPrice" placeholder={this.props.FinalPrice} disabled></input>
                              </div>
                              </div><br></br> 
                              
                              <MDBBtn onClick={this.handleEditProfile} style={{marginLeft:"120px"}}>Edit Profile</MDBBtn>
                  </form>
      
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </MDBContainer>
          </MDBContainer>
          );
        }
} 