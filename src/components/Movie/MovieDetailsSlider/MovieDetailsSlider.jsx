import React, { useEffect, useRef } from 'react';
import './moviedetailslider.css';

const MovieDetailsSlider = ({ children, onClose, isOpen }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleOutsideClickAndEscapeKey = (event) => {
      if (isOpen && event.keyCode === 27) {
        onClose();
      } else if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleOutsideClickAndEscapeKey);
    document.addEventListener('mousedown', handleOutsideClickAndEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleOutsideClickAndEscapeKey);
      document.removeEventListener('mousedown', handleOutsideClickAndEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`movie-details-slider ${isOpen ? 'open' : ''}`}>
      <div className="slider-content" ref={sliderRef}>
        {children}
      </div>
    </div>
  );
};

export default MovieDetailsSlider;
