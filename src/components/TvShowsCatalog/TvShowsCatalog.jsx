import { useEffect, useState } from "react";
import "./TvShowsCatalog.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const posterUrl = (poster) => 'https://image.tmdb.org/t/p/original' + poster;

export const TvShowsCatalog = () => {


    const [movies, setMovies] = useState([{ title: "El rey leon" }, { title: "La jungla de cristal" }])


    const traerLasPelisDelBackend = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjY1ZjUyYTFhZjEzZGE3MGM5NmE3YThkNWFiY2QxMiIsInN1YiI6IjY1MmViMjNkMDI0ZWM4MDBhZWNkODQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xm2vMk77fgNrHeY_Owril1M3vhViD3rY6Tx7LSvaiz0'
            }
        };

        fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }


    useEffect(traerLasPelisDelBackend, []);

    return (
        <div>
            <h2>Populares</h2>
            <div className="poster-list">
                {
                    movies.map(movie => <img className="poster" src={posterUrl(movie.poster_path)} />)
                }
            </div>

        </div>
    );
}
