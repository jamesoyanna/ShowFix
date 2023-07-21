import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDetailsSlider from '../../Movie/MovieDetailsSlider/MovieDetailsSlider';
import placeholderImage from '../../../images/mov.png';
import './moviecard.css';

import MovieDetails from '../MovieDetails/MovieDetails';
import { useDispatch } from 'react-redux';
import { fetchMovieDetails } from '../../../redux/actions/moviesActions';

const MovieCard = ({ movie }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedMovie) {
      dispatch(fetchMovieDetails(selectedMovie.id));
    }
  }, [dispatch, selectedMovie]);

  const handleSliderOpen = () => {
    setSelectedMovie(movie);
  };

  const handleSliderClose = () => {
    setSelectedMovie(null);
  };

  const imageSource = movie?.image || placeholderImage;

  return (
    <>
      <div className="movie-card">
        <div className="image-container">
          <Link to={`/movie-page/${movie.id}`} className="movie-card-link">
            <img src={imageSource} alt={movie.title} className="cover-image" />
          </Link>
          <button className="view-button" onClick={handleSliderOpen}>
            View
          </button>
        </div>
      </div>
      <MovieDetailsSlider onClose={handleSliderClose} isOpen={Boolean(selectedMovie)}>
        {selectedMovie && <MovieDetails selectedMovie={selectedMovie} onClose={handleSliderClose} />}
      </MovieDetailsSlider>
    </>
  );
};

export default MovieCard;
