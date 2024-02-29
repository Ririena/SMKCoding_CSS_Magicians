import React from 'react';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const stars = [];
  const maxStars = 5;
    
  
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
  }

  
  if (rating % 1 !== 0) {
    stars.push(<i key={stars.length} className="bi bi-star-half text-warning"></i>);
  }

  
  
  const remainingStars = maxStars - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<i key={stars.length + i} className="bi bi-star text-warning"></i>);
  }

  return <div>{stars}</div>;
};

export default Rating;
