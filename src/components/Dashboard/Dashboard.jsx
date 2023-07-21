import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../../redux/actions/moviesActions';
import MovieCard from '../Movie/MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import './dashboard.css';

const Dashboard = () => {
  const { data: movieList, isLoading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    dispatch(fetchMovies(searchQuery || undefined));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dashboard">
      {isMobile ? (
        <div className="logo">
          <span className="logo-text">
            <Link to="/" className="logo-link">
              Show<span className="logo-hire">Flix</span>
            </Link>
          </span>
        </div>
      ) : null}
      <h1 className="heading">Explore</h1>
      <SearchBar onSearch={handleSearch} />
      <p className="title">Results for <span className='heading-inner'>{searchQuery || 'All Movies'}</span></p>
      <div className="movie-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            {movieList?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
