import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import cookie from 'js-cookie';
import Error from '../Error/error';
import '../css/custom.css';
// import {FaUserCircle, FaLock, FaExclamationCircle} from 'react';
import MainLogo from '../css/img/HomeConstruction_Main_logo.png';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            errors:{},
            architects_details:[],
            architect_id:'',
        }
    }

    handleForm = (e) => {
        e.preventDefault();
        const data = {email:this.state.email, password:this.state.password}
        console.log(data);
        axios.post("http://localhost:8000/api/auth/login", data)
        .then(res => {
            cookie.set('token', res.data.access_token);
            this.props.setLogin(res.data.user);
            this.props.history.push('/Userprofile');
            
        })
        .catch(e => this.setState({errors: e.response.data.errors}))
        
        
    };

    // componentDidMount() 
    // {
    //     axios.get('http://127.0.0.1:8000/api/architects_details/')
    //     .then(response=>{
    //         this.setState({
    //             architect_id:response.data.id
    //         });
    //     });

        
    // }

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
                <div className="login-box">
                    <div>
                        <img className="loginPage_img"  src={MainLogo} alt=""></img>
                        <h1>Welcome to Login</h1>
                        <h3>Qualified and professional personnel for your dream home.</h3>
                    </div>
        
                    <form className="text-center" onSubmit={this.handleForm}>

                        <div>
                                <div className="text-center">
                                    { error.errors ? (<h5 className="alert alert-danger  d-flex justify-content-center fade-in ">&nbsp;{error.errors}</h5>):("")}
                                </div>
                                <div className="text-center">
                                    <Error 
                                        error={this.state.errors['result']
                                        ? this.state.errors['result']
                                            :null}/>
                                </div>
                        </div>
                        
                    
                        <div className="text-center text_inputs">
                            <input className="text" type="text" name="email" id="user_email" placeholder="Enter your E-mail" onChange={this.handleInput} />
                            <Error error={this.state.errors['email']? this.state.errors['email']:null}/>
                        </div>
                        <div className="text-center text_inputs">
                            <input className="" type="password" name="password" id="user_password" placeholder="Enter your password" onChange={this.handleInput} />
                            <Error error={this.state.errors['password']? this.state.errors['password']:null}/>
                        </div>

                        <div>
                            <button className="btn btn-default fire_gradient buttn_submit" type="submit">Log in</button>
                            {/* <Link to={`/Userprofile/ ${this.state.architect_id}`} className="btn btn-success">Log in</Link> */}
                        </div>

                        <div className="other_links">
                            
                            <Link to="/reset">Did you forget your password ??</Link><br />
                            <Link to="/register">Don't have an account yet ??</Link><br />
                            
                        </div>
                        
                    </form>
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

export default connect(null, mapDispatchToProps)(Login);