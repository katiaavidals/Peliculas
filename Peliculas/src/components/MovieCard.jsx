import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '100%', borderRadius: '6px' }}
        />
        <h3 style={{ marginTop: '10px', fontSize: '16px' }}>{movie.title}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;
