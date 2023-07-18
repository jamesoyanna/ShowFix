import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../actions/moviesActions';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import './dashboard.css';

const Dashboard = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.trim() === '') {
      dispatch(fetchMovies());
    } else {
      dispatch(fetchMovies(searchQuery));
    }
  }, [dispatch, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="dashboard">
      <h1 className="heading">Explore</h1>
      <SearchBar onSearch={handleSearch} />
      <p className="title">Results for <span className='heading-inner'>{searchQuery || 'All Movies'}</span></p>
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
