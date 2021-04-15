import {useState} from 'react';

const MovieList = () => {
    const [movies , setMovies] = useState([
        {
            name : 'Harry Potter',
            price : '$10',
            id : '12345' 
        },
        {
            name : 'Game of Thrones',
            price : '$20',
            id : '12344' 
        },
        {
            name : 'Inception',
            price : '$30',
            id : '166778' 
        },

    
    ]);
    return (
        <div>
                {movies.map(movie =>(
                                <li>{movie.name}</li>
                            ))}
        </div>
    );
}

export default MovieList;
