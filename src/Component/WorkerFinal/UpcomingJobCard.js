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
        }else{
            alert("try again with a valid reason")
        }     
     }

     //start button event
     startJob(OrderId, e){
        e.preventDefault();
        document.getElementById(OrderId).style.display="block";
        let tempDate = new Date();
        let currentTime = tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
     
        let startJob  = {
            "OrderId": OrderId,
            "StartTime":currentTime
        }
        startedOrderList.push(startJob);
        console.log(startedOrderList);
        axios.create({withCredentials:true}).put("http://localhost:3000/ordersWorker/startOrder", startJob)
        .then(response=>{
            console.log(response.data)
        })
       
         
     }

      //end button event
      endJob(OrderId, e){
        e.preventDefault();
        let tempDate = new Date();
        let startTime;
        let endTime = tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        for(let i=0;i<startedOrderList.length;i++){
            if(startedOrderList[i].OrderId==OrderId){
                startTime = startedOrderList[i].StartTime
            }
        }

        let endJob  = {
            "OrderId": OrderId,
            "StartTime":startTime,
            "EndTime":endTime
        }

        console.log(endJob)

        axios.create({withCredentials:true}).put("http://localhost:3000/ordersWorker/endOrder", endJob)
        .then(response=>{
            console.log(response.data)
        })

         
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
                <td><button id={this.props.OrderId} onClick={(e) => this.endJob(this.props.OrderId, e)} style={{display:"none"}} >End</button></td>                    
            </tr>
 
          )
    }
}
 


export default UpcomingJobCard;