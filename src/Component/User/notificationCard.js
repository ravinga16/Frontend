import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Notification from './notification';

export default class NotificationCard extends React.Component{
    render(){
        return (
     
              <div style={{ width: "30rem" ,marginTop:"25px"}}>             
                 <Notification title="pol gas negima" amount="90"/>
                 <Notification title="gas bada gema" amount="90"/>
                 <Notification title="painting the house" amount="900"/>        
              </div>
 
          )
    }
}