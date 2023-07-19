import React from 'react';
import './moviedetails.css';

const MovieDetails = ({ movie }) => {

  console.log("Movies", movie)

  return (
    <div className="movie-details">
    {movie && (
      <div className="movie-card">
        <div className="image-container">
          <img src={movie.image} alt={movie.title} className="cover-image" />
        </div>
        <h3>{movie.title}</h3>
        <p>{movie.rated}</p>
        <p>{movie.released}</p>
        <p>{movie.genre}</p>
        <p>{movie.director}</p>
        <p>{movie.plot}</p>
        <p>{movie.language}</p>
        <p>{movie.awards}</p>
        <button className="watch-button">Watch</button>
      </div>
    )}
  </div>
  );
};

export default MovieDetails;
