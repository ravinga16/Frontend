import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import AcceptedBooking from "./Acceptedbooking";
import CancelledBooking from "./Cancelledbooking";
import CompletedBooking from "./Completedbooking";
import UserNavBar from "./UserNavBar";
import axios from 'axios';

class MyBooking extends React.Component{
    constructor(props){
        super(props);
        this.state={
            acceptedBooking:[],
            completedBooking:[],
            cancalledBooking:[]
        }
    }
    componentDidMount(){
        //Get Accepted jobs for the client
        axios.get('http://localhost:3000/completedorders/owner/upcomingjobs/3')
        .then(response => {
            console.log(response.data.result[0])
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
            this.setState({acceptedBooking:response.data.result[0]})
            console.log(this.state.acceptedBooking.length)
        })
        .catch(error => {
            console.log(error)
        })

        // Get the completed jobs list
        axios.get('http://localhost:3000/completedorders/owner/completedorders/3')
        .then(response => {        
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
            this.setState({completedBooking:response.data.result[0]})
            console.log(this.state.completedBooking)
        })
        .catch(error => {
            console.log(error)
        })

        //Get the Cancelled Job list
        axios.get('http://localhost:3000/completedorders/owner/cancelledjobs/3')
        .then(response => {        
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
            this.setState({cancalledBooking:response.data.result[0]})
            console.log(this.state.cancalledBooking)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        var MDBCardTitleStyle = {
            textAlign:"center",
            color:"#3F729B",
            fontWeight:"bold",
            fontSize:"20px"
        }
        var MDBColStyle={
          
        }
        const {acceptedBooking, completedBooking, cancalledBooking} = this.state
        return (
            <div>
                <UserNavBar/>
                {/* <MDBContainer style={{marginTop:"15px"}}> */}
                <MDBRow style={{marginTop:"15px"}}> 
                    <MDBCol md="4" style={MDBColStyle}><MDBCardTitle style={MDBCardTitleStyle}>Accepted Jobs</MDBCardTitle>
                        {
                            acceptedBooking.length?acceptedBooking.map(booking => <AcceptedBooking key={booking.OrderId} OrderId={booking.OrderId} OrderDate={booking.OrderDate} StartTime={booking.StartTime} WorkerId={booking.WorkerId} Name={booking.FirstName+" "+booking.LastName} Rate={booking.Rate} BaseLocation={booking.BaseLocation} />):null
                        }
                    </MDBCol>
                    <MDBCol md="4" style={MDBColStyle}><MDBCardTitle style={MDBCardTitleStyle}>Completed Jobs</MDBCardTitle>
                        {
                            completedBooking.length?completedBooking.map(booking => <CompletedBooking key={booking.OrderId} OrderId={booking.OrderId} WorkerId={booking.WorkerId} OrderDate={booking.OrderDate} StartTime={booking.StartTime} EndTime={booking.EndTime} FinalPrice={booking.FinalPrice} Name={booking.FirstName+" "+booking.LastName} BaseLocation={booking.BaseLocation} />):null
                        }
                    </MDBCol>
                    <MDBCol md="4" style={MDBColStyle}><MDBCardTitle style={MDBCardTitleStyle}>Cancelled Jobs</MDBCardTitle>
                        {
                            cancalledBooking.length?cancalledBooking.map(booking => <CancelledBooking key={booking.OrderId} OrderId={booking.OrderId} WorkerId={booking.WorkerId} OrderDate={booking.OrderDate} CancellationReason={booking.CancellationReason} />):null
                        }
                    </MDBCol>
                </MDBRow>
                {/* </MDBContainer> */}
            </div>
            
          );
    }
}

export default MyBooking;