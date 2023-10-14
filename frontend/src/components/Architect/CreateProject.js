import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import cookie from 'js-cookie';
import {connect} from 'react-redux';

// create architecture project
 class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id:props.id,
            name:'',
            plan_type:'',
            sqfeet:'',            
            Architectural_Style:'',
            no_Bed_Room_Attach:'',
            no_Bed_Room_Non_Attach:'',
            no_Bath_Room_Attach:'',
            no_Bath_Room_Non_Attach:'',
            no_Kitchen:'',
            no_Garage:'',
            no_Covered_Porch:'',
            no_LivingRoom:'',
            no_Veranda:'',
            no_MudRoom:'',
            no_Laundry:'',
            no_GreatRoom:'',

            no_floors:'',
            no_rooms:'',
            no_doors:'',
            no_windows:'',
            wall_material:'',
            celing_material:'',
            floor_material:'',
            roof_material:'',
            img:'',
            img_1:'',
            img_2:'',

        }
    }
    
    handleForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("user_id", this.state.user_id)
        formData.append("name", this.state.name)
        formData.append("plan_type", this.state.plan_type)
        formData.append("sqfeet", this.state.sqfeet)
        formData.append("Architectural_Style", this.state.Architectural_Style)
        formData.append("no_Bed_Room_Attach", this.state.no_Bed_Room_Attach)
        formData.append("no_Bed_Room_Non_Attach", this.state.no_Bed_Room_Non_Attach)
        formData.append("no_Bath_Room_Attach", this.state.no_Bath_Room_Attach)
        formData.append("no_Bath_Room_Non_Attach", this.state.no_Bath_Room_Non_Attach)

        formData.append("no_Kitchen", this.state.no_Kitchen)
        formData.append("no_Garage", this.state.no_Garage)
        formData.append("no_Covered_Porch", this.state.no_Covered_Porch)
        formData.append("no_LivingRoom", this.state.no_LivingRoom)
        formData.append("no_GreatRoom", this.state.no_GreatRoom)

        formData.append("no_Veranda", this.state.no_Veranda)
        formData.append("no_MudRoom", this.state.no_MudRoom)
        formData.append("no_Laundry", this.state.no_Laundry)
        formData.append("no_floors", this.state.no_floors)
        formData.append("no_rooms", this.state.no_rooms)

        formData.append("no_doors", this.state.no_doors)
        formData.append("no_windows", this.state.no_windows)
        formData.append("wall_material", this.state.wall_material)
        formData.append("celing_material", this.state.celing_material)
        formData.append("floor_material", this.state.floor_material)
        formData.append("roof_material", this.state.roof_material)
        formData.append("img", this.state.img)
        formData.append("img_1", this.state.img_1)
        formData.append("img_2", this.state.img_2)




        // const data = {
        //     user_id:this.state.user_id,
        //     name:this.state.name,
        //     plan_type:this.state.plan_type,
        //     sqfeet:this.state.sqfeet,
        //     Architectural_Style:this.state.Architectural_Style,
        //     no_Bed_Room_Attach:this.state.no_Bed_Room_Attach,
        //     no_Bed_Room_Non_Attach:this.state.no_Bed_Room_Non_Attach,
        //     no_Bath_Room_Attach:this.state.no_Bath_Room_Attach,
        //     no_Bath_Room_Non_Attach:this.state.no_Bath_Room_Non_Attach,

        //     no_Kitchen:this.state.no_Kitchen,
        //     no_Garage:this.state.no_Garage,
        //     no_Covered_Porch:this.state.no_Covered_Porch,
        //     no_LivingRoom:this.state.no_LivingRoom,
        //     no_GreatRoom:this.state.no_GreatRoom,


        //     no_Veranda:this.state.no_Veranda,
        //     no_MudRoom:this.state.no_MudRoom,
        //     no_Laundry:this.state.no_Laundry,

        //     no_floors:this.state.no_floors,
        //     no_rooms:this.state.no_rooms,

        //     no_doors:this.state.no_doors,
        //     no_windows:this.state.no_windows,
        //     wall_material:this.state.wall_material,
        //     celing_material:this.state.celing_material,
        //     floor_material:this.state.floor_material,
        //     roof_material:this.state.roof_material,
        //     img:this.state.img,
        //     img_1:this.state.img_1,
        //     img_2:this.state.img_2,
        // }
        console.log(formData);

        axios.post("http://localhost:8000/api/store", formData)
        .then(res => {
            // cookie.set('token', res.data.access_token);
            // this.props.setLogin(res.data.user);
            console.log(res.data);
            this.props.history.push('/Userprofile');
            
        })
        .catch(e => this.setState({errors: e.response.data.errors}))

       

        // axios.get('http://127.0.0.1:8000/api/Userprofile')
        // .then(response=>{
        //     this.setState({
        //         architect_id:response.data.id
        //     });
        // });
        
        
    };

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    handleFileInput = (event) => {
        const fileName = event.target.name;
        const file = event.target.files[0];
        this.setState({
            [fileName]:file
        });
    }



    render() {
        return (
            <main className="main-expand">
                <div>
                    <div className="text-center">
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center" method="POST" encType='multipart/form-data' onSubmit={this.handleForm}>
                                    <h4><u>
                                            <h1>Add new House Plan  </h1> 
                                            {/* {this.state.id} */}
                                            <br/>
                                        </u>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Architecture Name :</label>
                                            <input type="hidden" className="form-control" id="" name="id" onChange={this.handleInput} value={this.state.id} required />
                                            <input type="text" className="form-control" id="validationServer01" name="name" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">House Type :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="plan_type" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Architectural Style :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="Architectural_Style" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Architectural Squuar Feets (Area) :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="sqfeet" onChange={this.handleInput} required />
                                        </div>
                                        
                                    </div>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <div className="form-row d-flex justify-content-center">

                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Master Bed Room :</label>
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
                                            <label htmlFor="validationServer01">Number of Normal Bed Room :</label>
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
                                            <label htmlFor="validationServer01">Number of Bath Room Attach:</label>
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
                                    <div className="form-row d-flex justify-content-center">

                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Floors :</label>
                                            <select className="custom-select"  name="no_floors" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Floor</option>
                                            <option value="2">2 Floors</option>
                                            </select>
                                        </div>

                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Rooms :</label>
                                            <select className="custom-select"  name="no_rooms" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Room</option>
                                            <option value="2">2 Rooms</option>
                                            <option value="3">3 Rooms</option>
                                            <option value="4">4 Rooms</option>
                                            <option value="5">5 Rooms</option>
                                            <option value="6">6 Rooms</option>
                                            <option value="7">7 Rooms</option>
                                            <option value="8">8 Rooms</option>
                                            <option value="9">9 Rooms</option>
                                            <option value="10">10 Rooms</option>
                                            <option value="11">11 Rooms</option>
                                            <option value="12">12 Rooms</option>
                                            <option value="13">13 Rooms</option>
                                            <option value="14">14 Rooms</option>
                                            <option value="15">15 Rooms</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Windows :</label>
                                            <select className="custom-select"  name="no_windows" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Window</option>
                                            <option value="2">2 Windows</option>
                                            <option value="3">3 Windows</option>
                                            <option value="4">4 Windows</option>
                                            <option value="5">5 Windows</option>
                                            <option value="6">6 Windows</option>
                                            <option value="7">7 Windows</option>
                                            <option value="8">8 Windows</option>
                                            <option value="9">9 Windows</option>
                                            <option value="10">10 Windows</option>
                                            <option value="11">11 Windows</option>
                                            <option value="12">12 Windows</option>
                                            <option value="13">13 Windows</option>
                                            <option value="14">14 Windows</option>
                                            <option value="15">15 Windows</option>
                                            <option value="16">16 Windows</option>
                                            <option value="17">17 Windows</option>
                                            <option value="18">18 Windows</option>
                                            <option value="19">19 Windows</option>
                                            <option value="20">20 Windows</option>
                                            <option value="21">21 Windows</option>
                                            <option value="22">22 Windows</option>
                                            <option value="23">23 Windows</option>
                                            <option value="24">24 Windows</option>
                                            <option value="25">25 Windows</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row d-flex justify-content-center">

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of doors :</label>
                                            <select className="custom-select"  name="no_doors" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Door</option>
                                            <option value="2">2 Doors</option>
                                            <option value="3">3 Doors</option>
                                            <option value="4">4 Doors</option>
                                            <option value="5">5 Doors</option>
                                            <option value="6">6 Doors</option>
                                            <option value="7">7 Doors</option>
                                            <option value="8">8 Doors</option>
                                            <option value="9">9 Doors</option>
                                            <option value="10">10 Doors</option>
                                            <option value="11">11 Doors</option>
                                            <option value="12">12 Doors</option>
                                            <option value="13">13 Doors</option>
                                            <option value="14">14 Doors</option>
                                            <option value="15">15 Doors</option>
                                            <option value="16">16 Doors</option>
                                            <option value="17">17 Doors</option>
                                            <option value="18">18 Doors</option>
                                            <option value="19">19 Doors</option>
                                            <option value="20">20 Doors</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Roof Material :</label>
                                            <select className="custom-select"  name="roof_material" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            {/* <option value="0">Asbastos</option>
                                            <option value="1">Roof Tiles</option> */}
                                            <option value="Asbastos">Asbastos</option>
                                            <option value="Concrete">Concrete</option>
                                            <option value="Roof Tiles">Roof Tiles</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Wall Material :</label>
                                            <select className="custom-select"  name="wall_material" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            {/* <option value="0">Cement Block</option>
                                            <option value="1">Tiles</option> */}
                                            <option value="Cement Block">Cement Block</option>
                                            <option value="Bricks">Bricks</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row d-flex justify-content-center">

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Celing Material :</label>
                                            <select className="custom-select"  name="celing_material" id="inputGroupSelect01" onChange={this.handleInput}required>
                                            <option defaultValue>Choose...</option>
                                            {/* <option value="0">Tiles</option>
                                            <option value="1">Wood</option> */}
                                            <option value="Ceiling Tiles">Ceiling Tiles</option>
                                            <option value="Wood">Wood</option>
                                            <option value="Concrete">Concrete</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Floor Material :</label>
                                            <select className="custom-select"  name="floor_material" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            {/* <option value="0">Cement</option>
                                            <option value="1">Tiles</option> */}
                                            <option value="Cement">Cement</option>
                                            <option value="Tiles">Tiles</option>
                                            </select>

                                        </div> <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Img :</label>
                                            <select className="custom-select"  name="img" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            {/* <option value="0">Cement</option>
                                            <option value="1">Tiles</option> */}
                                            <option value="CarouselImage03">CarouselImage03</option>
                                            <option value="Tiles">Tiles</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            {/* Number of windows */}
                                            <label htmlFor="validationServer01">Number of Pillers :</label>
                                            <select className="custom-select" name="no_pillers" id="inputGroupSelect01">
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Piller</option>
                                            <option value="2">2 Pillers</option>
                                            <option value="3">3 Pillers</option>
                                            <option value="4">4 Pillers</option>
                                            <option value="5">5 Pillers</option>
                                            <option value="6">6 Pillers</option>
                                            <option value="7">7 Pillers</option>
                                            <option value="8">8 Pillers</option>
                                            <option value="9">9 Pillers</option>
                                            <option value="10">10 Pillers</option>
                                            <option value="11">11 Pillers</option>
                                            <option value="12">12 Pillers</option>
                                            <option value="13">13 Pillers</option>
                                            <option value="14">14 Pillers</option>
                                            <option value="15">15 Pillers</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            {/* Number of windows */}
                                            <label htmlFor="validationServer01">Number of door frames :</label>
                                            <select className="custom-select" name="no_of_door_frames" id="inputGroupSelect01" >
                                                <option defaultValue>Choose...</option>
                                                <option value="1">1 Door Frame</option>
                                                <option value="2">2 Door Frames</option>
                                                <option value="3">3 Door Frames</option>
                                                <option value="4">4 Door Frames</option>
                                                <option value="5">5 Door Frames</option>
                                                <option value="6">6 Door Frames</option>
                                                <option value="7">7 Door Frames</option>
                                                <option value="8">8 Door Frames</option>
                                                <option value="9">9 Door Frames</option>
                                                <option value="10">10 Door Frames</option>
                                                <option value="11">11 Door Frames</option>
                                                <option value="12">12 Door Frames</option>
                                                <option value="13">13 Door Frames</option>
                                                <option value="14">14 Door Frames</option>
                                                <option value="15">15 Door Frames</option>
                                                <option value="16">16 Door Frames</option>
                                                <option value="17">17 Door Frames</option>
                                                <option value="18">18 Door Frames</option>
                                                <option value="19">19 Door Frames</option>
                                                <option value="20">20 Door Frames</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                    <div className="col-md-3 mb-3">
                                            {/* Number of windows */}
                                            <label htmlFor="validationServer01">Number of window frames :</label>
                                            <select className="custom-select" name="no_of_window_frames" id="no_of_window_frames">
                                                <option defaultValue>Choose...</option>
                                                <option value="1">1 Window Frame</option>
                                                <option value="2">2 Window Frames</option>
                                                <option value="3">3 Window Frames</option>
                                                <option value="4">4 Window Frames</option>
                                                <option value="5">5 Window Frames</option>
                                                <option value="6">6 Window Frames</option>
                                                <option value="7">7 Window Frames</option>
                                                <option value="8">8 Window Frames</option>
                                                <option value="9">9 Window Frames</option>
                                                <option value="10">10 Window Frames</option>
                                                <option value="11">11 Window Frames</option>
                                                <option value="12">12 Window Frames</option>
                                                <option value="13">13 Window Frames</option>
                                                <option value="14">14 Window Frames</option>
                                                <option value="15">15 Window Frames</option>
                                                <option value="16">16 Window Frames</option>
                                                <option value="17">17 Window Frames</option>
                                                <option value="18">18 Window Frames</option>
                                                <option value="19">19 Window Frames</option>
                                                <option value="20">20 Window Frames</option>
                                                <option value="21">21 Window Frames</option>
                                                <option value="22">22 Window Frames</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            {/* number of walls */}
                                            <label htmlFor="validationServer01">Number of walls :</label>
                                            <input type="number" className="form-control" id="validationServer01" name="no_of_walls"  required />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            {/* number of walls */}
                                            <label htmlFor="validationServer01">Height(Feet) :</label>
                                            <input type="number" className="form-control" id="validationServer01" name="no_of_walls"  required />
                                        </div>
                                        


                                        

                                    </div>

                                    <div className="col-md-6 order-md-">
                                        <div className="profile_box">
                                            <br/>
                                            {/* <div className="profile_picture text-center mb-3">
                                                <img className="profile_image shadow" src={MaleDefaultImage} alt="" />
                                            </div> */}
                                            <div className="mt-10 profile_details text-center">
                                                <h4></h4>
                                                <h5></h5>
                                                <div className="ml-10 text-center">
                                                    <input name='img' className="text-center" onChange={this.handleFileInput} type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 order-md-">
                                        <div className="profile_box">
                                            <br/>
                                            {/* <div className="profile_picture text-center mb-3">
                                                <img className="profile_image shadow" src={MaleDefaultImage} alt="" />
                                            </div> */}
                                            <div className="mt-10 profile_details text-center">
                                                <h4></h4>
                                                <h5></h5>
                                                <div className="ml-10 text-center">
                                                    <input name='img_1' className="text-center" onChange={this.handleFileInput} type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 order-md-">
                                        <div className="profile_box">
                                            <br/>
                                            {/* <div className="profile_picture text-center mb-3">
                                                <img className="profile_image shadow" src={MaleDefaultImage} alt="" />
                                            </div> */}
                                            <div className="mt-10 profile_details text-center">
                                                <h4></h4>
                                                <h5></h5>
                                                <div className="ml-10 text-center">
                                                    <input name='img_2' className="text-center" onChange={this.handleFileInput} type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



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
            </main>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        id:state.auth.user.id,
        
    };
}

export default connect(mapStateToProps, null)(CreateProject);
