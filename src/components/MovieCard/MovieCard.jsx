import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import MovieDetailsSlider from '../MovieDetailsSlider/MovieDetailsSlider';
import './moviecard.css';

const MovieCard = ({ movie }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleSliderOpen = () => {
    setIsSliderOpen(true);
  };

  const handleSliderClose = () => {
    setIsSliderOpen(false);
  };

  return (
    <>
      <div className="movie-card">
        <div className="image-container">
          <img src={movie.image} alt={movie.title} className="cover-image" />
          <button className="view-button" onClick={handleSliderOpen}>
            View
          </button>
        </div>
      </div>
      <MovieDetailsSlider onClose={handleSliderClose} isOpen={isSliderOpen} />
    </>
  );
};

export default MovieCard;
