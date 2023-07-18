
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart } from 'react-icons/fi';

import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-text">
          Dev<span className="logo-hire">Hire</span>
        </span>
      </div>
      <div className="search-bar">
        <div className="search-input">
          <FiSearch className="search-icon" />
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
