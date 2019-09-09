import React from 'react';
import {  MDBCard } from 'mdbreact';
import axios from 'axios';
export default class Summarycard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            today:"",
            upcoming:"",
            requests:"",
            upcomingArray:[]
        }
    }

    componentDidMount(){
        //getting today date
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '.0' + (tempDate.getMonth()+1) + '.0' + tempDate.getDate() ;
        console.log(date,"+++++++++++++++++++")
        //upcoming
        axios.create({withCredentials:true}).get("http://localhost:3000/ordersWorker/getUpComingOrders/"+localStorage.getItem("UserId"))
        .then(response => {
            //response.data.result[0] <- this gives [{},{}....]
            this.setState({upcoming:response.data.result[0].length})
            this.setState({upcomingArray:response.data.result[0]})           
                      
        })

        //requests
        axios.get("http://localhost:3000/requests/pool/worker/"+localStorage.getItem("UserId"))
        .then(response=>{
            this.setState({requests:response.data.result[0].length})            
        })
        
    }
    render(){
        var buttonStyle ={
            marginTop:"15px",
            backgroundColor:" unique-color",
            height:"50px"
        }
        return(
            <MDBCard style={{ width: "30rem" }}>
                <button style={buttonStyle}>Today Jobs:</button>
                <button style={buttonStyle}>UpComing Jobs:{this.state.upcoming}</button>
                <button style={buttonStyle}>Job Requests:{this.state.requests}</button>        
              </MDBCard>

        )
    }
}