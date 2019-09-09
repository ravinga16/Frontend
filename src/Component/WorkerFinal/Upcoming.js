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
            UpcomingJobs:[],
            ongoingJobDetails:[],
            startedJobId:"",
            startTime:"",
            endTime:""
        }   
        this.endJob=this.endJob.bind(this);
        
    }


    
    endJob(e){
        e.preventDefault();
        //getting finishing time
        let tempDate = new Date();
        let endTime = tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
      
        //req.body to send
        let endJob  = {
            "OrderId": localStorage.getItem("startedOrderId"),
            "StartTime":localStorage.getItem("startTime"),
            "EndTime":endTime
        }        
        //setting the end time for the local storage
                
        //end the job
        axios.create({withCredentials:true}).put("http://localhost:3000/ordersWorker/endOrder", endJob)
        .then(response=>{
            console.log(response.data)
        })
        localStorage.removeItem("startedOrderId");
        localStorage.removeItem("startTime");    
        this.forceUpdate() 
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
                                <th>Duration</th>
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
                    <MDBCard style={{ width: "32rem" }}>
                        <MDBCardBody style={{textAlign:"center"}}>
                            <MDBCardTitle><h1>Ongoing Job Details</h1></MDBCardTitle>
                            <MDBCardText >
                                <div style={{width:"100%", height:"40px", backgroundColor:"#0277bd"}} >
                                    OrderId : {this.state.ongoingJobDetails.OrderId} <br></br>
                                    Name : {this.state.ongoingJobDetails.FirstName} {this.state.ongoingJobDetails.LastName}<br></br>
                                    ContactNumber : {this.state.ongoingJobDetails.ContactNumber}<br></br>
                                    SkillTitle : {this.state.ongoingJobDetails.SkillTitle}<br></br>
                                </div> <br></br>                                                    
                                

                                <div style={{width:"100%", height:"40px", backgroundColor:"#2BBBAD"}} >
                                    OrderDate : {this.state.ongoingJobDetails.OrderDate}<br></br> 
                                    StartTime : {this.state.ongoingJobDetails.StartTime}<br></br>
                                    ExpectedEndTime : {this.state.ongoingJobDetails.ExpectedEndTime}<br></br>
                                    Duration : {this.state.ongoingJobDetails.Duration}<br></br>
                                </div> <br></br>                             
                                
                                
                            </MDBCardText>
                            <button onClick={this.endJob} style={{width:"100%", height:"50px", backgroundColor:"#3F729B"}}>Finish Job</button>
                        </MDBCardBody>
                    </MDBCard>
                </div>                
            </div>
            
                   
          
            
          )
    }
}
 

export default Upcoming;