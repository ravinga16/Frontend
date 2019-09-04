import React from 'react';
import Upcoming from './Upcoming';
import WorkerNavBar from './WorkerNavBar';

export default class appointment extends React.Component{
    render(){
        return(
            <div>
                <WorkerNavBar/>
                <Upcoming/>
            </div>
            
        )
    }
}