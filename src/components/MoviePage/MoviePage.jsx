import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './moviepage.css'

const MoviePage = () => {
  const { id } = useParams(); // Step 2: Get the movieId from URL parameters
  const movies = useSelector((state) => state.movies);
  
  console.log("Movie Id", id);

  // Step 3: Find the movie with the matching id in the movies array
  const selectedMovie = movies.data.find((movie) => movie.id === id);

  return (
    <div className="movie-details">
      {/* Display the movie details */}
  
          <div>
            {/* Display the movie details using selectedMovie */}
            <img src={selectedMovie.image} alt={selectedMovie.title} className="cover-imag" />
            <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.rated}</p>
          <p>{selectedMovie.released}</p>
          <p>{selectedMovie.genre}</p>
          <p>{selectedMovie.director}</p>
          <h3>{selectedMovie.plot}</h3>
          <p>{selectedMovie.language}</p>
          <p>{selectedMovie.awards}</p>
           
            <button className="watch-button">Watch</button>
          </div>
  
    </div>
  );
};

export default MoviePage;
