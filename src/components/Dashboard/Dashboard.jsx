import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

const Dashboard = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="dashboard">
      <h1 className="heading">ShowFlix</h1>
      <div className="movie-list">
        {movies.loading ? (
          <p>Loading...</p>
        ) : movies.error ? (
          <p>Error: {movies.error}</p>
        ) : (
          <>
            {movies.data.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
