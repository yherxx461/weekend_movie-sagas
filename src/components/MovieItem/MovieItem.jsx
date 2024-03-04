import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {
  const history = useHistory();

  const handleClickToDetails = (id) => {
    history.push(`/detailsPage/${id}`);
  };
  return (
    <>
      <div data-testid="movieItem">
        <h3>{movie.title}</h3>
        {/* TO-DO: When click on image, it navigates to DetailsPage about the {movie.id} */}
        <img
          src={movie.poster}
          alt={movie.title}
          data-testid="toDetails"
          onClick={() => handleClickToDetails(movie.id)}
        />
      </div>
    </>
  );
}

export default MovieItem;
