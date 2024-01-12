import React from 'react'

const posterUrl = (poster) => 'https://image.tmdb.org/t/p/original' + poster;

export const MovieList = ({ title, movies }) => <>
    <h2> {title} </h2>
    <div className="poster-list">
        {
            movies.map(movie => <img className="poster" src={posterUrl(movie.poster_path)} />)
        }
    </div>
</>



