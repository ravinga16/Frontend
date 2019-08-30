import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './App.css';
import Home from './Component/Home';

import UserProfile from './Component/User/UserProfile';
import SignInFinal from './Component/SignInFinal';



function App() {
  return (
   <Router>
     {/* <MDBNav className="justify-content-end">
      <MDBNavItem>
        <MDBNavLink active to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Search</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Link</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
      </MDBNavItem>
    </MDBNav> */}
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignIn/" exact component={SignInFinal} />
        <Route path="/usernavbar/" component={UserProfile}/>

    </Switch>
    
   </Router>   
 

 
  );
}

export default App;
