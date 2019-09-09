// import React from 'react';
// import axios from 'axios';
// axios.defaults.withCredentials = true
// export default class SearchDelete extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={     
//             skillId:1,
//             orderdate:"2019-12-12",
//             startTime:"12:00",
//             data:[]
//         }
//     }
//     componentDidMount() {
//         axios.create({withCredentials:true}).get('http://localhost:3000/dataservices/getallskills',{withCredentials:true})        
//         .then(response => {
//                 console.log(response.data)
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
//     render(){
//         return(
//             <h1>hi</h1>
//         )
//     }
//     }