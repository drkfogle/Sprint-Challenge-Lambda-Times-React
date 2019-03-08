import React from 'react';

const Card = props => {
  const {
    headline,
    img,
    author}
    = props.card
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img /* image source goes here */} />
        </div>
        <span>By {/* author goes here */author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
