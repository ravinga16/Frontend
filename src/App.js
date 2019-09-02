import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './App.css';
import Home from './Component/Home';
import UserProfile from './Component/User/UserProfile';
import SignInFinal from './Component/SignInFinal';
import MyBooking from './Component/User/Mybooking'
import Workerprofile from './Component/WorkerFinal/Workerprofile';

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
        <Route exact path="/"  component={Home} ></Route>
        <Route path="/SignIn/" exact component={SignInFinal} ></Route>
        {/* <Route path="/usernavbar/" component={UserProfile}/> */}
        <Route path="/client/profile/" component={UserProfile}></Route>
        <Route path ="/client/order/" component={MyBooking}></Route>
        <Route path="/worker/profile/" component={Workerprofile}></Route>
    </Switch>    
   </Router>   
 

 
  );
}

export default App;
