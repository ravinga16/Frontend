import React from 'react';

export default class OngoingJobCard extends React.Component{
    render(){
        const OngoingJobCardStyle = {
            width:"40%",
            borderStyle:"solid",
            borderWidth:"2px",
            borderColor:"black"
        }
        return(
            <div style={OngoingJobCardStyle}>
                OrderId : {this.props.OrderId}

                ContactNumber : {this.props.ContactNumber}

                SkillTitle : {this.props.SkillTitle}

                OrderDate : {this.props.OrderDate}
                StartTime : {this.props.StartTime}
                ExpectedEndTime : {this.props.ExpectedEndTime}

                Name : {this.props.FirstName} {this.props.LastName}
                Duration : {this.props.Duration}

              
            </div>
        )
    }
}