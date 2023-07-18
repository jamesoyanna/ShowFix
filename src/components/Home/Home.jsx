import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../actions/moviesActions';
import MovieCard from '../MovieCard/MovieCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handleSearch = () => {
    dispatch(searchMovies(searchQuery));
  };

  return (
    <div>
      <h1>ShowFlix</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {movies.loading ? (
        <p>Loading...</p>
      ) : movies.error ? (
        <p>Error: {movies.error}</p>
      ) : (
        <div>
          {movies.data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
