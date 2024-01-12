import './App.css'
import { Header } from './components/Header/Header';
import { MovieCatalog } from './components/MovieCatalog/MovieCatalog';


const App = () =>
  <>
    <Header />
    <main>
      <MovieCatalog />
    </main>
  </>;

export default App;
