import React, { Component } from 'react';
import axios from 'axios';

export default class ShowReview extends Component {
    
    constructor(props) 
    {
        super(props);        
        this.state={
            review_subject:'',
            review_message:'',
            review_rate:''
        }
    }

    componentDidMount() 
    {
        axios.get('http://127.0.0.1:8000/api/reviews/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                review_subject:response.data.review_subject,
                review_message:response.data.review_message,
                review_rate:response.data.review_rate
            });
        });
    }

    render() {
        return (
            <main className="main">

                <div className="text-center">
                    <h1>{this.state.review_subject}</h1>
                </div>
                <hr/>
                <br/>
                <div className="text-center">
                    <h4>{this.state.review_message}</h4>
                    <h4>{this.state.review_rate}</h4>
                </div>
                
                
            </main>
        )
    }
}
