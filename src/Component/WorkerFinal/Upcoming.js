import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import UpcomingJobCard from './UpcomingJobCard';
import axios from 'axios';
import WorkerNavBar from './WorkerNavBar';
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
        axios.create({withCredentials:true}).get("http://localhost:3000/ordersWorker/getUpComingOrders/"+3)
        .then(response => {
            //response.data.result[0] <- this gives [{},{}....]
            console.log(response.data.result[0])
            this.setState({UpcomingJobs:response.data.result[0]})            
        })

        if(localStorage.getItem("startTime")!=null){
            document.getElementById("ongoing").style.display="block"
        }


    }

    
    render(){
        return (
            <div>
                <WorkerNavBar/>
                <div style={{width: "90%", marginLeft: "5%" , marginTop:"2.5%"}}>
                    <MDBTable>
                        <MDBTableHead color="teal darken-2" style={{color:"white", width: "90%"}} >
                            <tr>
                                <th>OrderId</th>
                                <th>ContactNumber</th>
                                <th>SkillTitle</th>
                                <th>OrderDate</th>
                                <th>ExpectedStartTime</th>
                                <th>ExpectedEndTime</th>
                                <th>ExpectedPrice</th>
                                <th>OrderLoaction</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Duration</th>
                                <th>HourlyCharge</th>
                                <th>Cancel Job</th>
                                <th>Start Job</th>
                                <th>End Job</th>
                            </tr>
                        </MDBTableHead>
                        {/* <MDBTableBody> */}
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
                          
                           
                        {/* </MDBTableBody> */}
                    </MDBTable>
                </div>
                        <div id ="ongoing" style={{display:"none"}}>
                            <h1>{localStorage.getItem("startTime")}</h1>
                        </div>                
            </div>
            
                   
          
            
          )
    }
}
 

export default Upcoming;