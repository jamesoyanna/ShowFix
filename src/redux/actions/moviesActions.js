import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const OMDB_BASE_URL = process.env.REACT_APP_OMDB_BASE_URL;
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchQuery) => {
  try {
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
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
  try {
    const response = await axios.get(`${OMDB_BASE_URL}?i=${movieId}&apikey=${OMDB_API_KEY}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
});
