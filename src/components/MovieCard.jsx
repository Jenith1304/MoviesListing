import { FaStar, FaLink } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  return (
    <a 
      href={movie.imdb_url}
      target="_blank" 
      rel="noopener noreferrer" 
      className="movie-card"
    >
      <div className="movie-card-content">
        <h3 className="movie-title">{movie.movie}</h3>
        <div className="movie-rating">
          <FaStar className="star-icon" />
          <span>{movie.rating}</span>
        </div>
      </div>
      <div className="movie-link-indicator">
        <FaLink /> View on IMDb
      </div>
    </a>
  );
};

export default MovieCard;