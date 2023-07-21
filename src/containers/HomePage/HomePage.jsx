import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/actions/moviesActions';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import Dashboard from '../../components/Dashboard/Dashboard';
import './home.css';

const HomePage = () => {
  // Dispatch function from react-redux
  const dispatch = useDispatch();

  // Fetch movies on component mount
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

export default HomePage;
