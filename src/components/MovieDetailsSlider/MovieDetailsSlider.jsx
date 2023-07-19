import React, { useEffect, useRef } from 'react';
import './moviedetailslider.css';
// import MovieDetails from '../MovieDetails/MovieDetails';

const MovieDetailsSlider = ({ children, onClose, isOpen }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className={`movie-details-slider ${isOpen ? 'open' : ''}`}>
      <div className="slider-content" ref={sliderRef}>
        {/* <MovieDetails /> */}
        <button className="close-button" onClick={onClose}>
          Back
        </button>
        {children}
      </div>
    </div>
  );
};

export default MovieDetailsSlider;
