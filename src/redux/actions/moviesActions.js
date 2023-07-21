import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies, getMovieDetails } from '../../util/api';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchQuery) => {
  try {
    const movies = await getMovies(searchQuery);
    return movies;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
  try {
    const movieDetails = await getMovieDetails(movieId);
    return movieDetails;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
});
