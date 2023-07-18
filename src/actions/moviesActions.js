import { createAsyncThunk } from '@reduxjs/toolkit';

// Define a dummy action creator to fetch movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  // Replace this code with the actual API call
  return [
    { id: '1', title: 'Movie 1' },
    { id: '2', title: 'Movie 2' },
    { id: '3', title: 'Movie 3' },
  ];
});
