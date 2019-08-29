import React from "react";
import { MDBContainer, MDBRow,  MDBCol, MDBIcon, MDBFormInline, MDBBtn } from "mdbreact";
import './Search.css';
import Halfbackimage from './halfbackimage.js';
import UserNavBar from './UserNavBar';
import SkillCard from './SkillCard';
import axios from 'axios';
export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/dataservices/getallskills")
        .then(response => {
            this.setState({posts:response.data.recordset});
            console.log(response.data.recordset)
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        const {posts} = this.state;
        return (
            <div>
                ggggggggggggggggggggggggggggg
                <Halfbackimage />
                <MDBContainer style={{ marginTop: "70px" }}>
                    <MDBRow>                        
                            {
                                posts.length? posts.map(post => <MDBCol style={{ marginTop: "20px", marginLeft:"25%"}}  md="12"><SkillCard   title={post.SkillTitle}/></MDBCol>):null
                            }                  
                       
                    </MDBRow>
                </MDBContainer>

                
            </div>



        );
    }
}

