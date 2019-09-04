import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Profilecard from "./Profilecard";
import WorkerNavBar from "./WorkerNavBar";
import Addskill from "./Addskill";
import Table from "./Table";
import Showskill from "./Showskill";
import Summarycard from "./summarycard";
import axios from 'axios';
import WorkerProfileCard from "./WorkerProfileCard";
export default class Workerprofile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            skills:[]
        }
    }
    componentDidMount(){
        let varURL = "http://localhost:3000/worker/profile/" + localStorage.getItem("UserId");
        axios.get(varURL)
        .then(response => {           
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
            this.setState({skills:response.data.result.recordsets[1]});   
            console.log("**************************",this.state.skills)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){

        
        return (
        // <MDBContainer>
            <div>
            <WorkerNavBar/>
            <MDBRow>
                <MDBCol md="4"><WorkerProfileCard/></MDBCol>
                <MDBCol md="4">
                    <Addskill/>
                    {
                        this.state.skills.length? this.state.skills.map(skill => <Showskill SkillTitle={skill.SkillTitle} Description={skill.Description} HourlyCharge={skill.HourlyCharge} SkillId={skill.SkillId}/>):null
                    }
                
                </MDBCol>
                <MDBCol md="4">
                    <Table/>          
              </MDBCol>
            </MDBRow>
            </div>
            
        // </MDBContainer>
        );
    }
}

