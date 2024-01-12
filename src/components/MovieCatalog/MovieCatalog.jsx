import { useEffect, useState } from "react";
import "./MovieCatalog.css";
import { MovieList } from "../MovieList/MovieList";


export const MovieCatalog = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);


    const getMovies = (url, setFunction) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjY1ZjUyYTFhZjEzZGE3MGM5NmE3YThkNWFiY2QxMiIsInN1YiI6IjY1MmViMjNkMDI0ZWM4MDBhZWNkODQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xm2vMk77fgNrHeY_Owril1M3vhViD3rY6Tx7LSvaiz0'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => setFunction(response.results))
            .catch(err => console.error(err));
    }

    const getPopularMovies = () => {
        getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', setPopularMovies);
    }

    const getUpcomingMovies = () => {
        getMovies('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', setUpcomingMovies);
    }

    const getTopRatedMovies = () => {
        getMovies('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', setTopRatedMovies);
    }

    useEffect(() => {
        getPopularMovies();
        getTopRatedMovies();
        getUpcomingMovies();
    }, []);

    return (
        <div>
            <MovieList title="Popus" movies={popularMovies} />
            <MovieList title="Próximos estrenos" movies={upcomingMovies} />
            <MovieList title="Mejor Valoradas" movies={topRatedMovies} />
        </div>
    );
}
