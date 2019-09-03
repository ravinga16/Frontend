import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import './App.css';
import UserProfile from './Component/User/UserProfile';
import MyBooking from './Component/User/Mybooking';
import Workerprofile from './Component/WorkerFinal/Workerprofile';
import Home from './Component/Home';
import SignIn from './Component/SignIn';

function App() {
  return (
   <Router>
    <Switch>
        <Route exact path="/"  component={Home} ></Route>       
        <Route path="/signin/" component={SignIn}></Route>
        <Route path="/client/profile/" component={UserProfile}></Route>
        <Route path ="/client/order/" component={MyBooking}></Route>
        <Route path="/worker/profile/" component={Workerprofile}></Route>  
    </Switch>        
   </Router>   
 

 
  );
}

export default App;