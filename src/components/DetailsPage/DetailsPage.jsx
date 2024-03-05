import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function DetailsPage() {
  // Calling id from params
  const details = useSelector((store) => store.movieDetails);
  const { id } = useParams();
  // const [movieData, setMovieData] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const fetchMovieDetails = (action) => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS' });
    axios
      .get(`api/movies/${id}`)
      .then((response) => {
        // dispatch({
        //   type: 'SET_MOVIE_DETAILS',
        //   payload: action,
        // });
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
    // array.find() method helps find the movie object by directly looking for the specific id
    // const movie = details.find((movieItem) => movieItem.id == parseInt(id));
    // setMovieData(movie);
  }, [id]);

  const handleBackToMovies = () => {
    console.log('in handleBackToMovies');
    history.push('/');
  };
  return (
    <>
      {/* TO-DO: "movieDetails attribute added." */}
      <div data-testid="movieDetails" className="movieDetails">
        <h1>Movie Details</h1>
        {details && (
          <div>
            <h3>{details.title}</h3>
            <img src={details.poster} alt={details.title} />
            <p>Description: {details.description}</p>
            {/* TO-DO: make genre appears here. */}
            <p>Genre: {details.genre_names}</p>
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
