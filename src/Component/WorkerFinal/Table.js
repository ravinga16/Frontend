import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Summarycard from './summarycard';

class Table extends React.Component {
    render(){
       
        return (
            <MDBCol>
              <MDBCard style={{ width: "30rem" }}>
               
                <MDBCardBody>
                    <MDBCardImage className="img-fluid" src="https://www.oreilly.com/library/view/hands-on-gui-programming/9781788397827/assets/629caf81-65dc-4ade-bca7-c83446b9563a.png" waves />
                        <MDBCardTitle style={{textAlign:"center"}}>Income</MDBCardTitle>
                        
                  {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
                </MDBCardBody>
              </MDBCard>                      
              <Summarycard/>
            </MDBCol>
          )
    }
  
}

export default Table;