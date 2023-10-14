import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import CarouselImage03 from '../css/img/Carousel/carousel_img_3.png';
import axios from 'axios';
import cookie from 'js-cookie';






function searchForSqvalue(term){
    return function(x){
        return x.sqfeet.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}


export default class customerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {

            // total_number_of_compartmenet:'',
            // no_Bed_Room_Non_Attach:'',
            // no_Bath_Room_Attach:'',
            // no_Bath_Room_Non_Attach:'',
            // no_Kitchen:'',
            // no_Garage:'',
            // no_Covered_Porch:'',
            // no_LivingRoom:'',
            // no_Veranda:'',
            // no_MudRoom:'',
            // no_Laundry:'',
            // no_GreatRoom:'',
            no_Bath_Room_Attach:'',
            // Attach_bathRoom_prediction:'',
            no_Bed_Room_Attach:'',
            no_Bath_Room_Non_Attach:'',
            no_Kitchen:'',
            no_Garage:'',
            no_Covered_Porch:'',
            no_LivingRoom:'',
            no_Veranda:'',
            no_MudRoom:'',
            no_Laundry:'',
            no_GreatRoom:'',

            total_prediction:'',
            prediction_of_no_Bed_Room_Attach:'',
            prediction_of_no_Bed_Room_Non_Attach  :'',
            prediction_of_no_Bath_Room_Attach:'',
            prediction_of_no_Bath_Room_Non_Attach  :'',
            prediction_of_no_Kitchen  :'',
            prediction_of_no_Garage  :'',
            prediction_of_no_Covered_Porch  :'',
            prediction_of_no_LivingRoom  :'',
            prediction_of_no_Veranda  :'',
            prediction_of_no_MudRoom  :'',
            prediction_of_no_Laundry  :'',
            prediction_of_no_GreatRoom  :'',
            
            architect:[],
            term:''
            
        }

        this.searchHandler = this.searchHandler.bind(this);

    }

    searchHandler(event){
        this.setState({term:event.target.value })
    }

    componentDidMount() 
    {
        axios.get('http://127.0.0.1:8000/api/search_model')
        .then(response=>{
            this.setState({
                architect:response.data
            });
        });
    }
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {

            // total_number_of_compartmenet:this.state.total_number_of_compartmenet,
            // no_Bath_Room_Attach:this.state.no_Bath_Room_Attach,
            no_Bed_Room_Attach:this.state.no_Bed_Room_Attach,            
            no_Bed_Room_Non_Attach:this.state.no_Bed_Room_Non_Attach,
            no_Bath_Room_Attach:this.state.no_Bath_Room_Attach,
            no_Bath_Room_Non_Attach:this.state.no_Bath_Room_Non_Attach,
            no_Kitchen:this.state.no_Kitchen,
            no_Garage:this.state.no_Garage,
            no_Covered_Porch:this.state.no_Covered_Porch,
            no_LivingRoom:this.state.no_LivingRoom,
            no_GreatRoom:this.state.no_GreatRoom,
            no_Veranda:this.state.no_Veranda,
            no_MudRoom:this.state.no_MudRoom,
            no_Laundry:this.state.no_Laundry
        }

        axios.post("http://127.0.0.1:5000/predict_constr_cost", data)
        
        .then(res => this.setState({
            total_prediction:res.data.total_prediction,

            prediction_of_no_Bed_Room_Attach:res.data.prediction_of_no_Bed_Room_Attach,
            prediction_of_no_Bed_Room_Non_Attach:res.data.prediction_of_no_Bed_Room_Non_Attach,
            prediction_of_no_Bath_Room_Attach:res.data.prediction_of_no_Bath_Room_Attach,
            prediction_of_no_Bath_Room_Non_Attach:res.data.prediction_of_no_Bath_Room_Non_Attach,
            prediction_of_no_Kitchen:res.data.prediction_of_no_Kitchen,
            prediction_of_no_Garage:res.data.prediction_of_no_Garage,
            prediction_of_no_Covered_Porch:res.data.prediction_of_no_Covered_Porch,
            prediction_of_no_LivingRoom:res.data.prediction_of_no_LivingRoom,
            prediction_of_no_Veranda:res.data.prediction_of_no_Veranda,
            prediction_of_no_MudRoom:res.data.prediction_of_no_MudRoom,
            prediction_of_no_Laundry:res.data.prediction_of_no_Laundry,
            prediction_of_no_GreatRoom:res.data.prediction_of_no_GreatRoom,


        }));
        console.log(data);
        
    };

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }



    render() {

        const {total_prediction ,
            prediction_of_no_Bed_Room_Attach,
            prediction_of_no_Bed_Room_Non_Attach,
            prediction_of_no_Bath_Room_Attach,
            prediction_of_no_Bath_Room_Non_Attach,
            prediction_of_no_Kitchen,
            prediction_of_no_Garage,
            prediction_of_no_Covered_Porch,
            prediction_of_no_LivingRoom,
            prediction_of_no_Veranda,
            prediction_of_no_MudRoom,
            prediction_of_no_Laundry,
            prediction_of_no_GreatRoom,


            
            architect} = this.state;

        return (
            <main className="main-expand">
                <div>
                    <div className="text-center">
                        
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center" method="POST" onSubmit={this.handleForm} >
                                    <h4><u>
                                            <h1>Please Design Your Dream House</h1>
                                            <br/>
                                        </u>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                    {/* <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Home Plan Name: :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="no_Bed_Room_Attach" onChange={this.handleInput} required />
                                        </div> */}
                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Master Bed Room:</label>
                                            <select className="custom-select"   name="no_Bed_Room_Attach" id="inputGroupSelect01" onChange={this.handleInput}  required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Bed Room </option>
                                            <option value="2">2 Bed Room </option>
                                            <option value="3">3 Bed Room</option>
                                            <option value="4">4 Bed Room</option>
                                            <option value="5">5 Bed Room</option>
                                            </select>
                                        </div>

                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Bed Nomal Room :</label>
                                            <select className="custom-select"  name="no_Bed_Room_Non_Attach" id="inputGroupSelect01" onChange={this.handleInput}  required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Bed Room </option>
                                            <option value="2">2 Bed Room </option>
                                            <option value="3">3 Bed Room</option>
                                            <option value="4">4 Bed Room</option>
                                            <option value="5">5 Bed Room</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row d-flex justify-content-center">

                                    <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Attach Bath Room :</label>
                                            <select className="custom-select"  name="no_Bath_Room_Attach" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Bath Room</option>
                                            <option value="2">2 Bath Room</option>
                                            <option value="3">3 Bath Room</option>
                                            <option value="4">4 Bath Room</option>
                                            <option value="5">5 Bath Room</option>
                                            </select>
                                        </div>

                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Bath Room Non-Attach:</label>
                                            <select className="custom-select"  name="no_Bath_Room_Non_Attach" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Bath Room</option>
                                            <option value="2">2 Bath Room</option>
                                            <option value="3">3 Bath Room</option>
                                            <option value="4">4 Bath Room</option>
                                            <option value="5">5 Bath Room</option>
                                            </select>
                                        </div>
                                    </div>     
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <div className="form-row d-flex justify-content-center">

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Kitchen  :</label>
                                            <select className="custom-select"  name="no_Kitchen" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Kitchen </option>
                                            <option value="2">2 Kitchen </option>
                                            <option value="3">3 Kitchen </option>
                                            <option value="4">4 Kitchen </option>
                                            <option value="5">5 Kitchen </option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Garage  :</label>
                                            <select className="custom-select" name="no_Garage" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Garage </option>
                                            <option value="2">2 Garage </option>
                                            <option value="3">3 Garage </option>
                                            <option value="4">4 Garage </option>
                                            <option value="5">5 Garage </option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Covered-Porch  :</label>
                                            <select className="custom-select" name="no_Covered_Porch" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Covered-Porch </option>
                                            <option value="2">2 Covered-Porch </option>
                                            <option value="3">3 Covered-Porch </option>
                                            <option value="4">4 Covered-Porch </option>
                                            <option value="5">5 Covered-Porch </option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of LivingRoom  :</label>
                                            <select className="custom-select"  name="no_LivingRoom" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 LivingRoom </option>
                                            <option value="2">2 LivingRoom </option>
                                            <option value="3">3 LivingRoom </option>
                                            <option value="4">4 LivingRoom </option>
                                            <option value="5">5 LivingRoom </option>
                                            </select>
                                        </div>

                                       
                                    </div>

                                    <div className="form-row d-flex justify-content-center">

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Veranda   :</label>
                                            <select className="custom-select"  name="no_Veranda" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Veranda  </option>
                                            <option value="2">2 Veranda  </option>
                                            <option value="3">3 Veranda  </option>
                                            <option value="4">4 Veranda  </option>
                                            <option value="5">5 Veranda  </option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of MudRoom   :</label>
                                            <select className="custom-select"  name="no_MudRoom" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 MudRoom  </option>
                                            <option value="2">2 MudRoom  </option>
                                            <option value="3">3 MudRoom  </option>
                                            <option value="4">4 MudRoom  </option>
                                            <option value="5">5 MudRoom  </option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Laundry   :</label>
                                            <select className="custom-select"  name="no_Laundry" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Laundry  </option>
                                            <option value="2">2 Laundry  </option>
                                            <option value="3">3 Laundry  </option>
                                            <option value="4">4 Laundry  </option>
                                            <option value="5">5 Laundry  </option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of GreatRoom   :</label>
                                            <select className="custom-select" type="number" name="no_GreatRoom" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 GreatRoom  </option>
                                            <option value="2">2 GreatRoom  </option>
                                            <option value="3">3 GreatRoom  </option>
                                            <option value="4">4 GreatRoom  </option>
                                            <option value="5">5 GreatRoom  </option>
                                            </select>
                                        </div>

                                        
                                    </div>
                                    <br/>
                                    <hr/>

                                    {/* <div className="form-row d-flex justify-content-center">    
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Select Number of compartments :</label>
                                            <select className="custom-select" name="" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Compartments</option>
                                            <option value="2">2 Compartments</option>
                                            <option value="3">3 Compartments</option>
                                            <option value="4">4 Compartments</option>
                                            <option value="5">5 Compartments</option>
                                            <option value="6">6 Compartments</option>
                                            <option value="7">7 Compartments</option>
                                            <option value="8">8 Compartments</option>
                                            <option value="9">9 Compartments</option>
                                            <option value="10">10 Compartments</option>
                                            <option value="11">11 Compartments</option>
                                            <option value="12">12 Compartments</option>
                                            <option value="13">13 Compartments</option>
                                            <option value="14">14 Compartments</option>
                                            <option value="15">15 Compartments</option>
                                            </select>
                                        </div>

                                    </div>     */}
                                   
                                    

                                    {/* <div className="col-md-6 order-md-">
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
                                    </div> */}

                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary " type="submit">Submit</button>
                                        
                                    </div>
                                    
                            </form>

                                    
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row col-12">
                    <div className="text-right left_btn col-4">
                    </div>
                    <div className="col-4"></div>
                </div>

                            <div className="text-center">
                                <div ref={this.myDivToFocus}></div>
                                    <h1>House Squuar-Feet Prediction</h1>
                                    <h2>House Squuar-Feet Prediction according to your Number of House Compartments</h2>
                                    <br/>

                                    
                                    <div className="text-center jumbotron jumbotron-fluid">
                                        <h3>Your Squuar-Feet Prediction will be around :</h3>
                                        {/* <h2>Squuar Feets : 1784 . {this.state.prediction}</h2> */}
                                        <h1>Total number of Squuar Feets :{total_prediction} </h1>
{/* 
                                        <h2>Attach bathroom Squuar Feets :{prediction_of_no_Bath_Room_Attach} </h2>
                                        <h2> Master bedroom Squuar Feets :{prediction_of_no_Bed_Room_Attach} </h2>
                                        <h2> Nomal bedroom Squuar Feets :{prediction_of_no_Bed_Room_Non_Attach} </h2>
                                        <h2> Non - Attach Bathroom Feets :{prediction_of_no_Bath_Room_Non_Attach} </h2>
                                        <h2> Kitchen Squuar Feets :{prediction_of_no_Kitchen} </h2>
                                        <h2> Garage Squuar Feets :{prediction_of_no_Garage} </h2>
                                        <h2> Coverproch Squuar Feets :{prediction_of_no_Covered_Porch} </h2>
                                        <h2> Living Room Squuar Feets :{prediction_of_no_LivingRoom} </h2>
                                        <h2> Verenda Squuar Feets :{prediction_of_no_Veranda} </h2>
                                        <h2> Mud Room Squuar Feets :{prediction_of_no_MudRoom} </h2>
                                        <h2> Lundry Room Squuar Feets :{prediction_of_no_Laundry} </h2>
                                        <h2> Great Room Squuar Feets :{prediction_of_no_GreatRoom} </h2> */}



                                        {/* <h2>Squuar Feets :{Attach_bathRoom_prediction} </h2> */}
                                        <div className="container form-group">
                                        <form>

                                            {/* <div className="form-row d-flex justify-content-center">
                                                <div className="form-group col-md-6 profile_inputs">
                                                    <input 
                                                    name="name" 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="inputPassword" 
                                                    placeholder="Type your Full Name here...." 
                                                    value={prediction}  
                                                    onChange={this.searchHandler} required/>
                                                </div>
                                            </div> */}
                                                    

                                            <div className="d-flex justify-content-center">

                                                <button className="btn btn-primary " type="submit">Search</button>
                                                        
                                            </div>

                                        </form>
                                    </div>

                                    </div>
                                    <br/>
                    
                                    <br/>
                            </div>



                            <div className="summary_box">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-left"><h5><b>Description</b></h5></th>
                                                <th className="text-center"><h5><b></b></h5></th>
                                                <th className="text-right"><h5><b>Squar Feets</b></h5></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Construction data */}
                                            <tr className="">
                                                <td><b>House Compartment Info</b></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Attach bathroom Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Bath_Room_Attach}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Non - Attach Bathroom Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Bath_Room_Non_Attach}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Master bedroom Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Bed_Room_Attach}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Great Room Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_GreatRoom}</td>
                                            </tr>

                                            
                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Kitchen Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Kitchen}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Garage Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Garage}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Coverproch Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Covered_Porch}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Living Room Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_LivingRoom}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Verenda Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Veranda}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Mud Room Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_MudRoom}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Lundry Room Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Laundry}</td>
                                            </tr>

                                            <tr className="">
                                                <td>&nbsp; &nbsp; &nbsp; &nbsp; Nomal bedroom Square Feets</td>
                                                <td></td>
                                                <td className="text-right">{prediction_of_no_Bed_Room_Non_Attach}</td>
                                            </tr>

                                            
                                        </tbody>
                                    </table>
                                </div>
                                <hr/>

                            


                            <div className="row">

                            <div className="row text-center">
                            {
                                architect.filter(searchForSqvalue(total_prediction)).map( archi => 
                                
                                        <div className="user_card" key={archi.id}>
                                            <div className="user_card-header">
                                                <div className="animated_wave-bg">
                                                    <div className="animated_wave-01"></div>
                                                    <div className="animated_wave-02"></div>
                                                    <div className="animated_wave-03"></div>
                                                </div>
                        
                                                <div className="user_profile_pic-content">

                                                    <img className="user_profile_pic"  src={CarouselImage03} alt="" />
                                                </div>
                                            </div>
                        
                                            <div className="user_card-content">
                                                <div className="user_info">
                                                    <h4>{archi.plan_name}</h4>
                                                    <h4>Master Bed :{archi.no_Bed_Room_Attach}</h4>
                                                    <h4>Nomal Bed : {archi.no_Bed_Room_Non_Attach}</h4>
                                                    <h4>Attach Bath : {archi.no_Bath_Room_Attach}</h4>
                                                    <h4>Sqfeet : {archi.sqfeet}</h4>
                                                </div>
                                                
                                                {/* <a href="/C:/Users/Chathurka/Desktop/ARchitecture/Plan_details.html" className="btn btn-warning">Select</a> */}
                                                {/* <Link to={'/arc_prductdetails'} className="btn btn-success">View</Link> */}
                                                <Link to={`/arc_prductdetails/ ${archi.projid}`} className="btn btn-success">View</Link>


                                            </div>
                                        </div>

                                    )
                                
                            }
                            </div>

                        
                        

                            
                        </div>
                        {/* <!-- /.row --> */}
                        <br/>
                        <hr/>
                        <br/>


                                    

            </main>
            
            
        )
    }
}
