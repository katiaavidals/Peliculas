import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tmdb } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    tmdb.get(`/movie/${id}`).then(res => setMovie(res.data));
    tmdb.get(`/movie/${id}/recommendations`).then(res => setRecommendations(res.data.results));

    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    setIsFavorite(favs.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    let updatedFavs;

    if (favs.includes(id)) {
      updatedFavs = favs.filter(fid => fid !== id);
    } else {
      updatedFavs = [...favs, id];
    }

    localStorage.setItem('favs', JSON.stringify(updatedFavs));
    setIsFavorite(!isFavorite);
  };

  if (!movie) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ maxWidth: '300px', borderRadius: '8px' }}
      />
      <p style={{ margin: '20px 0' }}>{movie.overview}</p>

      <button
        onClick={toggleFavorite}
        style={{
          backgroundColor: isFavorite ? '#ffffff' : '#F48FB1',
          color: isFavorite ? '#F48FB1' : '#fff',
          border: '2px solid #F48FB1',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {isFavorite ? '💔 Quitar de favoritos' : '💖 Agregar a favoritos'}
      </button>

      <h3 style={{ marginTop: '40px' }}>Recomendaciones</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
        {recommendations.map((rec) => (
          <MovieCard key={rec.id} movie={rec} />
        ))}
      </div>
    </div>
  );
}

export default MovieDetail;
