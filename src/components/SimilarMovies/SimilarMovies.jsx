import React from 'react';
import placeholderImage from '../../images/mov1.png';
import './similarmovies.css';

const SimilarMovies = ({ movie }) => {
  const imageSource = movie.image ? movie.image : placeholderImage;

  console.log("Similar", movie);
  
  return (
    <div className="similar-movie-card">
      <div className="similar-movie-container">
        <img src={imageSource} alt={movie.title} className="similar-image" />
        <button className="similar-view-button">
          View
        </button>
      </div>
    </div>
  );
};

export default SimilarMovies;
