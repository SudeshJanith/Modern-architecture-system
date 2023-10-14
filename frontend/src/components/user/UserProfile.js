import React, { Component } from 'react';
import axios from 'axios';
// import SuccessReviewAlert from '../Review/SuccessReviewAlert';
// import ErrorReviewAlert from '../Review/ErrorReviewAlert';
import {FaEye, FaPlusCircle} from 'react-icons/fa';
import DefaultUserImage from '../css/img/male_default.jpg';
import '../css/custom.css';
import MaleDefaultImage from '../css/img/male_default.jpg';
// import ReactStars from 'react-rating-stars-component';
import DashboardLogo from '../css/img/HomeConstruction_Main_logo.png';
import {Link} from 'react-router-dom';
import {FaStar, FaTasks, FaUser, FaPlus} from 'react-icons/fa';
import { connect } from 'react-redux';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:props.email,
            // id:props.id,
            // id:'',
            // id:props.id,
            // rating:props.rating,
            // experience_rate:props.experience_rate,
            // mobile_number:props.mobile_number,
            // reigion:props.reigion,
            // zip_code:props.zip_code,
            // address:props.address, 

            name:props.name,
            address: props.address,
            reigion: props.reigion,
            zip_code: props.zip_code,
            mobile_number: props.mobile_number,
            rating: props.rating,
            no_projects: props.no_projects,
            experience_rate: props.experience_rate,
            errors:{},
            projects: [],
            customizeDetails:[]
        }
    }

    handleForm = (e) => {
        e.preventDefault();
        const data = {
            email:this.state.email,
            name:this.state.name,
            address:this.state.address,
            
            }
        console.log(data);
        axios.patch("http://localhost:8000/api/auth/update", data)
        .then(res => {
            console.log(res.data)
            this.props.history.push('/Userprofile');
            
        })
        .catch(e => this.setState({errors: e.response.data}))
        
        
    };

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    componentDidMount() 
    {
        axios.get('http://127.0.0.1:8000/api/viewProjectdata/'+ this.props.id)
        .then(response=>{
            this.setState({
                projects:response.data
            });
        });

        axios.get('http://127.0.0.1:8000/api/customizeDetailSend/'+ this.props.id)
        .then(response=>{
            this.setState({
                customizeDetails:response.data
                // console.log(response.data);
            });
        });

        
    }




    render(){
        return(
            <div>
                <main className="main-nopaddingUp">
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block sidebar_gradient sidebar">
                            <div className="sidebar-sticky sideBar">
                                <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <li className="text-center side-user-img">
                                        <img src={MaleDefaultImage} className="side-bar-user-img" alt="" />
                                    </li>
                                    <li className="butn_styles nav-item">
                                        <a className="nav-link text-white active" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-construction-tab" data-toggle="pill" href="#v-pills-construction" role="tab" aria-controls="v-pills-construction" aria-selected="true">Architect Projects</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-completed-projects-tab" data-toggle="pill" href="#v-pills-completed-projects" role="tab" aria-controls="v-pills-projects" aria-selected="true">Customize Projects</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        

                        <section role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <h2><img className="dashboard_logo_image" src={DashboardLogo} alt="" /> Dashboard</h2>
                                    <hr className="shadow-lg" />
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="dashboard_item_1 text-right text-white">
                                                <div className="inner_box_adjust_1">
                                                    <div>
                                                        <h4>1</h4>
                                                    </div>
                                                    <div>
                                                        <FaUser className="fontAwesome_icon_size"/>
                                                        <h5>Users</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="dashboard_item_2 text-right text-white">
                                                <div className="inner_box_adjust_2">
                                                    <div>
                                                        {/* <h4>{this.state.userBelongConstructionsCount}</h4> */}
                                                    </div>
                                                    <div>
                                                        <FaTasks className="fontAwesome_icon_size"/>
                                                        <h5>Projects</h5>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="dashboard_item_3 text-right text-white">
                                                <div className="inner_box_adjust_3">
                                                        <div>
                                                            {/* <h4 className="text-right">{this.state.userBelongReviewsCount}</h4> */}
                                                        </div>
                                                        <div>
                                                            <FaStar className="fontAwesome_icon_size"/>
                                                            <h5>Reviews</h5>
                                                        </div>
                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <br/>
                                    <h2>Progress</h2>
                                    <hr/>
                                    {/* <div className="row">
                                        <hr/>
                                        <div className="d-flex justify-content-left">
                                        <Link className="btn btn-lg btn-outline-success" to="/process"><FaPlus/> Add Project</Link>

                                        </div>
                                    </div> */}
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h2><img className="dashboard_logo_image" src={DashboardLogo} alt="" /> Profile</h2>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-lg-6 order-md-1">
                                            <h4>Account Details</h4>
                                            <hr/>
                                            <form onSubmit={this.handleForm}>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputName">Name :</label>
                                                        <input type="text" className="form-control" id="inputPassword" name="name" onChange={this.handleInput} value={this.state.name} />
                                                    </div>
                                                    <div className="form-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputEmail">Email :</label>
                                                        <input type="email" className="form-control"  name="email" onChange={this.handleInput} value={this.state.email}/>
                                                    </div>
                                                    <br/>
                                                </div>
                                                    <div className="form-group profile_inputs">
                                                        <label htmlFor="inputAddress">Address :</label>
                                                        <input type="text" className="form-control" id="inputAddress"  name="address" onChange={this.handleInput} value={this.state.id} placeholder="Address" />
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputName">Zip Code :</label>
                                                            <input type="text" className="form-control" id="inputPassword" name="Zip_code" placeholder="Zip Code" />
                                                        </div>
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputEmail">Reigion :</label>
                                                            <input type="text" className="form-control" id="inputEmail" placeholder="Reigion" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputName">Mobile Number :</label>
                                                            <input type="text" className="form-control" id="inputPassword" name="mobile_number" placeholder="Mobile Number" />
                                                        </div>
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputEmail">Telephone Number :</label>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button className="btn btn-default fire_gradient buttn_submit" type="submit">Update Info</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-6 order-md-">    
                                                <div className="profile_box">
                                                    <br/>
                                                    <div className="profile_picture text-center mb-3">
                                                        <img className="profile_image shadow" src={MaleDefaultImage} alt="" />
                                                    </div>
                                                    <div className="mt-10 profile_details text-center">
                                                        <h4></h4>
                                                        <h5></h5>
                                                        <div className="ml-10 text-center">
                                                            <input className="text-center" type="file" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                </div>
                                <div className="tab-pane fade" id="v-pills-construction" role="tabpanel" aria-labelledby="v-pills-construction-tab">
                                    <h2><img className="dashboard_logo_image" src={DashboardLogo} alt="" /> Create Architect Projects</h2>
                                    <hr/>
                                    <div className="d-flex justify-content-left">
                                        <Link className="btn btn-lg btn-outline-success" to="/createproject"><FaPlus/> Add new Architect Project</Link>
                                    </div>
                                    <hr/>

                                    {/* <div className="tab-pane fade" id="v-pills-completed-projects" role="tabpanel" aria-labelledby="v-pills-completed-projects-tab"> */}
                                    <h2><img className="dashboard_logo_image" src={DashboardLogo} alt="" /> Completed Projects</h2>
                                    <hr/>
                                    <div>
                                        {/* <Link className="btn btn-lg btn-outline-success" to="/#"><FaPlus/> Add a project</Link> */}
                                    </div>
                                    <br/>
                                    <div>
                                    <table className="table table-hover text-center">
                                            <thead>
                                                <tr>
                                                <th scope="col">Project Number</th>
                                                <th scope="col">Architect Name</th>
                                                <th scope="col">Plan type</th>
                                                <th scope="col">Sqfeet</th>
                                                <th scope="col">Architectural_Style</th>
                                                <th scope="col">Master Bed Rooms</th>
                                                <th scope="col">Nomal Bed Rooms</th>
                                                <th scope="col">Attach Bathrooms</th>
                                                <th scope="col">Non Attach BathRooms</th>
                                                <th scope="col">Kitchen</th>
                                                <th scope="col">Garage</th>
                                                <th scope="col">Covered_Porch</th>
                                                <th scope="col">LivingRoom</th>
                                                <th scope="col">GreatRoom</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.projects.map(projects=>{
                                                        return(
                                                                <tr>
                                                                <th scope="col">{projects.projid}</th>
                                                                <th scope="col">{projects.name}</th>
                                                                <th scope="col">{projects.plan_type}</th>
                                                                <th scope="col">{projects.sqfeet}</th>
                                                                <th scope="col">{projects.Architectural_Style}</th>
                                                                <th scope="col">{projects.no_Bed_Room_Attach}</th>
                                                                <th scope="col">{projects.no_Bed_Room_Non_Attach}</th>
                                                                <th scope="col">{projects.no_Bath_Room_Attach}</th>
                                                                <th scope="col">{projects.no_Bath_Room_Non_Attach}</th>
                                                                <th scope="col">{projects.no_Kitchen}</th>
                                                                <th scope="col">{projects.no_Garage}</th>
                                                                <th scope="col">{projects.no_Covered_Porch}</th>
                                                                <th scope="col">{projects.no_LivingRoom}</th>
                                                                <th scope="col">{projects.no_GreatRoom}</th>
                                                                </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                {/* </div> */}
                                
                                    <div>
                                        
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-completed-projects" role="tabpanel" aria-labelledby="v-pills-completed-projects-tab">
                                    <h2><img className="dashboard_logo_image" src={DashboardLogo} alt="" /> Customize Projects</h2>
                                    <hr/>
                                    <div>
                                        {/* <Link className="btn btn-lg btn-outline-success" to="/#"><FaPlus/> Add a project</Link> */}
                                    </div>
                                    <br/>
                                    <div>
                                    <table className="table table-hover text-center">
                                            <thead>
                                                <tr>
                                                <th scope="col">Project ID</th>
                                                <th scope="col">Architect ID</th>
                                                <th scope="col">customer name</th>
                                                <th scope="col">customer email</th>
                                                <th scope="col">customer mobile_number</th>
                                                <th scope="col">customer address</th>
                                                <th scope="col">changing bedrooms</th>
                                                <th scope="col">changing bathrooms</th>
                                                <th scope="col">changing garages</th>                                                
                                                <th scope="col">customer like to customize?</th>
                                                <th scope="col">customer dislike and want to avoid?</th>
                                                <th scope="col">Is There Anything Individual That Needs to be Accommodated?</th>
                                                <th scope="col">Job date</th>
                                                {/* <th scope="col">customer Land img</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.customizeDetails.map(customize=>{
                                                        return(
                                                                <tr>
                                                                <th scope="col">{customize.projid}</th>
                                                                <th scope="col">{customize.id}</th>
                                                                <th scope="col">{customize.	cus_name}</th>
                                                                <th scope="col">{customize.cus_email}</th>
                                                                <th scope="col">{customize.	Cus_mobile_number}</th>
                                                                <th scope="col">{customize.cus_address}</th>
                                                                <th scope="col">{customize.cus_howmanybedrooms}</th>
                                                                <th scope="col">{customize.cus_howmanybathrooms}</th>
                                                                <th scope="col">{customize.cus_howmanygarages}</th>
                                                                <th scope="col">{customize.cus_customize_details}</th>
                                                                <th scope="col">{customize.cus_dislike}</th>
                                                                <th scope="col">{customize.cus_accomdated}</th>
                                                                <th scope="col">{customize.created_at}</th>
                                                                {/* <th scope="col">{customize.no_GreatRoom}</th> */}

                                                                {/* <th scope="col">1</th>
                                                                <th scope="col">Chathurka vishmantha</th>
                                                                <th scope="col">chahthurkavish@gmail.com</th>
                                                                <th scope="col">0771306203</th>
                                                                <th scope="col">269/1,horagala,homagama</th>
                                                                <th scope="col">3</th>
                                                                <th scope="col">2</th>
                                                                <th scope="col">2</th>                                                                
                                                                <th scope="col">i need to customize large master bedroom</th>
                                                                <th scope="col">avoid the cover aproch and lundry rooms</th>
                                                                <th scope="col">yes</th>
                                                                <th scope="col">image.jpg</th> */}
                                                                </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                            
                        
                    </div>
                </div>
            </main>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        id:state.auth.user.id,
        rating:state.auth.user.rating,
        experience_rate:state.auth.user.experience_rate,
        mobile_number:state.auth.user.mobile_number,
        reigion:state.auth.user.reigion,
        zip_code:state.auth.user.zip_code,
        address:state.auth.user.address,
        name:state.auth.user.name,
        email:state.auth.user.email
    };
}

export default connect(mapStateToProps, null)(UserProfile);
