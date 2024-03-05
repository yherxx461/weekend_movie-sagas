import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {
  const history = useHistory();

  const handleClickToDetails = (id) => {
    console.log('handleClickToDetails', { id });
    history.push(`/details/${id}`);
  };

  return (
    <>
      <div data-testid="movieItem">
        <h3>{movie.title}</h3>
        {/* TO-DO: When click on image, it navigates to DetailsPage about the {movie.id} */}
        <img
          src={movie.poster}
          data-testid="toDetails"
          alt={movie.title}
          onClick={() => handleClickToDetails(movie.id)}
        />
      </div>
    </>
  );
}

export default MovieItem;
