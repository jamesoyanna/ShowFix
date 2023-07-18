import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import MovieCard from '../MovieCard/MovieCard';
import './dashboard.css';

const Dashboard = () => {
  const movies = useSelector((state) => state.movies);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    // Filter movies based on the search query
  };

  return (
    <div className="dashboard">
      <h1 className="heading">Explore</h1>
      <div className="search-bar">
        <div className="search-input">
          <FiSearch className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
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
