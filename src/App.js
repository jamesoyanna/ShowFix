import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/HomePage/HomePage';
import MovieDetails from './components/Movie/MovieDetails/MovieDetails';
import MoviePage from './containers/MoviePage/MoviePage';
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie-page/:id" element={<MoviePage />} />
        </Routes>
    </Provider>
  );
};

export default App;
