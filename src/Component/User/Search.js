import React from "react";
import { MDBContainer, MDBRow,  MDBCol, MDBIcon, MDBFormInline, MDBBtn } from "mdbreact";
import './Search.css';
import Halfbackimage from './halfbackimage.js';
import UserNavBar from './UserNavBar';

export default class Search extends React.Component {
    render() {
        return (
            <div>
                <UserNavBar />
                <Halfbackimage />
                <MDBContainer style={{ marginTop: "70px" }}>
                    <MDBRow>
                        <MDBCol md="8">
                            <div className="active-pink-3 active-pink-4 mb-4">
                                <input style={{ marginTop: "10px" }} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                        </MDBCol>
                        <MDBCol md="2">
                            <MDBBtn color="unique-color">Book Now</MDBBtn>
                        </MDBCol>
                        <MDBCol md="2">
                            <MDBBtn color="unique-color">Book Later</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                
            </div>



        );
    }
}

