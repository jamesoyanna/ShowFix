import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

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
    <>
    {isMobile ? (
                <div className="search-bar">
                <div className="search-input">
                  <input type="text"   value={searchQuery} onChange={handleChange} placeholder="Search" />
                </div>
                <FiSearch className="searchbar-icon" onClick={handleSearch} />
              </div>
      ) : (
        <div className="search-bar">
        <div className="search-input">
         <FiSearch className="search-icon" />
         <input
          type="text"
          value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Search"
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
