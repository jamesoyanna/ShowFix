import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/movie-page' element={<MoviePage />} />
   </Routes>
  );
}

export default App;
