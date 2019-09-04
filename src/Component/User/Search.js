import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody} from "mdbreact";
import axios from 'axios';
import Select from 'react-select';
import UserNavBar from './UserNavBar';


let availableSkills = [
];

let availablePaymentMethod = [
    {label: "Cash" ,value: "Cash"  },{label: "Card" ,value: "Card"  }
];

export default class Search extends React.Component{
    constructor(props){
        super(props);
        //clientid is required, but server error when included it
        this.state={
            skillSelected:'',
            paymentSelected:'',
            paymentName:'', 
            // id:'3',
            skillId:'',            
            orderDate:'',
            startTime:'',
            endTime:'',
            availableWorkers:[]
        }
        this.handleBookLater=this.handleBookLater.bind(this);
        this.handleBookNow=this.handleBookNow.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSendRequest=this.handleSendRequest.bind(this);
    }
    //getting all the skills available in the website
    componentDidMount(){
        axios.get('http://localhost:3000/dataservices/getallskills')
        .then(response => {
        
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
            // console.log(response.data.recordsets[0]);
                let i = 0;
                let tempArray = {};
                for (i; i < response.data.recordsets[0].length; i++) {
                    tempArray["value"] = response.data.recordsets[0][i].SkillId
                    tempArray["label"] = response.data.recordsets[0][i].SkillTitle
                    availableSkills.push(tempArray);
                    tempArray = {}
                } 
                // console.log(availableSkills,"availableSkills");
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    //When the required skill is selected
    onChangeSkillSelected = (skillSelected) => {
        this.setState({ skillSelected }); 
        this.setState({skillId:skillSelected.value})  ;
  
    }
    //when the payment type is selected
    onChangePaymentSelected = (paymentSelected) => {
        this.setState({ paymentSelected }); 
        this.setState({paymentName:paymentSelected.label})
   
    }
    //when entering values to the input fields
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    //handling button clicks
    handleBookLater(){
        if(this.state.skillId==""){
            alert("Enter a Valid Job Type")
        }else{
            document.getElementById("booklater").style.display="block";
            document.getElementById("map").style.display="none";
        }
       
    }
    handleBookNow(){
        if(this.state.skillId==""){
            alert("Enter a Valid Job Type")
        }else{
            document.getElementById("map").style.display="block";
            document.getElementById("booklater").style.display="none";
        }
        
    }
    handleSubmit(e){
        e.preventDefault();
        document.getElementById("sendRequest").style.display="block";
        console.log("book later details", this.state)//object sending with the axios
        axios.post('http://localhost:3000/bookLater/search',this.state)
        .then(response => {
            console.log("search worker button press")
            this.setState({availableWorkers:response.data.result})
            console.log(this.state.availableWorkers)
        })
        .catch(error => {
            console.log(error);
        })


    }
    handleSendRequest(e){
        e.preventDefault();
        axios.post("http://localhost:3000/bookLater/sendRequest",this.state.availableWorkers)
        .then(response => {
            console.log(response.data)           
        })
        .catch(error => {
            console.log(error);
        })
    }
    render(){
        return(
            <div>
                <UserNavBar/>
                {/* default form to display */}
                <MDBRow>
                <MDBCard id="one" style={{ width: "50%",marginLeft:"22%" ,marginTop:"15px"}}>
                <MDBCardBody>
                <form>
                    <p className="h4 text-center mb-4">Required Job Details</p>                 
                    <Select
                        required
                       value={this.state.skillSelected}
                        onChange={this.onChangeSkillSelected}
                        options={availableSkills}
                        placeholder="Job Type" />
                    <br></br>

                    <Select
                       value={this.state.paymentSelected}
                        onChange={this.onChangePaymentSelected}
                        options={availablePaymentMethod}
                        placeholder="Payment Method"   />
                    <br></br>

                    <label   htmlFor="defaultFormRegisterConfirmEx" className="grey-text" > Description </label>
                    <input
                    type="text"
                    name="description"                
                    className="form-control"  />
                    <br />    
                    <div class="row">   <MDBBtn  style={{marginLeft:"40%"}}color="unique" onClick={this.handleBookNow}>  Book Now </MDBBtn>  </div> 
                    <div class="row">   <MDBBtn  style={{marginLeft:"40%"}} color="unique" onClick={this.handleBookLater}>  Book Later </MDBBtn></div>             
                   
                </form>
                </MDBCardBody>                
                </MDBCard>

                </MDBRow>

                {/*  Depend on book now, book later*/}               

                <MDBRow>
                    {/* if user selected book later option */}
                    <MDBCol size="6">
                        <MDBCard id="booklater" style={{ width: "55%",  display: "none", marginTop: "15px" }}>
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">  Order Date  </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="orderDate"
                                        onChange={this.handleChange} />
                                    <br />
                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">   Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="startTime"
                                        onChange={this.handleChange} />
                                    <br />
                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text"> End Time  </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="endTime"
                                        onChange={this.handleChange}  />
                                    <br />
                                    <div class="row"><MDBBtn color="unique" type="submit"> Search Worker  </MDBBtn>  </div>
                                    <div class="row"><MDBBtn id="sendRequest" color="unique" type="submit" style={{display:"none"}} onClick={this.handleSendRequest}> Send Request  </MDBBtn></div>
                                                                            
                                </form>
                            </MDBCardBody>
                        </MDBCard>                     
                      </MDBCol>
                    <MDBCol size="6" id="booklaterlist" style={{ width: "75%",  display: "none", marginTop: "15px" }}>available workers list</MDBCol>
                     {/* if user select book now option */}
                    <MDBCard id="map" style={{ display: "none" }}>
                            <MDBCardBody>
                                <h1>map</h1>
                            </MDBCardBody>
                        </MDBCard>
                </MDBRow>

                <MDBRow>

                </MDBRow>
            </div>
        )
    }
}
