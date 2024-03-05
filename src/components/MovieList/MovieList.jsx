import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>Movie List</h1>
      <section className="movies">
        {movies.map((movie, index) => (
          // <div data-testid="movieItem" key={movie.id}>
          //   <h3>{movie.title}</h3>
          //   <img src={movie.poster} alt={movie.title} />
          // </div>
          <MovieItem movie={movie} key={index} />
        ))}
      </section>
    </main>
  );
}

export default MovieList;
