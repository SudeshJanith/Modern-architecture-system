
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import cookie from 'js-cookie';
import { connect } from 'react-redux';

import {FaExclamationCircle} from 'react-icons/fa';
import RegisterLogo from '../css/img/HomeConstruction_Main_logo.png';

class customize_paln extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projid:'',
            // projid:props.projid,
            x:'',
            // id:'',
            cus_name:'',
            cus_email:'',
            Cus_mobile_number:'',
            cus_address:'',
            cus_howmanybedrooms:'',
            cus_howmanybathrooms:'',
            cus_howmanygarages:'',
            cus_customize_details:'',
            cus_dislike:'',
            cus_accomdated:'',
            project_details:[],

            SystemUser:this.props.location.state.SystemUser
            
        }
    }

    handleForm = (e) => {
        e.preventDefault();
        const data = {
            
            projid:this.state.SystemUser[0].projid, 
            // id:this.this.state.SystemUser[0].id,         
            id:this.state.SystemUser[0].id,           
            cus_name:this.state.cus_name, 
            cus_email:this.state.cus_email,
            Cus_mobile_number:this.state.Cus_mobile_number,
            cus_address:this.state.cus_address,
            cus_howmanybedrooms:this.state.cus_howmanybedrooms,
            cus_howmanybathrooms:this.state.cus_howmanybathrooms,
            cus_howmanygarages:this.state.cus_howmanygarages,
            cus_customize_details:this.state.cus_customize_details,
            cus_dislike:this.state.cus_dislike,
            cus_accomdated:this.state.cus_accomdated
        }
        axios.post("http://localhost:8000/api/customer_change_plan_details", data)
        .then(res => {
            // this.props.history.push('/arc_prductdetail');
        })
        
    } 



    // componentDidMount() 
    // {
    //     axios.get('http://127.0.0.1:8000/api/Project_details_render_to_customize_paln/' + this.props.match.params.id)
    //     .then(response=>{
    //         this.setState({
    //             x:response.data.id
    //         })
    //             console.log(response.data);
               
            
    //     });
        
    // }
    
    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }


    render() {

        // const {project_details} = this.state;
        

        return (
            
                    <main className="main">
                    <div className="registry-box">
                        <img className="registerPage_img" src={RegisterLogo} alt=""></img>
                        <div>
                            <h1>Customize A Home Plan {this.state.SystemUser[0].id}</h1>
                            <h6>In a world of personalizing everything from your car to your phone why not personalize your home? We’re not just talking the paint color, the artwork or the furniture. If you’re building a new home we strongly believe that the home plan should be personalized to you. Whether that means increasing (or decreasing) the size of the plan, converting the basement to a walk-out or revising the lay-out we can help to make the home plan perfect for you..</h6>
                            {/* <input name="projid" type="text" className="form-control" id="inputPassword" placeholder="id...." onChange={this.handleInput} required/> */}
                            {/* <input name="id" type="text" className="form-control" id="inputPassword" placeholder="id...." onChange={this.handleInput} required/> */}
                            
                        </div>
                        <div>
                        </div>
                        <hr/>
                        <form action="" method="POST" className="text-center" name="regForm"  onSubmit={this.handleForm}>
                        {/* {
                            project_details.map(project_details=>{
                                return(
                                         
                                            <div><h4>Personal Info :{project_details.projid}</h4></div>
                                          
                                    )
                                })
                            } */}
                        {/* <h4>Personal Info </h4> */}
                            <div className="form-row">
                                <div className="form-group col-md-6 profile_inputs">
                                    
                                    <input name="cus_name" type="text" className="form-control" id="inputPassword" placeholder="Type your Full Name here...." onChange={this.handleInput} required/>
                                    {/* {
                                            project_details.map(project_details=>{
                                                return(
                                    
                                                        <input name="projid" type="text" placeholder="projectid" value={this.state.SystemUser[0].projid} onChange={this.handleInput} required/>
                                                    )
                                                })
                                        }
                                        {
                                            project_details.map(project_details=>{
                                                return(
                                    
                                                        <input name="id" type="text" value={project_details.id} onChange={this.handleInput} required/>
                                                    )
                                                })
                                        } */}
                                
                                </div>
                                <div className="form-group col-md-6 profile_inputs">
                                    <input name="cus_email" type="text" className="form-control" id="inputEmail" placeholder="Type your Email here...."  onChange={this.handleInput} required/>
                                </div>
                                <div className="form-group col-md-6 profile_inputs">
                                    <input name="Cus_mobile_number" type="text" className="form-control" id="inputEmail" placeholder="Type your Phone number here...."  onChange={this.handleInput} required/>
                                </div>
                                <div className="form-group profile_inputs">
                                <input name="cus_address" type="text" className="form-control" id="inputAddress" placeholder="Type your Address here...." onChange={this.handleInput} required/>
                            </div>
                                <br/>
                            </div>
                            <hr/>
                            <hr/>
                            <h4>What would you like to change</h4>
                            
                            <div className="form-group profile_inputs">
                                <input name="cus_howmanybedrooms" type="number" className="form-control" id="inputAddress" placeholder="How many bedrooms you need...." onChange={this.handleInput} required/>
                            </div>
                            <div className="form-group profile_inputs">
                                <input name="cus_howmanybathrooms" type="number" className="form-control" id="inputAddress" placeholder="How many bath rooms you need...." onChange={this.handleInput} required/>
                            </div>
                            <div className="form-group profile_inputs">
                                <input name="cus_howmanygarages" type="number" className="form-control" id="inputAddress" placeholder="How many Garages  you need...." onChange={this.handleInput} required/>
                            </div>
                            <hr/>
                            <br/>
                            <br/>

                            <h6>Upload Your land's image</h6>
                            <br/>
                            <br/>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" >Upload</span>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input"  aria-describedby="inputGroupFileAddon01"/>
                                    <label className="custom-file-label" >Choose file</label>
                            </div>
                            </div>
                            <br/>
                            <br/>
                            <hr/>
                            

                
                            <div className="form-group purple-border">
                            <h4>What would you like to customize?</h4>
                                <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" name="cus_customize_details" type="text" placeholder="Type you like to customize here...." onChange={this.handleInput}  required></textarea>
                            </div>

                            <div className="form-group purple-border">
                                <h4>Is there anything you dislike and want to avoid?</h4>
                                <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" name="cus_dislike" type="text" placeholder="Type you dislike and want to avoid here...."  onChange={this.handleInput} required></textarea>
                            </div>

                            <div className="form-group purple-border">
                            <h4>Is There Anything Individual That Needs to be Accommodated?</h4>
                                <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" name="cus_accomdated" type="text" placeholder="Type you That Needs to be Accommodated here...."  onChange={this.handleInput} required></textarea>
                            </div>

                            <div className="text-center">
                                <button className="btn btn-default fire_gradient buttn_submit" type="submit">Submit</button>
                                <Link to={`/`} className="btn btn-success">Go back</Link>
                                

                                
                            </div>


                            

                        </form>
                    </div>
                </main>
                )
    }
}

export default customize_paln