import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import UpcomingJobCard from './UpcomingJobCard';
import axios from 'axios';
class Upcoming extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UpcomingJobs:[]
        }   

    }
    //Getting the upcoming job list for the worker
    componentDidMount(){
        // let varUrl = "http://localhost:3000/ordersWorker/getUpComingOrders/"+localStorage.getItem("UserId");
        let varUrl = "http://localhost:3000/ordersWorker/getUpComingOrders/"+3;
        axios.create({withCredentials:true}).get(varUrl)
        .then(response => {
            //response.data.result[0] <- this gives [{},{}....]
            console.log(response.data.result[0])
            this.setState({UpcomingJobs:response.data.result[0]})            
        })
    }

    
    render(){
        return (
            <div>
                {
                    this.state.UpcomingJobs.length ? this.state.UpcomingJobs.map(job => <UpcomingJobCard key={job.OrderId} 
                        OrderId={job.OrderId} 
                        ContactNumber={job.ContactNumber}
                        SkillTitle={job.SkillTitle}
                        OrderDate={job.OrderDate}
                        ExpectedStartTime={job.ExpectedStartTime}
                        ExpectedEndTime={job.ExpectedEndTime}
                        ExpectedPrice={job.ExpectedPrice}
                        OrderLoaction={job.OrderLoaction}
                        FirstName={job.FirstName}
                        LastName={job.LastName}
                        Duration={job.Duration}
                        HourlyCharge={job.HourlyCharge}
                        />) : null
                }
            </div>
            
          )
    }
}
 


export default Upcoming;