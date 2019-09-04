import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true
export default class SearchDelete extends React.Component{
    constructor(props){
        super(props);
        this.state={     
            skillId:1,
            orderdate:"2019-12-12",
            startTime:"12:00",
            data:[]
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/dataservices/getallskills', { credentials: 'include' })
          .then(response => console.log(response.json()))
          .then(data => this.setState({ data }));
      }
    render(){
        return(
            <h1>hi</h1>
        )
    }
}