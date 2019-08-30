import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Profilecard from "./Profilecard";
import WorkerNavBar from "./WorkerNavBar";
import Addskill from "./Addskill";
import Table from "./Table";
import Showskill from "./Showskill";
import Summarycard from "./summarycard";

export default class Workerprofile extends React.Component{
    render(){
        return (
        // <MDBContainer>
            <div>
            <WorkerNavBar/>
            <MDBRow>
                <MDBCol md="4"><Profilecard/></MDBCol>
                <MDBCol md="4">
                    <Addskill/>
                    <Showskill/>
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

