import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaStar, FaClock } from 'react-icons/fa';
import './moviepage.css';
import Sidebar from '../Sidebar/Sidebar';
import PlaceholderImage from '../../images/mov1.png'
const MoviePage = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const selectedMovie = movies.data.find((movie) => movie.id === id);

  
  const imageSource = selectedMovie.image || PlaceholderImage;

  return (
    <div className="movie-page-container">
    <Sidebar />
    <div className="movie-details">
      <div className="details-row">
        <div className="movie-image">
          <img src={imageSource} alt={selectedMovie.title} />
        </div>
        <div className="info-container">
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.plot}</p>
          <div className="rating-time-row">
          <p><FaClock />{selectedMovie.released}</p>
            <p className="rating"> <FaStar />{selectedMovie.rated}</p>
            <p> {selectedMovie.runtime}</p>
          </div>
          <div className="watch-button-container">
            <button className="watch-button">Watch Now</button>
            <div className="heart-icon-container">
              <div className="heart-icon">&#x2665;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MoviePage;
