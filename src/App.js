import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './App.css';
import Home from './Component/Home';

import UserProfile from './Component/UserProfile';
import SignInFinal from './Component/SignInFinal';
import Search from './Component/User/Search';
import UserNavBar from './Component/User/UserNavBar';
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
        <Route path="/" exact component={Home} />
        <Route path="/SignIn/" exact component={SignInFinal} />
        <Route path="/usernavbar/" component={Workerprofile}/>
        {/* <Route path="/usernavbar/" component={UserNavBar}/> */}
        <Route path="/usernavbar/search/" component={Search}/>
    </Switch>
    
   </Router>   
 

 
  );
}

export default App;
