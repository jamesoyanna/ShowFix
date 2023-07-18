// src/reducers/moviesReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../actions/moviesActions';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = [];
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = [];
      });
  },
});

export default moviesSlice.reducer;
