import React, { useState } from 'react';
import MovieDetailsSlider from '../MovieDetailsSlider/MovieDetailsSlider';
import placeholderImage from '../../images/mov.png';
import './moviecard.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useDispatch } from 'react-redux';
import { fetchMovieDetails } from '../../actions/moviesActions';

const MovieCard = ({ movie }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();

  const handleSliderOpen = async () => {
    setIsSliderOpen(true);
    setSelectedMovie(movie);
    await dispatch(fetchMovieDetails(movie.id));
  };

  const handleSliderClose = () => {
    setIsSliderOpen(false);
  };

  const imageSource = movie.image ? movie.image : placeholderImage;

  return (
    <>
      <div className="movie-card">
        <div className="image-container">
          <img src={imageSource} alt={movie.title} className="cover-image" />
          <button className="view-button" onClick={handleSliderOpen}>
            View
          </button>
        </div>
      </div>
      <MovieDetailsSlider onClose={handleSliderClose} isOpen={isSliderOpen}>
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      </MovieDetailsSlider>
    </>
  );
};

export default MovieCard;
