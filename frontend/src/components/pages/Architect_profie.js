import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CarouselImage04 from '../css/img/Carousel/carousel_img_4.jpg';
import CarouselImage03 from '../css/img/Carousel/carousel_img_3.png';

import '../css/custom.css';
import { connect } from 'react-redux';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import userLogo from '../css/img/male_default.jpg';



class Architect_profile extends Component {


    constructor(props) {
        super(props);
        this.state = {
            architect:[],
            recomnedarchitect:[],
            username:''     
            
        }
            
    }
    

        componentDidMount() 
        {

            axios.get('http://127.0.0.1:8000/api/Showarchitect/'+this.props.match.params.id)
            .then(response=>{
                // console.log(response.data);
                this.setState({
                    username:response.data.name
                });
            });

            axios.get('http://127.0.0.1:8000/api/Showarchitectproject/'+this.props.match.params.id)
            // axios.get('http://127.0.0.1:8000/api/Showarchitectproject/')
            .then(response=>{
                this.setState({
                    architect:response.data
                });
            });

            
    
            
        }


    render() {

        const {architect} = this.state;

        return (
            
           

                <div className="row py-2 px-12">
                        <div className="col-md-12 mx-auto">
                            
                            <div className="ppnew bg-white shadow rounded overflow-">
                                <div className="px-4 pt-0 pb-4 cover">
                                    <div className="media align-items-end profile-head">
                                        <div className="profile mr-3"><img className="img2" src={CarouselImage03} alt="" /><br/><a href="/#" className=" "><Link className="btn btn-lg btn-outline-success" to="/UserProfile">Edite </Link></a></div>
                                        
                                        <div className="media-body mb-5 text-white">
                                            <div><h4>{this.state.username}</h4></div>
                                            {/* <h4 className="mt-0 mb-0">Name:{this.state.username}</h4> */}
                                            <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>Sri Lanka</p>
                                        </div>
                                    </div>
                                </div>

                                    <div className="container">
                                        <div className="row">
                                            
                                            <div className="text-center jumbotron jumbotron">


                                                <div className="row text-center">
                                                {
                                                    architect
                                                    // .filter(searchForSqvalue(term))
                                                    // .filter(searchForattachbathroom(term2))
                                                    // .filter(searchForgarage(term3))
                                                    // .filter(searchForKitchen(term4))
                                                        .map( archi => 
                                                    
                                                            <div className="user_card" key={archi.id}>
                                                                <div className="user_card-header">
                                                                    <div className="animated_wave-bg">
                                                                        <div className="animated_wave-01"></div>
                                                                        <div className="animated_wave-02"></div>
                                                                        <div className="animated_wave-03"></div>
                                                                    </div>
                                            
                                                                    <div className="user_profile_pic-content">
                                                                        <img className="user_profile_pic" src={CarouselImage03} alt=""/>
                                                                    </div>
                                                                </div>
                                            
                                                                <div className="user_card-content">
                                                                    <div className="user_name">
                                                                        <h4>Plane Type :{archi.plan_type}</h4>
                                                                        <h4>No .Master Bed :{archi.no_Bed_Room_Attach}</h4>
                                                                        <h4>No .Kitchen : {archi.no_Kitchen}</h4>
                                                                        <h4>No .Attach Bath : {archi.no_Bath_Room_Attach}</h4>
                                                                        <h4>No .Garage: {archi.no_Garage}</h4>
                                                                    </div>
                                                                    
                                                                    {/* <div className="user_social-media">
                                                                        <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                                                                        <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                                                        <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                                                                        <a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                                                                        <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                                                    </div> */}
                                                                    <a href="/#" className="btn btn-warning">Select</a>
                                                                    {/* <Link to={'/arc_prductdetails'} className="btn btn-success">View</Link> */}
                                                                    <Link to={`/arc_prductdetails/ ${archi.projid}`} className="btn btn-success">View</Link>
                                                                </div>
                                                            </div>

                                                        )
                                                    
                                                }
                                                </div>

                                            </div>

                                            
                                    </div>
                                </div>

                                
                            </div>

                            


                            

                        </div>

                        
                </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        name:state.auth.user.name
    };
}

export default connect(mapStateToProps, null)(Architect_profile);

// export default Architect_profile

