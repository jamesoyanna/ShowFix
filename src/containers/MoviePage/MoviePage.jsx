import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';
import './moviepage.css';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import PlaceholderImage from '../../images/mov1.png';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';

const MoviePage = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState(
    () => JSON.parse(localStorage.getItem('selectedMovie')) || null
  );

  useEffect(() => {
    localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
  }, [selectedMovie]);

  useEffect(() => {
    const foundMovie = movies.data.find((movie) => movie.id === id);
    if (foundMovie) {
      setSelectedMovie(foundMovie);
    }
  }, [id, movies]);

  const { title, plot, released, rated, runtime, image } = selectedMovie || {};
  const imageSource = image || PlaceholderImage;

  return (
    <>
      <div className="movie-page-container">
        <Sidebar />
        <div className="movie-details">
          <div className="details-row">
            <div className="movie-image">
              <img src={imageSource} alt={title} />
            </div>
            <div className="info-container">
              <h3>{title}</h3>
              <p>{plot}</p>
              <div className="rating-time-row">
                <p>
                  <FaClock />
                  {released}
                </p>
                <p className="rating">
                  <FaStar />
                  {rated}
                </p>
                <p>{runtime}</p>
              </div>
              <div className="watch-button-container">
                <button className="watch-button">Watch Now</button>
                <div className="heart-icon-container">
                  <div className="heart-icon">&#x2665;</div>
                </div>
              </div>
            </div>
          </div>
          <h3>Similar Movies</h3>
          <div className="movie-grid">
            {movies.data.map((movie) => (
              <SimilarMovies key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
