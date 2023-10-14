import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Rating from '@material-ui/lab/Rating';
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import SuccessReviewAlert from '../Review/SuccessReviewAlert';
import ErrorReviewAlert from '../Review/ErrorReviewAlert';
// import StarRating from '../Rating/StarRating';
// import MUIRating from '../Rating/MaterialUiRating';
import ReactStars from 'react-rating-stars-component';
import {connect} from 'react-redux';


class AddReview extends Component {

    constructor(props) 
    {
        super(props);
        this.onChangeReviewRate = this.onChangeReviewRate.bind(this);

        this.state={            
            name:props.name, 
            review_message:props.review_message,
            review_rate:'',


        }

        
    }

    onChangeReviewRate(newRating) {
        this.setState({
            review_rate:newRating
        })
    }

    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            review_message:this.state.review_message,
            name:this.state.name,
            review_rate:this.state.review_rate,

        }

            console.log(data);
            axios.post("http://localhost:8000/api/store_review", data)
            .then(res => {
            // cookie.set('token', res.data.access_token);
            // this.props.setLogin(res.data.user);
            console.log(res.data);
            this.props.history.push('/');
            
        })
        .catch(e => this.setState({errors: e.response.data.errors}))
        
        
    };




    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    


    render() {
        return (
            <main className="main">
                <div className="container">
                    <div className="text-center">
                        {/* <h1><b><u>Make a Review on {this.state.name}</u></b></h1> */}
                        <h4>This will help encourage them as well as to improve them....</h4>
                    </div>

                    <hr />
                    

                    <form onSubmit={this.handleForm} className="form-signin">
                        {/* <div className="form-label-group md_text_inputs">
                            <label htmlFor="inputSubject">Review Belongs To:</label>
                            <input type="text" id="inputSubject" className="form-control" autoFocus="" value={this.state.review_user_id} onChange={}/>
                        </div> */}
                        <div className="form-label-group md_text_inputs">
                            <label htmlFor="inputSubject">Customer Name</label>
                            <input type="text" id="inputSubject" className="form-control" placeholder="Name" name="name" onChange={this.handleInput} value={this.state.name}/>
                        </div>
                        <br/>
                        <div className="form-label-group md_text_inputs">
                            <label htmlFor="inputMessage">Message</label>
                            {/* <textarea type="text" id="inputMessage" className="form-control" placeholder="Message" required="" value={this.state.review_message} onChange={this.onChangeReviewMessage}/> */}
                            <input type="text" className="form-control"  name="review_message" onChange={this.handleInput} />
                        </div>
                        <br/>
                        {/* <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Review Rate:</label>
                                            <select className="custom-select"   name="review_rate" id="inputGroupSelect01" onChange={this.handleInput}  required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1  </option>
                                            <option value="2">2  </option>
                                            <option value="3">3 </option>
                                            <option value="4">4 </option>
                                            <option value="5">5 </option>
                                            </select>
                                        </div>
                        <br/> */}
                        <div className="text-center">
                            <label>Rate :<ReactStars classNames="rating"
                                        count={5}
                                        onChange={this.onChangeReviewRate}
                                        size={50}
                                        // value={4.5}
                                        edit={true}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd000"
                                    />  </label>
                            {/* <input type="number" id="inputRate" className="form-control" placeholder="Rate" required="" autoFocus="" value={this.state.review_rate} onChange={this.onChangeReviewRate}/> */}
                            {/* <StarRating onChange={this.onChangeReviewRate}/> */}
                            {/* <MUIRating value={this.props.val}/>
                                <h1>Value from Hook: {this.props.hookValue}</h1> */}
                                <div className="d-flex justify-content-center">
                                    
                                </div>
                        </div>
                        <br/>
                        <div>
                            <button type="submit" className="btn btn-success">Submit</button>
                            {/* <Link to={`/arc_prductdetail/`} type="submit" className="btn btn-success">View</Link> */}

                            &nbsp;
                            <button type="reset" className="btn btn-danger">Cancel</button>
                        </div>
                        <hr/>
                        <br/>
                        <br/>
                    </form>
                    </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        name:state.auth.user.name,
        
    };
}

export default connect(mapStateToProps, null)(AddReview);

// export default AddReview