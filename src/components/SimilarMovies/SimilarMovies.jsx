import React from 'react';
import placeholderImage from '../../images/mov1.png';
import './similarmovies.css';

const SimilarMovies = ({ movie }) => {
  return (
    <div className="similar-movie-card">
      <div className="similar-movie-container">
        <img src={movie?.image || placeholderImage} alt={movie?.title || 'No Title'} className="similar-image" />
        <button className="similar-view-button">
          View
        </button>
      </div>
    </div>
  );
};

export default SimilarMovies;
