import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow,  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Select from 'react-select';

let availableSkills = [
];

export default class Addskill extends React.Component{
    constructor(props){
        super(props);
        this.state={skillId:'',
                    description:"",
                    hrate:"",
                    skillSelected:'' ,
                    todayTotal:'',
                    upcomingTotal:'',
                    jobRequstTotal:'',              
                }
    
        
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onChangeSkillSelected=this.onChangeSkillSelected.bind(this);
        
 
    }
    componentDidMount(){
        axios.get('http://localhost:3000/dataservices/getallskills')
        .then(response => {
            console.log(response.data.recordsets[0]);
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
            console.log(response.data.recordsets[0]);
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
            console.log(error)
        })
    }
    //onChange function
    onChangeSkillSelected = (skillSelected) => {

        this.setState({ skillSelected });
        this.setState({skillId:skillSelected.value})
    }
 
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})    
    
    }
  
    handleSubmit(event){
        event.preventDefault();
        console.log("user adding skill", this.state);
        // this.setState(state => ({
        //     // skillObj : 122
        //     "skillObj": state.skillObj.concat({"skillId":this.state.skillId,"description":this.state.description,"hrate":this.state.hrate})
        // }),()=>{
        //     console.log("after concat ",this.state)

        //Preparing the skill object modal to send to the backend
        let skillObject = {"skillObj" : [ {
            "skillId": this.state.skillId,
            "description" : this.state.description,
            "hrate" : this.state.hrate
        }]}
        let varUrl= "http://localhost:3000/worker/skill/"+ localStorage.getItem("UserId");
        axios.post( varUrl, skillObject)
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    render(){
        return(
            <MDBCol>
            <MDBCard style={{ width: "30rem" }}>        
                <MDBCardBody>
                <MDBContainer>
                    <MDBRow>
                    <MDBCol md="11">
                        <form onSubmit={this.handleSubmit}>
                        <h5 style={{textAlign:"center"}}>Add a Skill</h5>                  
                        
                        <Select
                            value={this.state.skillSelected}
                            onChange={this.onChangeSkillSelected}
                            options={availableSkills}
                            placeholder="Skills"
                            
                          />
                        <br></br>  <br></br>              
                        <input
                            type="text" 
                            name="description"           
                            className="form-control"
                            placeholder="Skill Description"
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            type="float" 
                            name="hrate"    
                            className="form-control"
                            placeholder="Hourly Rate"
                            onChange={this.handleChange}
                            required
                        />
                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit" >ADD</MDBBtn>
                        </div>
                        </form>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>            
        );
    }
}