import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <FiSearch className="search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search"
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
