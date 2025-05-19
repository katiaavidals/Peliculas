import { useEffect, useState } from 'react';
import { tmdb } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');

    Promise.all(
      favs.map(id => tmdb.get(`/movie/${id}`).then(res => res.data))
    ).then(setMovies);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mis Películas Favoritas 💕</h2>
      {movies.length === 0 ? (
        <p>No tienes películas favoritas aún 😢</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
