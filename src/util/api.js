import axios from 'axios';
import { OMDB_BASE_URL, OMDB_API_KEY } from './apiConfig';

export const getMovies = async (searchQuery) => {
  const response = await axios.get(`${OMDB_BASE_URL}?i=tt3896198&apikey=${OMDB_API_KEY}&s=${searchQuery}`);
  const { data } = response;
  if (data.Response === 'True' && Array.isArray(data.Search)) {
    const movies = await Promise.all(
      data.Search.map(async (movie) => {
        const movieResponse = await axios.get(`${OMDB_BASE_URL}?i=${movie.imdbID}&apikey=${OMDB_API_KEY}`);
        const movieData = movieResponse.data;
        return {
          id: movie.imdbID,
          title: movieData.Title,
          image: movieData.Poster !== 'N/A' ? movieData.Poster : null,
          rated: movieData.Rated,
          released: movieData.Released,
          genre: movieData.Genre,
          director: movieData.Director,
          plot: movieData.Plot,
          language: movieData.Language,
          awards: movieData.Awards,
        };
      })
    );
    return movies;
  } else {
    throw new Error('No movies found');
  }
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${OMDB_BASE_URL}?i=${movieId}&apikey=${OMDB_API_KEY}`);
  const { data } = response;
  return data;
};
