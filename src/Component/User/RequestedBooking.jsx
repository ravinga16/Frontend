import React from 'react';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import axios from 'axios';

export default class RequestedBooking extends React.Component{
    state={
        collapseID: "collapse3"
      }
      
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

        //Cancel request button event
        cancelRequest(RequestId, e){
            e.preventDefault()
            console.log("cancelling req id", RequestId);
            axios.create({withCredentials:true}).delete("http://localhost:3000/requests/delete/"+RequestId)
            .then(response=>{
                console.log(response.data)
            })
        }
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
                                  <div class="col-md-5">Request Id: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="RequestId" placeholder={this.props.RequestId} disabled></input>
                              </div>
                              </div><br></br> 
                                {/*  */}
                              <div class="row">
                                  <div class="col-md-5">Worker Id: </div>
                                  <div class="col-md-5">
                                      <input type="text" name="WorkerId" placeholder={this.props.WorkerId} disabled></input>
                              </div>
                              </div><br></br> 
                              <button onClick={(e)=> this.cancelRequest(this.props.RequestId, e)}> Delete Requst</button>
                                
                               
                  </form>
      
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </MDBContainer>
          </MDBContainer>
          );
        }
} 