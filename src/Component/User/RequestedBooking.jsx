import React from 'react';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import axios from 'axios';

export default class RequestedBooking extends React.Component{
  constructor(props){
      super(props);
      this.state={
        availableSkills:[]
      }
      
      this.matchSkill=this.matchSkill.bind(this);
    }

    componentDidMount(){
      //getting skill list
      axios.get("http://localhost:3000/dataservices/getallskills", {withCredentials:true})
      .then(res => {
          console.log(res.data.recordsets)
          this.setState({availableSkills: res.data.recordsets[0]})
          
      })
   }
    //retrieve skill titles and display
    matchSkill(SkillId){
      let i=0  
      for(i ;i<this.state.availableSkills.length;i++){   
        if(this.state.availableSkills[i].SkillId == SkillId){
          return(<p>{this.state.availableSkills[i].SkillTitle}</p>)
        }
      }
    }

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
            window.location.reload();
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
                                  <div class="col-md-5">{this.props.RequestId}
                                      {/* <input type="text" name="RequestId" placeholder={this.props.RequestId} disabled></input> */}
                              </div>
                              </div><br></br> 
                                {/*  */}
                              <div class="row">
                                  <div class="col-md-5">SkillId : </div>
                                  <div class="col-md-5">{this.matchSkill(this.props.SkillId)}
                                      {/* <input type="text" name="SkillId" placeholder={this.props.SkillId} disabled></input> */}
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