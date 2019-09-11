import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import './App.css';
import UserProfile from './Component/User/UserProfile';
import MyBooking from './Component/User/Mybooking';
import Workerprofile from './Component/WorkerFinal/Workerprofile';
import Home from './Component/Home';
import SignIn from './Component/SignIn';
import Search from './Component/User/Search';

import appointment from './Component/WorkerFinal/appointment';
import Request from './Component/WorkerFinal/Request';
import Completed from './Component/WorkerFinal/Completed';
import Upcoming from './Component/WorkerFinal/Upcoming';
import {PrivateRoute} from './PrivateRoute';
// import {Route} from './Route';

function App() {

  return (
   <Router>
    <Switch>
        <Route exact path="/"  component={Home} ></Route>       
      <Route path="/signin/" component={SignIn}></Route>
        <PrivateRoute path="/client/profile/" component={UserProfile}></PrivateRoute>       
       <PrivateRoute path="/client/search/" component={Search}></PrivateRoute>
        <PrivateRoute path ="/client/order/" component={MyBooking}></PrivateRoute>        
        <PrivateRoute path="/worker/profile/" component={Workerprofile}></PrivateRoute> 
        <PrivateRoute path="/worker/appointment/" component={appointment}></PrivateRoute> 
        <PrivateRoute path="/worker/completed/" component={Completed}></PrivateRoute> 
        <PrivateRoute path="/worker/request/" component={Request}></PrivateRoute> 
        <PrivateRoute path="/worker/upcoming/" component={Upcoming}></PrivateRoute>
   
        
        

    </Switch>        
   </Router>   
 

 
  );
}

export default App;