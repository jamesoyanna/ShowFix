import { createAsyncThunk } from '@reduxjs/toolkit';
import Movie1Image from '../images/mov1.png';
import Movie2Image from '../images/mov3.png';
import Movie3Image from '../images/mov1.png';
import Movie4Image from '../images/mov3.png';
import Movie5Image from '../images/mov1.png';
import Movie6Image from '../images/mov.png';
import Movie7Image from '../images/mov1.png';
import Movie8Image from '../images/mov.png';

// Define a dummy action creator to fetch movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  // Replace this code with the actual API call
  return [
    { id: '1', title: 'Movie 1', image: Movie1Image, description: 'Movie3'},
    { id: '2', title: 'Movie 2', image: Movie2Image, description: 'Movie5' },
    { id: '3', title: 'Movie 3', image: Movie3Image, description: 'Movie' },
    { id: '4', title: 'Movie 4', image: Movie4Image, description: 'Movie' },
    { id: '5', title: 'Movie 5', image: Movie5Image, description: 'Movie8' },
    { id: '6', title: 'Movie 6', image: Movie6Image, description: 'Movie12' },
    { id: '7', title: 'Movie 7', image: Movie7Image, description: 'Movie36' },
    { id: '8', title: 'Movie 8', image: Movie8Image, description: 'Movie75' },
  ];
});
