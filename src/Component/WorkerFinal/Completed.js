import React from "react";
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import CompletedJobCard from "./CompletedJobCard";
import WorkerNavBar from "./WorkerNavBar";
export default class Completed extends React.Component {
    //get completed jobs list from backend
    //store to the state
    //loop through element and display
    constructor(props) {
        super(props);
        this.state = {
            completed: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/ordersWorker/getCompletedOrders/3")
            .then(response => {
                console.log(response.data.result)//
                this.setState({ completed: response.data.result[0] })
            })
    }
    render() {
        return (
            <div > 
                <WorkerNavBar />
                <div style={{ width: "90%", marginLeft: "2%" , marginTop:"2.5%"}}>
                    <MDBTable>
                        <MDBTableHead color="teal darken-2" style={{ color: "white" }}>
                            <tr>
                                <th>OrderId</th>
                                <th>ContactNumber</th>
                                <th>SkillTitle</th>
                                <th>OrderDate</th>
                                <th>ExpectedStartTime</th>
                                <th>ExpectedEndTime</th>
                                <th>ExpectedPrice</th>
                                <th>OrderLoaction</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Duration</th>
                                <th>HourlyCharge</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                this.state.completed.length ? this.state.completed.map(job => <CompletedJobCard
                                    OrderId={job.OrderId}
                                    ContactNumber={job.ContactNumber}
                                    SkillTitle={job.SkillTitle}
                                    OrderDate={job.OrderDate}
                                    ExpectedStartTime={job.ExpectedStartTime}
                                    ExpectedEndTime={job.ExpectedEndTime}
                                    ExpectedPrice={job.ExpectedPrice}
                                    OrderLoaction={job.OrderLoaction}
                                    FirstName={job.FirstName}
                                    LastName={job.LastName}
                                    Duration={job.Duration}
                                    HourlyCharge={job.HourlyCharge}

                                />) : null
                            }
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>


        )
    }
}