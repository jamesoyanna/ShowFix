import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
    </Provider>
  );
};

export default App;
