import React from 'react';
import './moviedetails.css';
import { FaArrowLeft } from 'react-icons/fa';

const MovieDetails = ({ selectedMovie, onClose }) => {
  return (
    <div className="movie-details">
        <div>
            <FaArrowLeft onClick={onClose} />
          </div>
        <div className="movie-card">
        
          <div className="image-container">
            <img src={selectedMovie.image} alt={selectedMovie.title} className="cover-image" />
          </div>
          <h2>{selectedMovie.title}</h2>
          <p className='plot'>{selectedMovie.plot}</p>
          <button className="watch-button">Watch</button>
        </div>
    </div>
  );
};

export default MovieDetails;

