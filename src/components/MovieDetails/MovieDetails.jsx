import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);


  const dummyMovieData = {
    id: '123',
    title: 'Example Movie',
    releaseYear: '2023',
    description: 'This is an example movie description.',
    genre: 'Triller',
  };
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMovieDetails(dummyMovieData);
    }, 1000);
  
    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [id]);
  

  return (
    <div>
      <h2>Movie Details</h2>
      {movieDetails ? (
        <div>
          <h3>{movieDetails.title}</h3>
          <p>{movieDetails.description}</p>
          <p>{movieDetails.genre}</p>
          <Link to="/">Back</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
