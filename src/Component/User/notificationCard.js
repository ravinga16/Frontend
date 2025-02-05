import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBNotification } from "mdbreact";
import axios from 'axios';

export default class NotificationCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            availableNotification:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3000/notification/getNotifications/"+localStorage.getItem("UserId"))
        .then(response => {
            console.log("notification details:", response.data.result[0])
            this.setState({availableNotification:response.data.result[0]})
        })
    }
    render(){
        return (
            <div>
               {
                   this.state.availableNotification.length? this.state.availableNotification.map(noti => <div>
                       <MDBNotification
                           show
                           fade
                           iconClassName="text-primary"
                           title="Notification"
                           message={noti.msg,noti.NotificationId}
                        //    text="11 mins ago"
                       />

                   </div>): null
               }
            </div>
 
          )
    }
}
