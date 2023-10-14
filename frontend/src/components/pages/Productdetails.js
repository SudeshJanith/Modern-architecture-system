import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import prodct1 from '../css/img/prodct/product1.jpg';
import prodct2 from '../css/img/prodct/product2.jpg';
import prodct3 from '../css/img/prodct/product3.jpg';
import CarouselImage03 from '../css/img/Carousel/carousel_img_3.png';
import '../css/custom.css';
// import '../css/smoothproducts.css';
import '../css/custom.css';

class Productdetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            review: [],
            project_details: [],
        }
    }

    componentDidMount() 
    {
        axios.get('http://127.0.0.1:8000/api/review')
        .then(response=>{
            this.setState({
                review:response.data
            });
        });

        // axios.get('http://127.0.0.1:8000/api/project_details/')
        axios.get('http://127.0.0.1:8000/api/project_details/'+ this.props.match.params.id)
        .then(response=>{
            this.setState({
                project_details:response.data
            });
        });
        
    }

    projectdetailsSend = (e) => {
        e.preventDefault()
        this.props.history.push({
          pathname: '/customize_plan',
          state: {
            SystemUser: this.state.project_details,
          }
        });
      }


    render() {
        const {project_details} = this.state;
        return (
            <div className="row py-2 px-6 show active">
                    <div className="col-md-11 mx-auto">
                        <div className="">
                            
                            <div className="row">
                                <div class="col-4">
                                    <div className="sp-wrap">
                                        <a href=""><img className="carousel-img5" src={prodct1} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div className="sp-wrap">
                                        <a href=""><img className="carousel-img5" src={prodct2} alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="sp-wrap">
                                        <a href=""><img className="carousel-img5" src={prodct3} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col">
                        

                            <div className="product-detail-left">
                                    <div className="media align-items-end profile-head">
                                        <div className="profile mr-3">
                                            <img className="img2" src={CarouselImage03} alt="" /><br/>
                                        </div>
                                        
                                        <div className="media-body mb-5 text-white">
                                            <div>
                                                <h4>{this.state.name}</h4></div>
                                            {/* <h4 className="mt-0 mb-0">Name:{this.state.username}</h4> */}
                                            <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>Sri Lanka</p>
                                        </div>
                                </div><br/><br/><br/><br/>
                                {
                                                    project_details.map(project_details=>{
                                                        return(
                                                                <tr>
                                                                <th scope="col"><div className="media-body mb-5 text-white">
                                            <div><h4>Architect Name :{project_details.name}</h4></div></div></th>
                                                                </tr>
                                                        )
                                                    })
                                                }
                            </div>
                            <div className="product-detail-right">

                                {/* <h3>Modern Farmhouse 	Marquis-1780 <br></h3> */}
                                <h5><b>Open-concept great room with vaulted ceilings</b></h5>
                                <h5><b>Kitchen with pantry and island with seating</b></h5>
                                <h5><b>Main floor master bedroom with walk-in closet and ensuite</b></h5>
                                <h5><b>Main floor screen room </b></h5>
                                <h5><b>Attached garage with entry to mudroom/laundry room</b></h5>
                                
                            </div>

                        </div>
                        

                        <div className="product-detail-feature">
                       

                                    <table className="table table-hover text-center">
                                            <thead>
                                                <tr>
                                                {/* <th scope="col">Architect Name:</th> */}
                                                <th scope="col">House plan type:</th>
                                                <th scope="col">Architectural Style:</th>
                                                <th scope="col">Square Footage</th>
                                                <th scope="col">Master Bed Rooms</th>
                                                <th scope="col">Normal Bed Rooms</th>
                                                <th scope="col">Attach Barth Rooms</th>
                                                <th scope="col">Non - Attach Barth Rooms</th>
                                                <th scope="col">Kitchens</th>
                                                <th scope="col">Garage</th>
                                                <th scope="col">Covered Prochs</th>
                                                <th scope="col">Living Room</th>
                                                <th scope="col">Great Room</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    project_details.map(project_details=>{
                                                        return(
                                                                <tr>
                                                                {/* <th scope="col">{project_details.projid}</th>                                                                                                                                 */}
                                                                {/* <th scope="col">{project_details.name}</th> */}
                                                                <th scope="col">{project_details.plan_type}</th>                                                                                                                                
                                                                <th scope="col">{project_details.Architectural_Style}</th>
                                                                <th scope="col">{project_details.sqfeet}</th>
                                                                <th scope="col">{project_details.no_Bed_Room_Attach}</th>
                                                                <th scope="col">{project_details.no_Bed_Room_Non_Attach}</th>
                                                                <th scope="col">{project_details.no_Bath_Room_Attach}</th>
                                                                <th scope="col">{project_details.no_Bath_Room_Non_Attach}</th>
                                                                <th scope="col">{project_details.no_Kitchen}</th>
                                                                <th scope="col">{project_details.no_Garage}</th>
                                                                <th scope="col">{project_details.no_Covered_Porch}</th>
                                                                <th scope="col">{project_details.no_LivingRoom}</th>
                                                                <th scope="col">{project_details.no_GreatRoom}</th>
                                                                </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>
                        </div>
                        

                    

                   
                                    
                             
                        {/* {
                            project_details.map(project_details=>{
                                return(  */}
                        <button className="btn btn-default fire_gradient buttn_submit" onClick={this.projectdetailsSend}>Customize your plan</button>


                                {/* )
                            })
                        } */}
                    <div className="text-center">
                        {/* <button className="btn btn-default fire_gradient buttn_submit"><Link to={`/customize_plan/ ${project_details.projid}`} >Customize your plan</Link></button> */}
                        {/* <Link className="btn btn-lg btn-warning" > Select Plan</Link> */}

                        
                    </div><br/>
                           
                    <div className="text-center">
                        <Link className="btn btn-lg btn-warning" > Select Plan</Link>                        
                    </div><br/>

                    <div className="product-detail-feature">
                    <Link className="btn btn-lg btn-outline-success" to="/add_review"> Add a review</Link>
                    <h2> Reviews</h2>
                                    <hr/>
                                    <div>
                                        {/* <Link className="btn btn-lg btn-outline-success" to="/#"><FaPlus/> Add a project</Link> */}
                                    </div>
                                    <br/>
                                    <div>
                                    <table className="table table-hover text-center">
                                            <thead>
                                                <tr>
                                                <th scope="col"><h4>Customer Name</h4></th>
                                                <th scope="col"><h4>About the plan</h4></th>
                                                <th scope="col"><h4>Rating Rate</h4></th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.review.map(review=>{
                                                        return(
                                                                <tr>
                                                                    <th scope="col">{review.name} </th>
                                                                    <th scope="col">{review.review_message}</th>
                                                                    <th scope="col">{review.review_rate}</th>
                                                                    <th scope="col"><button className="btn btn-info" type="submit">Edit</button></th>
                                                                </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>

                             </div>
                    
                    </div>        

                            

                    
                    
            </div>

            
            
        )
    }
}

export default Productdetails