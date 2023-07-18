import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MoviePage from './components/MoviePage/MoviePage';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
    </Provider>
  );
};

export default App;
