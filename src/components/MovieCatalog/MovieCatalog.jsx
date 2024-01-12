import { useEffect, useState } from "react";
import "./MovieCatalog.css";
import { MovieList } from "../MovieList/MovieList";
import { MovieApi } from "../../api/movieApi";


export const MovieCatalog = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    const getMovies = (category, setFunction) => {
        let api = new MovieApi();
        api.getMovies(category, setFunction);
    }

    useEffect(() => {
        let categorias = [
            { category: 'popular', callback: setPopularMovies },
            { category: 'upcoming', callback: setUpcomingMovies },
            { category: 'top_rated', callback: setTopRatedMovies }];

        categorias.forEach( ({category, callback}) => getMovies(category, callback) );
    }, []);

    return (
        <div>
            <MovieList title="Popus" movies={popularMovies} />
            <MovieList title="Próximos estrenos" movies={upcomingMovies} />
            <MovieList title="Mejor Valoradas" movies={topRatedMovies} />
        </div>
    );
}
