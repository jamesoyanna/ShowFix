// components/MoviePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MoviePage = () => {
  return (
    <div>
      <h2>Movie Page</h2>
      <p>Movie details and related movies</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default MoviePage;
