import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow,  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class addskilltest extends React.Component{
    constructor(props){
        super(props);
        this.state={"skillObj" : [ ],
                    skillId:'',
                    description:"",
                    hrate:"",
                    workerId:7,
                    availableSkills:[]  
                    }
    
        
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
 
    }
    componentDidMount(){
        axios.get('http://localhost:3000/dataservices/getallskills')
        .then(response => {
            
            //get the response sent by the API. setState to the response data this.setState({posts:response.data})
            this.setState({availableSkills:response.data.recordset})
            console.log("*****",this.state.availableSkills);
        })
        .catch(error => {
            console.log(error)
        })
    }
 
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})    
    
    }
  
    handleSubmit(event){
        event.preventDefault();
        this.setState(state => ({
            // skillObj : 122
            "skillObj": state.skillObj.concat({"skillId":this.state.skillId,"description":this.state.description,"hrate":this.state.hrate})
        }),()=>{
            console.log("after concat ",this.state)
            let varUrl= "http://localhost:3000/worker/skill/"+ this.state.workerId;
            axios.post( varUrl, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        })
        console.log("ssssssssss",this.state)
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
                        
                        <select value={this.state.skillId} onChange={this.handleChange}>
                            {
                               this.state.availableSkills.length?this.state.availableSkills.map(skill => <option key={skill.SkillId} value={skill.SkillId} >{skill.SkillId}</option>):null 
                            }
                        </select>
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