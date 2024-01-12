export class MovieApi {
    getMovies(category, callback) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjY1ZjUyYTFhZjEzZGE3MGM5NmE3YThkNWFiY2QxMiIsInN1YiI6IjY1MmViMjNkMDI0ZWM4MDBhZWNkODQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xm2vMk77fgNrHeY_Owril1M3vhViD3rY6Tx7LSvaiz0'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => callback(response.results))
            .catch(err => console.error(err));
    }
}