import React from "react";
import {  MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
export default class AddSkill extends React.Component {
    render() {
        return (
            <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    
                    <MDBCardBody>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12">
                            <form>
                                <h6>Add A Skill</h6>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Skill Name
                                </label>
                                <input
                                type="text"
                                
                                className="form-control"
                                />
                                
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Skill Description
                                </label>
                                <input
                                type="text"
                             
                                className="form-control"
                                />

                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Rate (For Hour)
                                </label>
                                <input
                                type="email"
                            
                                className="form-control"
                                />
                                <br />

                                <div className="text-center mt-4">
                                <MDBBtn >Add</MDBBtn>
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

