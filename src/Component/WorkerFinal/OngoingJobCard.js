import React from 'react';
import axios from 'axios';
export default class OngoingJobCard extends React.Component{
    constructor(props){
        super(props);
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
        window.location.reload() 
        localStorage.removeItem("startedOrderId");
        localStorage.removeItem("startTime");    
        
     }
    //  
    render(){
        const OngoingJobCardStyle = {
            width:"50%",
            
            borderStyle:"solid",
            borderWidth:"4px",
            borderColor:"#3F729B",
            textAlign:"center"
        }
        return(
            <div style={OngoingJobCardStyle}>
                <br></br>
                <h1>Ongoing Job Details</h1><br></br>
                OrderId : {this.props.OrderId} <br></br>
                Name : {this.props.FirstName} {this.props.LastName}<br></br>
                ContactNumber : {this.props.ContactNumber}<br></br>
                SkillTitle : {this.props.SkillTitle}<br></br>

        
                OrderDate : {this.props.OrderDate}<br></br>
                StartTime : {this.props.StartTime}<br></br>
                ExpectedEndTime : {this.props.ExpectedEndTime}<br></br>
      
                                
                Duration : {this.props.Duration}<br></br><br></br>

                <button onClick={this.endJob} style={{width:"100%", height:"50px", backgroundColor:"#3F729B"}}>Finish Job</button><br></br>
              
            </div>
        )
    }
}