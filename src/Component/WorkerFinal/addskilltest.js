// import React from 'react';
// import axios from 'axios';
// import { MDBContainer, MDBRow,  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

// export default class addskilltest extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={skillObj : [ ],
//                     skillId:"",
//                     description:"",
//                     hrate:""
//                     }
        
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState({[event.target.name]:event.target.value})      
//         // this.setState({[event.target.name]:event.target.value});
       
//     }
//     handleSubmit(event){
//         event.preventDefault();
//         this.setState(state => ({
//             // skillObj : 122
//             skillObj: state.skillObj.concat({"skillId":this.state.skillId,"description":this.state.description,"hrate":this.state.hrate})
//         }),()=>{
//             console.log(this.state)

//         })
        
        
//         // console.log(this.state.skillObj.concat({"skillId":"this.state.skillId","description":"this.state.description","hrate":"this.state.hrate"}));
     
//         // axios.post('http://localhost:3000/worker/skill/19', this.state)
//         //     .then(response => {
//         //         console.log(response)
//         //     })
//         //     .catch(error => {
//         //         console.log(error)
//         //     })
//     }
//     render(){
//         return(
//             <MDBCol>
//             <MDBCard style={{ width: "30rem" }}>        
//                 <MDBCardBody>
//                 <MDBContainer>
//                     <MDBRow>
//                     <MDBCol md="11">
//                         <form onSubmit={this.handleSubmit}>
//                         <h5 style={{textAlign:"center"}}>Add a Skill</h5>                  
//                         <input
//                             type="text" 
//                             name="skillId"                 
//                             className="form-control"
//                             placeholder="skill title"
//                             onChange={this.handleChange}
//                         />
//                         <br />                 
//                         <input
//                             type="text" 
//                             name="description"           
//                             className="form-control"
//                             placeholder="Skill Description"
//                             onChange={this.handleChange}
//                         />
//                         <br />
//                         <input
//                             type="float" 
//                             name="hrate"    
//                             className="form-control"
//                             placeholder="Hourly Rate"
//                             onChange={this.handleChange}
//                         />
//                         <div className="text-center mt-4">
//                             <MDBBtn color="indigo" type="submit">ADD</MDBBtn>
//                         </div>
//                         </form>
//                     </MDBCol>
//                     </MDBRow>
//                 </MDBContainer>
//                 </MDBCardBody>
//             </MDBCard>
//             </MDBCol>


            
//         );
//     }
// }