import React from 'react';
import {  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';
export default class Showskill extends React.Component{
    constructor(props){
      super(props);
      this.state={
          skillId:"" 
      }
 
    }
    //Delete a skill
    deleteSkill(SkillId, e){
      e.preventDefault();
      console.log(SkillId)
      axios.create({withCredentials:true}).delete("http://localhost:3000/worker/skill/"+localStorage.getItem("UserId"), { data: { "skillId": SkillId } })
      .then(response=>{
        console.log("delete skill;", response.data);        
      })
      window.location.reload();
    }
    render(){
      
        return (
            <MDBCol style={{marginTop:"15px"}}>
              <MDBCard style={{ width: "100%" }}>                
                <MDBCardBody>
                  <MDBCardTitle>{this.props.SkillTitle} </MDBCardTitle>
                  <MDBCardText>
                    <div class="row">
                      <div class="col-md-5">{this.props.Description}
                   <br></br>
                   {this.props.HourlyCharge}</div>
                      <div class="col-md-5"> <button onClick={(e) => this.deleteSkill(this.props.SkillId, e)} style={{height:"45px", width:"80px"}}>Delete</button></div>
                    </div>
                   
                  </MDBCardText>
                 
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
    }
}