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
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.rated}</p>
          <p>{selectedMovie.released}</p>
          <p>{selectedMovie.genre}</p>
          <p>{selectedMovie.director}</p>
          <h3>{selectedMovie.plot}</h3>
          <p>{selectedMovie.language}</p>
          <p>{selectedMovie.awards}</p>
          <button className="watch-button">Watch</button>
        </div>
    </div>
  );
};

export default MovieDetails;

