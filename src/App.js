import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';

import './App.css';
import Home from './Component/Home';
import UserProfile from './Component/User/UserProfile';
import SignInFinal from './Component/SignInFinal';
import MyBooking from './Component/User/Mybooking'
import Workerprofile from './Component/WorkerFinal/Workerprofile';

function App() {
  return (
   <Router>

    <Switch>
        <Route exact path="/"  component={Home} ></Route>
        <Route path="/SignIn/" exact component={SignInFinal} ></Route> 
        <Route path="/client/profile/" component={UserProfile}></Route>
        <Route path ="/client/order/" component={MyBooking}></Route>
        <Route path="/worker/profile/" component={Workerprofile}></Route>
    </Switch> 
       
   </Router>   
 

 
  );
}

export default App;