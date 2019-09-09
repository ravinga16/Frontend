import React from 'react';
import axios from 'axios';

let startedOrderList = [];

class UpcomingJobCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            reason:'' ,
            isEnabled:true           
        }
        this.cancelJob=this.cancelJob.bind(this);
        this.startJob=this.startJob.bind(this);
    }

    //cancel button event
    cancelJob(OrderId , e){
        e.preventDefault();
        console.log(OrderId);
        let value = prompt('Enter Reason for cancellation');
        let reasonAvailable=false;
        if(value==""){
             value = prompt('Enter Reason for cancellation');
             if(value!=""){
                 reasonAvailable=true
             }else{
                 reasonAvailable=false;
             }
        }else{
            reasonAvailable=true;
        }

        //check whether the Worker add some valid reason
        if(reasonAvailable==true){
            
            let sendObj = {
                "OrderId":OrderId,
                "Reason": value
            }
            axios.create({withCredentials:true}).put("http://localhost:3000/ordersWorker/cancelOrder", sendObj)
            .then(response=>{
                console.log(response.data)
                if(response.data.message=="Ok"){
                    document.getElementById(OrderId).style.display="none"
                }
            })
            this.forceUpdate();
        }else{
            alert("try again with a valid reason")
        }     
     }

     //start button event
    startJob(OrderId, e) {
        e.preventDefault();
        // document.getElementById(OrderId).style.display="block";

        //Getting starting time
        let tempDate = new Date();
        let currentTime = tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();

        //check if another ongoing job available
        if (localStorage.getItem("startedOrderId") != null) {
            alert("There is another ongoing job")
        } else {
            //check no job started. if not set the localstorage value
            if (localStorage.getItem("startedOrderId") == null && localStorage.getItem("startTime") == null) {
                alert("no ongoing jobs now...");
                localStorage.setItem("startedOrderId", OrderId);          
                //create the req.body to send
                let startJob = {
                    "OrderId": OrderId,
                    "StartTime": currentTime
                }                           
                axios.create({ withCredentials: true }).put("http://localhost:3000/ordersWorker/startOrder", startJob)
                    .then(response => {
                        console.log(response.data)
                })               
            }
        }    // startedOrderList.push(startJob);
    }      

    
    render(){
        return (
            <tr  >
                <td>{this.props.OrderId}</td>
                <td>{this.props.ContactNumber}</td>
                <td>{this.props.SkillTitle}</td>
                <td>{this.props.OrderDate}</td>
                <td>{this.props.ExpectedStartTime}</td>
                <td>{this.props.ExpectedEndTime}</td>
                <td>{this.props.ExpectedPrice}</td>
                <td>{this.props.OrderLoaction}</td>
                <td>{this.props.FirstName}</td>
                <td>{this.props.LastName}</td>
                <td>{this.props.Duration}</td>
                <td>{this.props.HourlyCharge}</td>           
                <td><button onClick={(e) => this.cancelJob(this.props.OrderId, e)}>Cancel</button></td>
                <td><button onClick={(e) => this.startJob(this.props.OrderId, e)}>Start</button></td>
                            
            </tr>
 
          )
    }
}
 


export default UpcomingJobCard;