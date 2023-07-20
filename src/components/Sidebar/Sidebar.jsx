import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart } from 'react-icons/fi';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-text">
        <Link to="/" className="logo-link">
          Show<span className="logo-hire">Flix</span>
          </Link>
        </span>
      </div>
      <div className="search-bar">
        <div className="search-input">
          <FiSearch className="sidebar-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <Link to="/watchlist" className="watchlist">
        <FiHeart className="watchlist-icon" />
        Watchlist
      </Link>
    </div>
  );
};

export default Sidebar;
