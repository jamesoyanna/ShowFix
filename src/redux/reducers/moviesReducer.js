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
    // Reducer logic for handling the state changes based on the API fetchMovies action
    builder
      .addCase(fetchMovies.pending, (state) => {
        // Set loading to true and clear any previous errors
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        // Update state when the API fetchMovies call is successful
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        // Handle state changes when the API fetchMovies call is rejected or fails
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
