import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './moviedetails.css';
import Image from '../../images/mov.png'

const MovieDetails = ({ movie }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

const details = {
  title: "Movie Details",
   image: Image,
   description: "I believe my exceptional collaboration skills with cross-functional remote teams, strong ability to work in an agile work environment, and extensive technical experience in designing and developing customer"
}

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMovieDetails(details);
    }, 1000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div className="movie-details">
      {movieDetails ? (
        <div className="movie-card">
          <div className="image-container">
            <img src={movieDetails.image} alt={movieDetails.title} className="cover-image" />
           <h3>{movieDetails.title}</h3>
           <p>{movieDetails.description}</p>
           <button className="watch-button">
           Watch
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
