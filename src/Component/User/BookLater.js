import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import BookLaterForm from "./bookLaterForm";

class BookLater extends React.Component{
    render(){
        return (
            <MDBContainer>
              <MDBRow>
                <MDBCol md="4"><BookLaterForm/></MDBCol>
                <MDBCol md="8"></MDBCol>
              </MDBRow>
            </MDBContainer>
          );
    }
}
export default BookLater;