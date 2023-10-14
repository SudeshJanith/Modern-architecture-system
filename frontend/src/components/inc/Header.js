import React, { Fragment } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import HeaderLogo from '../css/img/Home_Construction_logo_White.png';
import UserImage from '../css/img/male_default.jpg';
import { connect } from 'react-redux';
import cookie from 'js-cookie';
import {FaBell} from 'react-icons/fa';

import Login from "../user/Login";
import AddReview from '../Review/AddReview';
import UserProfile from "../user/UserProfile";
import Register from '../user/Register';
import GuestRoute from '../user/GuesRoute';
import CustomerUserProfile from '../user/CustomerUserProfile';
import AuthRoute from '../user/AuthRoute';
import CreateProject from '../Architect/CreateProject';
import HomePage from '../pages/Home';
import MaterialUiRating from '../Rating/MaterialUiRating';
import NewStarRating from '../Rating/NewStarRating';
// import arc_selecttion2 from '../Architecture/ArchitectureSelection2';
import ArchitectureModelSelection from '../Architecture/ArchitectureModelSelection';
// import ArchitectureSelection from '../Architecture/ArchitectureSelection';
import customerDetails from '../ML/customerDetails';
// import ModelSearch from '../Architecture/ModelSearch';
import Architect_profile from '../pages/Architect_profie';
import Productdetails from '../pages/Productdetails';
import customize_paln from '../pages/customize_paln';
import RegisterMainPage from '../user/RegisterMainPage';
import RegisterCustomer from '../user/RegisterCustomer';


function Header(props) {


    const handleLogout = (e) => {
        e.preventDefault();
        cookie.remove('token');
        props.logout();
    }


        return (
                <header>
                        <nav className="fire_gradient navbar navbar-expand-md navbar-dark text-light shadow">
                            <div className="container">
                                <Link to="/" className="navbar-brand text-white"><img className="header_image" src={HeaderLogo} alt="" /> Home Construction</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarResponsive">
                                        <ul className="navbar-nav ml-auto float-right text-right">
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="/about">About</Link>
                                            </li>
                                            {
                                                !props.loggedIn ? 
                                                (<Fragment>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/register_mainpage">Register</Link>
                                                </li>
                                                </Fragment>)
                                                :
                                
                                                (<Fragment>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/#" onClick={handleLogout}>Logout</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><FaBell className="notifi_icon"/></Link>
                                                </li>
                                                <li className="nav-item nav-user-img">
                                                    {/* <Link to="#"><img src={UserImage} className="nav-bar-user-img" alt="" /></Link> */}
                                                    <div className="dropdown dropDown_sizing">
                                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <img src={UserImage} className="nav-bar-user-img" alt="" />
                                                        </button>
                                                        <div className="dropdown-menu dropDown_menu_sizing" aria-labelledby="dropdownMenu2">
                                                            <Link className="dropdown-item btn-sm text-right text-sm" type="button" to="/UserProfile">Dashboard</Link>
                                                            <a className="dropdown-item btn-sm text-right" type="button" onClick={handleLogout}>Logout</a>
                                                        </div>
                                                    </div>
                                                </li></Fragment>)
                                            }  
                                                                                                               
                                        </ul>
                                    </div>
                            </div>
                        </nav>
                        {props.children}
                        <div>
                            <Switch>
                                    <GuestRoute path="/login" component={Login}/>
                                    <AuthRoute exact path="/UserProfile" component={UserProfile}/>
                                    <AuthRoute exact path="/CustomerUserProfile" component={CustomerUserProfile}/>
                                    <GuestRoute path="/register" component={Register}/>
                                    <Route path="/createproject" component={CreateProject}/>
                                    <Route exact path="/" component={HomePage}/>
                                    <Route path="/MaterialUiRating" component={MaterialUiRating}/>
                                    <Route path="/NewStarRating" component={NewStarRating}/>
                                    <Route exact path='/add_review' component={AddReview} />
                                    <Route exact path='/arc_ml_data' component={customerDetails} />
                                    {/* <Route exact path='/Model_search' component={ModelSearch} /> */}
                                    <Route exact path='/architecture_search_model' component={ArchitectureModelSelection} />
                                    {/* <Route exact path="/arc_selecttion" component={ArchitectureSelection}/> */}
                                    <Route exact path='/arc_profile/:id' component={Architect_profile}/>
                                    <Route  path="/arc_prductdetails/:id" component={Productdetails}/>
                                    {/* <Route  path="/arc_prductdetail" component={Productdetails}/> */}
                                    <Route exact path="/customize_plan/" component={customize_paln}/>
                                    <Route exact path="/register_mainpage" component={RegisterMainPage}/>
                                    <Route exact path="/customer_register2" component={RegisterCustomer}/>
                                    {/* <Route exact path="/arc_profile/:name" component={ArchitectureModelSelection}/> */}
                            </Switch>
                        </div>
                </header>
           
        );
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({type: 'SET_LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);