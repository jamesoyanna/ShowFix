import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './moviepage.css';
import Sidebar from '../Sidebar/Sidebar';

const MoviePage = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const selectedMovie = movies.data.find((movie) => movie.id === id);

  const imageSource = selectedMovie.image || 'path/to/placeholder-image.jpg'; // Use a placeholder image if no image is available

  return (
    <div className="movie-page-container">
      <Sidebar />
      <div className="movie-details">
        <div className="details-row">
          <div className="image-container">
            <img src={imageSource} alt={selectedMovie.title} className="cover-image" />
          </div>
          <div className="info-container">
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.plot}</p>
            <div className="rating-time-row">
              <p className="rating">{selectedMovie.rated}</p>
              <p>{selectedMovie.released}</p>
              <p>{selectedMovie.runtime}</p>
            </div>
            <button className="watch-button">Watch Now</button>
            <div className="heart-icon-container">
              <div className="heart-icon">&#x2665;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
