import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';
export default class Showskill extends React.Component{
    constructor(props){
      super(props);
      this.state={
        
      }
      this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(){
      
    }
    render(){
      
        return (
            <MDBCol style={{marginTop:"15px"}}>
              <MDBCard style={{ width: "30rem" }}>                
                <MDBCardBody>
                  <MDBCardTitle>{this.props.SkillTitle} {this.props.SkillId}</MDBCardTitle>
                  <MDBCardText>
                    <div class="row">
                      <div class="col-md-5">{this.props.Description}
                   <br></br>
                   {this.props.HourlyCharge}</div>
                      <div class="col-md-5"> <MDBBtn >Delete</MDBBtn></div>
                    </div>
                   
                  </MDBCardText>
                 
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
    }
}