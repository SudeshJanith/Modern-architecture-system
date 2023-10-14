import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";

// import './star-rating.css';

class MaterialUiRating extends Component {
 
    ratingChanged = (newRating) => {
        console.log(newRating);
      };

  render() {
    return (
      <div>

        <ReactStars
            count={5}
            onChange={this.ratingChanged}
            size={24}
            activeColor="#ffd700"
        />  

      </div>
    );
  }
}

export default MaterialUiRating;