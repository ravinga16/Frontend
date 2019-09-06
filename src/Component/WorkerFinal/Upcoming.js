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
        // let varUrl = "http://localhost:3000/ordersWorker/getUpComingOrders/"+localStorage.getItem("UserId");        
        axios.create({withCredentials:true}).get("http://localhost:3000/ordersWorker/getUpComingOrders/"+localStorage.getItem("UserId"))
        .then(response => {
            //response.data.result[0] <- this gives [{},{}....]
            console.log(response.data.result[0])
            this.setState({UpcomingJobs:response.data.result[0]})            
        })
        
        //check if order started and display the started job details
        if(localStorage.getItem("startedOrderId")!=null){
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
                        <MDBCardBody>
                            <MDBCardTitle><h1>Ongoing Job Details</h1></MDBCardTitle>
                            <MDBCardText>
                                Order ID : {localStorage.getItem("startedOrderId")}
                                <br></br>
                                Started Time : {localStorage.getItem("startTime")}
                            </MDBCardText>
                            <button onClick={this.endJob} style={{width:"90%", height:"50px", backgroundColor:"#3F729B"}}>Finish Job</button>
                        </MDBCardBody>
                    </MDBCard>
                </div>                
            </div>
            
                   
          
            
          )
    }
}
 

export default Upcoming;