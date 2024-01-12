import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header';
import { MovieCatalog } from './components/MovieCatalog/MovieCatalog';
import { TvShowsCatalog } from './components/TvShowsCatalog/TvShowsCatalog';


const App = () => {

  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<MovieCatalog />} />
      <Route path='/tv' element={<TvShowsCatalog />} />
    </Routes>
  </Router>;
};

export default App;
