import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import './App.css';
import UserProfile from './Component/User/UserProfile';
import MyBooking from './Component/User/Mybooking';
import Workerprofile from './Component/WorkerFinal/Workerprofile';
import Home from './Component/Home';
import SignIn from './Component/SignIn';
import Search from './Component/User/Search';
import SearchDelete from './Component/User/SearchDelete';
import appointment from './Component/WorkerFinal/appointment';
import Request from './Component/WorkerFinal/Request';
import Completed from './Component/WorkerFinal/Completed';
import Upcoming from './Component/WorkerFinal/Upcoming';
import Tets from './test2'
// import {Route} from './Route';

function App() {

  return (
   <Router>
    <Switch>
        <Route exact path="/"  component={Home} ></Route>       
      <Route path="/signin/" component={SignIn}></Route>
        <Route path="/client/profile/" component={UserProfile}></Route> 

        {/* <Route path="/client/search/" component={SearchDelete}></Route> */}
{/* //lklfdlsmflds */}
       <Route path="/client/search/" component={Search}></Route>
        <Route path ="/client/order/" component={MyBooking}></Route>
        
        <Route path="/worker/profile/" component={Workerprofile}></Route> 
        <Route path="/worker/appointment/" component={appointment}></Route> 
        <Route path="/worker/completed/" component={Completed}></Route> 
        <Route path="/worker/request/" component={Request}></Route> 
        <Route path="/worker/upcoming/" component={Upcoming}></Route>
   
        
        

    </Switch>        
   </Router>   
 

 
  );
}

export default App;