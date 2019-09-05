import React from 'react';
import Upcoming from './Upcoming';
import WorkerNavBar from './WorkerNavBar';
import CompletedJobCard from './CompletedJobCard';

export default class appointment extends React.Component{
    render(){
        return(
            <div>
                <WorkerNavBar/>
              
                <div class="row">
                    <div class="col-md-5">  <Upcoming/></div>
                    <div class="col-md-5"> <CompletedJobCard/></div>
                </div>
            </div>
            
        )
    }
}