import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import cookie from 'js-cookie';
import { connect } from 'react-redux';

import {FaExclamationCircle} from 'react-icons/fa';
import RegisterLogo from '../css/img/HomeConstruction_Main_logo.png';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            address:"",
            type:"",
            reigion:"",
            zip_code:"",
            rating:"",
            no_projects:"",
            experience_rate:"",
            password:"",
            password_confirmation:"",
            mobile_number:"",
            tele_number:"",
            errors:{}
        }
    }

    handleForm = (e) => {
        e.preventDefault();
        const data = {
            name:this.state.name, 
            email:this.state.email,

            address:this.state.address,
            type:this.state.type,
            reigion:this.state.reigion, 
            zip_code:this.state.zip_code,
            rating:this.state.rating,
            no_projects:this.state.no_projects,
            experience_rate:this.state.experience_rate,
            mobile_number:this.state.mobile_number,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation 
        }
        axios.post("http://localhost:8000/api/auth/register", data)
        .then(res => {
            cookie.set('token', res.data.access_token);
            // cookie.set('user', res.data.user);
            this.props.setLogin(res.data.user);
            this.props.history.push('/UserProfile');
        })
        .catch(e => this.setState({errors: e.response.data}))
        console.log(data);
        
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }
    
    render() {
        const error = this.state.errors
        return (
            <main className="main">
                <div className="registry-box">
                    <img className="registerPage_img" src={RegisterLogo} alt=""></img>
                    <div>
                        <h2>Welcome to Home Construction Registration </h2>
                        <h3>Join with us today to make your dream home come true.</h3>
                        
                    </div>
                    <div>
                                <div className="text-center">
                                    { error.errors ? (<h5 className="alert alert-danger  d-flex justify-content-center fade-in "><FaExclamationCircle/>&nbsp;{error.errors}</h5>):("")}
                                </div>
                    </div>
                    <hr/>
                    <form action="" method="POST" className="text-center" name="regForm"  onSubmit={this.handleForm}>
                    <h4>Choose your Role</h4>
                        <div className="form-row">
                        <div className="form-group col-md-6 profile_inputs">
                                <select className="custom-select" name="type" id="inputGroupSelect01" onChange={this.handleInput} required>
                                    <option defaultValue>Choose your Role...</option>
                                    {/* <option value="customer">Customer</option> */}
                                    <option value="architect">Architect</option>
                                </select>
                            </div>
                        </div>
                        <hr/>

                    <h4>Account Info</h4>
                        <div className="form-row">
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="name" type="text" className="form-control" id="inputPassword" placeholder="Type your Full Name here...." onChange={this.handleInput} required/>
                            </div>
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Type your Email here...."  onChange={this.handleInput} required/>
                            </div>
                            <br/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="password" type="password" className="form-control" id="inputPassword" placeholder="Type your password here...." onChange={this.handleInput} required/>
                            </div>
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="password_confirmation" type="password" className="form-control" id="inputEmail" placeholder="Confirm your password here...." onChange={this.handleInput} required/>
                            </div>
                        </div>
                        <hr/>
                        <hr/>
                        <h4>Personal Info</h4>
                        <div className="form-group profile_inputs">
                            <input name="address" type="text" className="form-control" id="inputAddress" placeholder="Type your Address here...." onChange={this.handleInput} required/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="zip_code" type="number" className="form-control" id="inputPassword" placeholder="Type your Zip Code here...." onChange={this.handleInput} required/>
                            </div>
                            <div className="form-group col-md-6 profile_inputs">
                                <select className="custom-select" name="reigion" id="inputGroupSelect01" onChange={this.handleInput} required>
                                    <option defaultValue>Choose your reigion...</option>
                                    <option value="Rathnapura">Rathnapura</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Colombo">Galle</option>
                                    <option value="Colombo">Anuradhapura</option>
                                    <option value="Colombo">Badhulla</option>
                                    <option value="Colombo">Awissawella</option>
                                    <option value="Colombo">Matara</option>
                                    <option value="Colombo">Katharagama</option>
                                    <option value="Colombo">Hatton</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="mobile_number" type="text" className="form-control" id="inputPassword" placeholder="Type your Mobile Number here...." onChange={this.handleInput} required/>
                            </div>
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="rating" type="text" className="form-control" id="" placeholder="Type your rating here...." onChange={this.handleInput} />
                            </div>
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="no_projects" type="text" className="form-control" id="" placeholder="Type your no_projects here...." onChange={this.handleInput} />
                            </div>
                            <div className="form-group col-md-6 profile_inputs">
                                <input name="experience_rate" type="text" className="form-control" id="" placeholder="Type your experience_rate here...." onChange={this.handleInput} />
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-lg fire_gradient text-white" type="submit">Register</button>
                        </div>
                    </form>
                    <div className="other_links">
                            <Link to="/login">Already have an account ??</Link><br />
                            

                    </div>
                </div>
            </main>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLogin : (user) => dispatch ({type:"SET_LOGIN", payload:user})
    }
}

export default connect(null, mapDispatchToProps)(Register)
