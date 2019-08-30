import React from 'react';
import {  MDBCard } from 'mdbreact';
export default class Summarycard extends React.Component{
    render(){
        var buttonStyle ={
            marginTop:"15px",
            backgroundColor:" unique-color",
            height:"50px"
        }
        return(
            <MDBCard style={{ width: "30rem" }}>
                <button style={buttonStyle}>Today Jobs:</button>
                <button style={buttonStyle}>UpComing Jobs:</button>
                <button style={buttonStyle}>Job Requests:</button>
                <button style={buttonStyle}>Total Revenue:</button>
              </MDBCard>

        )
    }
}