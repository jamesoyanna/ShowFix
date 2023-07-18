import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import './dashboard.css';

const Dashboard = () => {
  const movies = useSelector((state) => state.movies);

  const handleSearch = (searchQuery) => {

  };

  return (
    <div className="dashboard">
      <h1 className="heading">Explore</h1>
      <SearchBar onSearch={handleSearch} />
      <p className="title">Results for <span className='heading-inner'>Mortal Kombart</span></p>
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
