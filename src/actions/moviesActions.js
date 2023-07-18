import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchQuery) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=25d01e11&s=${searchQuery}`);
    const { data } = response;
    if (data.Response === 'True' && Array.isArray(data.Search)) {
      const movies = data.Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        image: movie.Poster !== 'N/A' ? movie.Poster : null,
        description: movie.Type,
      }));
      return movies;
    } else {
      throw new Error('No movies found');
    }
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
});

