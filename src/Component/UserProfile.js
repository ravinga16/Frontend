import React from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default class UserProfile extends React.Component{
    render(){
        return(
        <Router>
            <MDBNav tabs color="indigo">
                <MDBNavItem>
                    <MDBNavLink active to="#!">Active</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!">Link 1</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!">Link 2</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!">Link 3</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
    </Router>
        );
    })
}