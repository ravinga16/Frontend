import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ImageCard from './ImageCard';
import WorkerNavBar from './WorkerNavBar';
import ProfileCard from './ProfileCard';

export default class Profile extends React.Component{
    render(){
        return(
            
            <div>
            <WorkerNavBar/>
            <MDBRow style={{marginTop:"30px"}}>
                <MDBCol md="3"><ImageCard/></MDBCol>
                <MDBCol md="6"><ProfileCard /></MDBCol>
                <MDBCol md="3"></MDBCol>
            </MDBRow>
            </div>
        );
    }
}