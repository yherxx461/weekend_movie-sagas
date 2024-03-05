import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function DetailsPage() {
  // Calling id from params
  const movies = useSelector((store) => store.movies);
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const history = useHistory();

  useEffect(() => {
    //array.find() method helps find the movie object by directly looking for the specific id;
    const movie = movies.find((movieItem) => movieItem.id == parseInt(id));
    setMovieData(movie);
  }, [movies, id]);

  const handleBackToMovies = () => {
    console.log('in handleBackToMovies');
    history.push('/');
  };
  return (
    <>
      {/* TO-DO: "movieDetails attribute added." */}
      <div data-testid="movieDetails" className="movieDetails">
        <h1>Movie Details</h1>
        {movieData && (
          <div>
            <h3>{movieData.title}</h3>
            <img src={movieData.poster} alt={movieData.title} />
            <p>Description: {movieData.description}</p>
            {/* TO-DO: make genre appears here. */}
            <p>Genre: {movieData.genre_names}</p>
          </div>
        )}
        {/* TO-DO: Must have a "back to movie list" button with data-testid="toList" attributes */}
        <button data-testid="toList" onClick={handleBackToMovies}>
          Back
        </button>
      </div>
    </>
  );
}

export default DetailsPage;
