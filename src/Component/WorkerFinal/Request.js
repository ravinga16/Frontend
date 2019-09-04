import React from 'react';
import axios from 'axios';
import RequestCard from './RequestCard';


export default class Request extends React.Component{
    constructor(props){
        super(props);
        this.state={
            request:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3000/requests/pool/worker/3")
        .then(response=>{
            console.log(response.data.result[0])//
            this.setState({request:response.data.result[0]})
        })
    }
    render(){
        return(
            <div>
                 {
                    this.state.request.length ? this.state.request.map(req => <RequestCard
                        ClientId={req.ClientId}
                        StartTime={req.StartTime}
                        ExpectedEndTime={req.ExpectedEndTime}
                        OrderDate={req.OrderDate}
                        OrderLocation={req.OrderLocation}
                        SkillId={req.SkillId}
                   
                    />) : null
                }
            </div>
        )
    }
}