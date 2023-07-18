import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../actions/moviesActions';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="home-container">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
