import React from 'react';
import { Link } from 'react-router-dom';
import './moviecard.css'
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
    <div className="image-container">
      <img src={movie.image} alt={movie.title} className="cover-image" />
      <Link to={`/movie/${movie.id}`} className="view-button">View</Link>
    </div>
  </div>
  );
};

export default MovieCard;

