import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCollapse  } from 'mdbreact';
import axios from 'axios';


class UpcomingJobCard extends React.Component{
    constructor(props){
        super(props);
        this.getOrderDetail=this.getOrderDetail.bind(this);

    }

    getOrderDetail(id){
        console.log("order id", id)
        let varURL = "http://localhost:3000/ordersWorker/getOrderDetails/"+id;
        axios.create({withCredentials:true}).get(varURL)
        .then(response =>{
            console.log(response.data)
        })
    }
    render(){
        return (
       
              <MDBCard style={{ width: "22rem" }}>                
                <MDBCardBody>
                  <MDBCardTitle>Order ID:{this.props.OrderId}</MDBCardTitle>
                  <MDBCardText>
                  ContactNumber:{this.props.ContactNumber}<br></br>
                  SkillTitle:{this.props.SkillTitle}<br></br>
                  OrderDate:{this.props.OrderDate}<br></br>
                  ExpectedStartTime:{this.props.ExpectedStartTime}<br></br>
                  ExpectedEndTime:{this.props.ExpectedEndTime}<br></br>
                  ExpectedPrice:{this.props.ExpectedPrice}<br></br>
                  OrderLoaction:{this.props.OrderLoaction}<br></br>
                  FirstName:{this.props.FirstName}<br></br>
                  LastName:{this.props.LastName}<br></br>
                  Duration:{this.props.Duration}<br></br>
                  HourlyCharge:{this.props.HourlyCharge}       <br></br>           
                  </MDBCardText>
                  <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
              </MDBCard>
 
          )
    }
}
 


export default UpcomingJobCard;