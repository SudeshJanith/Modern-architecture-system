import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
// import ReactStars from 'react-rating-stars-component';
// import {Link} from 'react-router-dom';
// import {FaEye, FaTrash} from 'react-icons/fa';

class ReviewsBelongsToUser extends Component {

    constructor(props) 
    {
        super(props);
        this.state={
            userBelongReviews:[]
        }
    }

    componentDidMount() 
    {
        axios.get('http://127.0.0.1:8000/api/breviews/'+this.props.id)
        .then(response=>{
            console.log(response);
            this.setState({
                userBelongReviews:response.data.data
            });
        });
    }

    render() {
        return (
            <main className="main">
                    

            </main>
        )
    }
}
const mapStateToProps = state => {
    return {
        id: state.auth.user.id
    }
}

export default connect(mapStateToProps, null)(ReviewsBelongsToUser)
