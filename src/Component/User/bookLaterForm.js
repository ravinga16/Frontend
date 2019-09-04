import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import Select from 'react-select';

let availableSkills = [
];

class BookLaterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            skillSelected:'',
            skillId:'',
            orderDate:'',
            startTime:'',
            endTime:''
        }
        this.onChangeSkillSelected=this.onChangeSkillSelected.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
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
                console.log("******", availableSkills);
        })
        .catch(error => {
            console.log(error);
        })
    }

     //onChange function
     handleChange(e){
         this.setState({[e.target.name]:e.target.value})
     }
     
     handleSubmit(e){
         e.preventDefault();
         console.log(this.state);
     }
     
     onChangeSkillSelected = (skillSelected) => {
        this.setState({ skillSelected }); 
        this.setState({skillId:skillSelected.value})  ;
        console.log(this.state);
    }

    render(){
        return (
            <MDBContainer>
              <MDBRow>
                <MDBCol md="4">
                  <form onSubmit={this.handleSubmit}>                  
                    

                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Order Date
                    </label>
                    <input
                      type="date"                  
                      className="form-control"
                      name="orderDate"
                      onChange={this.handleChange}
                    />
                    <br />

                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                      Start Time
                    </label>
                    <input
                      type="time"             
                      className="form-control"
                      name="startTime"
                      onChange={this.handleChange}
                    />
                    <br />

                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                      End Time
                    </label>
                    <input
                      type="time"                
                      className="form-control"
                      name="endTime"
                      onChange={this.handleChange}
                    />
                    <br />
                    <div className="text-center mt-4">
                      <MDBBtn color="unique" type="submit">
                        Book Later
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
    }
}

export default BookLaterForm;