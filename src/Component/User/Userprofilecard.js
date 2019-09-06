import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';
import Select from 'react-select';
let baselocations = [];
class Userprofilecard extends React.Component{
    constructor(props){
        super(props);
        this.state={
          skillSelected:'',
          firstName:"",
          lastName:"",
          baseLocation:"",
          contactNumber:"",
          personalData:[],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
       
      }
     //once the profile card is mounted
      componentDidMount(){

        //base location
        axios
            .get("http://localhost:3000/dataservices/getalllocations", {
                withCredentials: true
            })
            .then(res => {
                let i = 0;
                let tempArray = {};
                for (i; i < res.data.recordsets[0].length; i++) {
                tempArray["value"] = i;
                tempArray["label"] = res.data.recordsets[0][i].DivisionalSecretary;
                baselocations.push(tempArray);
                tempArray = {};
                }
                
            })
            .catch(function(error) {
                // console.log(error);
            });

          //
          let userId = localStorage.getItem('UserId');
          let url = "http://localhost:3000/client/profile/"+57;    
          axios.get(url,{withCredentials:true})
          .then(response => {               
              this.setState({personalData:response.data.result.recordsets[0][0]})
              
          })
          .catch(error => {
              console.log(error)
          })
  
     }
     //handling events     

     //onChange function
      onChangeSkillSelected = (skillSelected) => {
        this.setState({ skillSelected });      
      }

      handleEdit(e){
        e.preventDefault();
        document.getElementById("show").style.display="none";
        document.getElementById("edit").style.display="block";
    }

    handleCancel(e){
        e.preventDefault();
        document.getElementById("edit").style.display="none";
        document.getElementById("show").style.display="block"
    }
    handleChange(e){
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();

        if(this.state.firstName==""){
          this.setState({firstName:this.state.personalData.FirstName})
        }
        if(this.state.lastName==""){
          this.setState({lastName:this.state.personalData.LastName})
        }
        if(this.state.skillSelected==undefined){
          this.setState({skillSelected:this.state.personalData.BaseLocation})
        }
       
        if(this.state.contactNumber==""){
          this.setState({contactNumber:this.state.personalData.ContactNumber})
        }
        const workerDetails = {
            fname: this.state.firstName,
            lname: this.state.lastName,
            baseL: this.state.skillSelected.label,
            contactno: this.state.contactNumber
          };
          axios
            .put("http://localhost:3000/client/profile/" + 57, workerDetails, {
              withCredentials: true
            })
            .then(res => {
              console.log(res);
              
            });

        this.componentDidMount()
        document.getElementById("edit").style.display="none";
        document.getElementById("show").style.display="block";
        
    }
        render(){          
            return (
                <MDBCol>
                  <MDBCard style={{ width: "30rem" }} id="profile"style={{display:"block"}}>
                    <MDBCardImage className="img-fluid" src="http://simpleicon.com/wp-content/uploads/user1.png" waves />
                    <MDBCardBody>                     
                      <MDBCardText>
                      <form id="show" style={{ display: "block" }}>
                                <p className="h4 text-center mb-4">PROFILE DETAILS</p>


                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                   Email   </label>
                                <input
                                    type="email"
                                    name="UserEmail"
                                    onChange={this.handleChange}
                                    value={this.state.personalData.UserEmail}
                                    className="form-control"
                                    disabled
                                />
                                <br />

                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    First Name   </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={this.handleChange}
                                    value={this.state.personalData.FirstName}
                                    className="form-control"
                                    disabled
                                />
                                <br />

                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Last Name   </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={this.handleChange}
                                    value={this.state.personalData.LastName}
                                    className="form-control"
                                    disabled
                                />
                                <br />

                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Base Location       </label>
                                <input
                                    type="text"
                                    name="baseLocation"
                                    onChange={this.handleChange}
                                    value={this.state.personalData.BaseLocation}
                                    className="form-control"
                                    disabled
                                />
                                <br />

                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Contact Number     </label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    onChange={this.handleChange}
                                    value={this.state.personalData.ContactNumber}
                                    className="form-control"
                                    disabled
                                />
                                <br />
                                <div className="text-center mt-4">
                                    <button onClick={this.handleEdit}> Edit Profile   </button>

                                </div>
                            </form>
                            {/* //////////////////////////////////// */}

                      <form id="edit" onSubmit={this.handleSubmit} style={{ display: "none" }}>
                        <p className="h4 text-center mb-4">Sign up</p>

                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                          First Name  </label>
                        <input
                          type="text"
                          name="firstName"
                          onChange={this.handleChange}
                          className="form-control"
                        />
                        <br />

                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                          Last Name      </label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={this.handleChange}
                          className="form-control"
                        />
                        <br />

                        <Select
                          value={this.state.skillSelected}
                          onChange={this.onChangeSkillSelected}
                          options={baselocations}
                          placeholder="Skills"
                          required
                        />
                        <br></br>  <br></br>

                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                          Contact Number       </label>
                        <input
                          type="text"
                          name="contactNumber"
                          onChange={this.handleChange}
                          className="form-control"
                        />
                        <br />


                        <div className="text-center mt-4">
                          <button type="submit">  Update      </button>
                          <button onClick={this.handleCancel}>      Cancel        </button>
                        </div>
                      </form>

                      </MDBCardText>               
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              )
        }
}

export default Userprofilecard;