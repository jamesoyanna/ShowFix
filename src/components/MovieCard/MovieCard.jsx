import React, { useState } from 'react';
import MovieDetailsSlider from '../MovieDetailsSlider/MovieDetailsSlider';
import placeholderImage from '../../images/mov.png';
import './moviecard.css';

const MovieCard = ({ movie }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleSliderOpen = () => {
    setIsSliderOpen(true);
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
      <MovieDetailsSlider onClose={handleSliderClose} isOpen={isSliderOpen} />
    </>
  );
};

export default MovieCard;
