import React from 'react';
import axios from 'axios';
import RequestCard from './RequestCard';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import WorkerNavBar from './WorkerNavBar';


export default class Request extends React.Component{
    constructor(props){
        super(props);
        this.state={
            request:[]
        }
        this.convertTime=this.convertTime.bind(this)
        this.convertDate=this.convertDate.bind(this)
    }

    componentDidMount(){ 
       
        // axios.get("http://localhost:3000/requests/pool/worker/"+localStorage.getItem("UserId"))
        axios.get("http://localhost:3000/requests/pool/worker/"+localStorage.getItem("UserId"))
        .then(response=>{
            console.log("request data:", response.data.result[0])//
            this.setState({request:response.data.result[0]})
        })
    }

    //converting date and time
    convertTime(time){        
        return(<p>{new Date(time).toUTCString().split(" ")[4]}</p>)
    }

    convertDate(OrderDate){        
        return(<p>{new Date(OrderDate).toUTCString().split(" ").slice(1, 4).join(" ")}</p>)
    }
    render(){
        return(
            <div>
                <WorkerNavBar/>
                <div style={{ width: "90%", marginLeft: "5%" , marginTop:"2.5%"}}>
                <MDBTable>
                <MDBTableHead color=" cyan darken-4" textWhite>
                    <tr>
                        <th>RequestId</th>
                        <th>CreatedDate</th>
                        <th>ClientId</th>
                        <th>StartTime</th>
                        <th>ExpectedEndTime</th>
                        <th>OrderDate</th>
                        <th>OrderLocation</th>
                        <th>SkillId</th>                   
                        <th>Accept</th> 
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        this.state.request.length? this.state.request.map(req => <RequestCard 
                            RequestId={req.RequestId}
                            ClientId={req.ClientId}
                            StartTime={this.convertTime(req.StartTime)}
                            ExpectedEndTime={this.convertTime(req.ExpectedEndTime) }
                            OrderDate={this.convertDate(req.OrderDate)}
                            OrderLocation={req.OrderLocation}
                            SkillId={req.SkillId} />):null                        
                    }
               
                </MDBTableBody>
             </MDBTable>
                </div>
            
            </div>
            
        )
    }
}