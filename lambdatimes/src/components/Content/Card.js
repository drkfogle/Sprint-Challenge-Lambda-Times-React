import React from 'react';

const Card = props => {

  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} />
        </div>
        <span>By {/* author goes here */props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;

Card.PropTypes = {
  headline: PropTypes.string,
  img: PropTypes.img,
  author: PropTypes.author
}