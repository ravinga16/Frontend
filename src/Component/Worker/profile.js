import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ImageCard from './ImageCard';
import WorkerNavBar from './WorkerNavBar';
import ProfileCard from './ProfileCard';
import AddSkill from './AddSkill';
import ShowSkills from './ShowSkills';

export default class Profile extends React.Component{
    render(){
        return(
            
            <div>
            <WorkerNavBar/>
            <MDBRow style={{marginTop:"30px"}}>
                <MDBCol md="3"><ImageCard /></MDBCol>
                <MDBCol md="6"><ProfileCard /></MDBCol>
                <MDBCol md="3">
                    <AddSkill/>
                    <ShowSkills />
                    <ShowSkills />
                    <ShowSkills />
                    <ShowSkills />
                    <ShowSkills />
                </MDBCol>
            </MDBRow>
            </div>
        );
    }
}