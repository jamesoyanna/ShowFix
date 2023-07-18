import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './moviedetails.css';

const MovieDetails = ({ movie }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMovieDetails(movie);
    }, 1000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div className="movie-details">
      <h2>Movie Details</h2>
      {movieDetails ? (
        <div className="movie-card">
          <div className="image-container">
            <img src={movie.image} alt={movie.title} className="cover-image" />
            <button className="view-button">
              <Link to={`/movie/${movie.id}`} className="view-link">View</Link>
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
