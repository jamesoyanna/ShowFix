import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/moviesActions';
import MovieCard from '../MovieCard/MovieCard';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>ShowFlix</h1>
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
