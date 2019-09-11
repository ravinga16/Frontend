import React from 'react';
// import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';


class RequestCard extends React.Component{

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
   

    acceptRequest(RequestId , e){
      e.preventDefault();
      console.log(RequestId)
      //get the request id from param and proceed accept by id
      let varUrl = "http://localhost:3000/requests/accept/" + RequestId;
      console.log("varUrl ",varUrl);
      let sendObj = {
        "WorkerId":localStorage.getItem("UserId")
      }
      axios.post(varUrl, sendObj)
      .then(response => {
        console.log(response.data)
      })
      document.getElementById(RequestId).style.display="none";

    }
    render(){
        return (
          <tr id={this.props.RequestId} >
            <td>{this.props.RequestId} </td>
            <td> {this.props.CreatedDate}</td>
            <td>{this.props.ClientId} </td>
            <td>{this.props.StartTime} </td>
            <td>{this.props.ExpectedEndTime} </td>
            <td> {this.props.OrderDate}</td>
            <td> {this.props.OrderLocation}</td>
            <td> {this.matchSkill(this.props.SkillId)}</td>
            <td><button onClick={(e) => this.acceptRequest(this.props.RequestId, e)}>Accept</button></td>            
          </tr>
          )
    }
}

export default RequestCard;