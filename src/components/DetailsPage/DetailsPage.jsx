import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector((store) => store.movieDetails);
  const history = useHistory();

  //handlebacktolist
  const handleBackToMovies = () => {
    console.log('in handleBackToMovies');
    history.push('/');
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
  }, [id, dispatch]);

  return (
    <>
      {/* TO-DO: "movieDetails attribute must be add" */}
      <div className="movieImage">
        <h1>Movie Details</h1>
        <img src={movie.poster} />
        <div data-testid="movieDetails" className="movieDetails">
          <div className="movieDescription">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            {/* TO-DO: make genre appears here */}
            <p>Genres: {movie.genre}</p>
            {/* TO-DO: must have a back toList button */}
            <button
              data-testid="toList"
              className="backButton"
              onClick={handleBackToMovies}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
