import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody} from "mdbreact";
import axios from 'axios';
import Select from 'react-select';
import UserNavBar from './UserNavBar';
import AvailableWorkerCard from './AvailableWorkerCard';


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
            clientId:localStorage.getItem("UserId"),
            skillId:'',            
            orderDate:'',
            startTime:'',
            endTime:'',
            availableWorkers:[],
            result:[0],

            booknowWorkers:[0],
            booknowResult:[0]
        }
        this.handleBookLater=this.handleBookLater.bind(this);
        this.handleBookNow=this.handleBookNow.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSendRequest=this.handleSendRequest.bind(this);
        this.handleBookNowSendReq=this.handleBookNowSendReq.bind(this);
    }
    //getting all the skills available in the website
    componentDidMount(){
        // axios.create({ withCredentials: true, }).get('http://localhost:3000/dataservices/getallskills')
        axios.get('http://localhost:3000/dataservices/getallskills',{withCredentials:true})        
        .then(response => {        
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
                let i = 0;
                let tempArray = {};
                for (i; i < response.data.recordsets[0].length; i++) {
                    tempArray["value"] = response.data.recordsets[0][i].SkillId
                    tempArray["label"] = response.data.recordsets[0][i].SkillTitle
                    availableSkills.push(tempArray);
                    tempArray = {}
                } 
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
            let bookNowReq = {
                jobType:this.state.skillId,
                // clientId:localStorage.getItem("UserId"),
                coordinate : null
            }
            axios.create({withCredentials:true}).post("http://localhost:3000/booknow/booknow", bookNowReq)
            .then(response => {
                console.log("book now req response :", response.data.result.workers.length)
                if(response.data.result.workers.length==0){
                    alert("No available Workers")
                }else{
                    console.log("response.data.result", response.data.result)
                    this.setState({booknowWorkers:response.data.result.workers})
                    console.log("state",this.state.booknowWorkers)
                   

                }
            })
           
          
        }
        
        
    }
    //search worker button event
    handleSubmit(e){
        e.preventDefault();
        document.getElementById("sendRequest").style.display="block";
        document.getElementById("booklaterlist").style.display="block";
        console.log("book later details", this.state)//object sending with the axios
        let searchWorkerReq = {
            skillId : this.state.skillId,
            orderDate:this.state.orderDate,
            startTime: this.state.startTime ,
            endTime: this.state.endTime,
            coordinate:null,
            clientId: this.state.clientId 
        }
        console.log("book later req:", searchWorkerReq)
        axios.create({withCredentials:true}).post('http://localhost:3000/bookLater/search', searchWorkerReq)
        .then(response => {
            console.log("search worker button press")
            console.log(response.data)
            if(response.data.message=="No workers available"){
                alert("No workers available")
                document.getElementById('sendRequest').style.display="none";
            }else if(response.data.message=="OK"){
                if(response.data.result.Workers.length > 0){
                    this.setState({result:response.data.result})
                    this.setState({availableWorkers:response.data.result.Workers})
                }
            }          
            
        })
        .catch(error => {
            console.log(error);
        })


    }
    handleSendRequest(e){
        e.preventDefault();
        axios.post("http://localhost:3000/bookLater/sendRequest",this.state.result)
        .then(response => {
            console.log(response.data)           
        })
        .catch(error => {
            console.log(error);
        })
    }

    //booknow sending request
    handleBookNowSendReq(e){

    }
    render(){
        return(
            <container>
                <UserNavBar/>
                {/* default form to display */}
                <MDBContainer>
                <MDBRow>
                    <MDBCard id="one" style={{ width: "50%" ,marginTop:"15px"}}>
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
                        <div class="row"><MDBBtn  style={{backgroundColor:"#008080",width:"100%"}} onClick={this.handleBookNow}  disabled>  Book Now </MDBBtn>  </div> 
                        <div class="row"><MDBBtn  style={{backgroundColor:"#008080",width:"100%"}}  onClick={this.handleBookLater} >  Book Later </MDBBtn></div>             
                    
                    </form>
                    </MDBCardBody>                
                    </MDBCard>
                </MDBRow>

                {/*  Depend on book now, book later*/}               

                <MDBRow>
                    {/* if user selected book later option */}
                    <MDBCol size="6" id="booklater" style={{ width: "55%",  display: "none", marginTop: "30px" }}>
                        <MDBCard >
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">  Order Date  </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="orderDate"
                                        onChange={this.handleChange}
                                        required />
                                    <br />
                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">   Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="startTime"
                                        onChange={this.handleChange}
                                        required />
                                    <br />
                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text"> End Time  </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="endTime"
                                        onChange={this.handleChange} 
                                        required />
                                    <br />
                                    <div class="row"><MDBBtn color="unique" type="submit" style={{backgroundColor:"#008080",width:"100%"}}> Search Worker  </MDBBtn>  </div>
                                    <div class="row"><MDBBtn id="sendRequest" color="unique" onClick={this.handleSendRequest} style={{backgroundColor:"#008080",width:"100%",display:"none"}} onClick={this.handleSendRequest}> Send Request  </MDBBtn></div>
                                                                            
                                </form>
                            </MDBCardBody>
                        </MDBCard>                     
                      </MDBCol>
                    <MDBCol size="6" id="booklaterlist" style={{ width: "75%",  display: "none", marginTop: "15px" }}>
                        {
                            this.state.availableWorkers.length ? this.state.availableWorkers.map(worker => <AvailableWorkerCard key={worker.workerId} workerId={worker.workerId} firstName={worker.firstName}  lastName={worker.lastName} baseLocation={worker.baseLocation} rate={worker.rate} skillDescription={worker.skillDescription} hourlyCharge={worker.hourlyCharge}  />):null
                        }       
                               
                    </MDBCol>

                    
                     {/* if user select book now option */}
                    <MDBCard id="map" style={{ display: "none" }}>
                            <MDBCardBody style={{width:"100%"}}>
                    
                                    {
                                        this.state.booknowWorkers.length ? this.state.booknowWorkers.map(worker =><AvailableWorkerCard key={worker.WorkerId} workerId={worker.WorkerId} firstName={worker.FirstName} rate={worker.Rate} hourlyCharge={worker.HourlyCharge} />) : null
                                    }
                                    <button onClick={this.handleBookNowSendReq}>Send Request</button>
                              
                            </MDBCardBody>
                        </MDBCard>
                </MDBRow>
                </MDBContainer>
             
            </container>
        )
    }
}
