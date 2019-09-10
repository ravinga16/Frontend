import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import UpcomingJobCard from './UpcomingJobCard';
import axios from 'axios';
import WorkerNavBar from './WorkerNavBar';
import OngoingJobCard from './OngoingJobCard';
class Upcoming extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UpcomingJobs:[],
            ongoingJobDetails:[],
            startedJobId:"",
            startTime:"",
            endTime:""
        }   
        // this.endJob=this.endJob.bind(this);
        
    }


    //Getting the upcoming job list for the worker
    componentDidMount(){    
        axios.create({withCredentials:true}).get("http://localhost:3000/ordersWorker/getUpComingOrders/"+localStorage.getItem("UserId"))
        .then(response => {
            console.log(response.data.result[0])
            this.setState({UpcomingJobs:response.data.result[0]})            
        })
        
        //check if order started and display the started job details
        if(localStorage.getItem("startedOrderId")!=null){
            axios.get("http://localhost:3000/ordersWorker/getOngoingOrders/"+localStorage.getItem("UserId"), {withCredentials:true})
            .then(response => {                
                this.setState({ongoingJobDetails:response.data.result[0][0]})
                console.log("ongoingJobDetails", this.state.ongoingJobDetails)
                document.getElementById("ongoing").style.display="block"
            })
            
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
                                <th>Duration(mins)</th>
                                <th>HourlyCharge</th>
                                <th>Cancel Job</th>
                                <th>Start Job</th>                         
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
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
                          
                           
                        </MDBTableBody>
                    </MDBTable>
                </div>
                <div id="ongoing" style={{ display: "none" , marginLeft:"45%", marginTop:"20px"}}>
                    <OngoingJobCard
                    OrderId = {this.state.ongoingJobDetails.OrderId} 
                    ContactNumber = {this.state.ongoingJobDetails.ContactNumber}
                    SkillTitle ={this.state.ongoingJobDetails.SkillTitle}
                    OrderDate = {this.state.ongoingJobDetails.OrderDate}
                     StartTime = {this.state.ongoingJobDetails.StartTime}                             
                    ExpectedEndTime = {this.state.ongoingJobDetails.ExpectedEndTime}
                    FirstName = {this.state.ongoingJobDetails.FirstName}
                    LastName={this.state.ongoingJobDetails.LastName}
                    Duration ={this.state.ongoingJobDetails.Duration}
                    />
                </div>                
            </div>
            
                   
          
            
          )
    }
}
 

export default Upcoming;