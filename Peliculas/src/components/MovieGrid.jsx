import { useEffect, useState } from 'react';
import { tmdb } from '../api/tmdb';
import MovieCard from './MovieCard';

function MovieGrid({ title, endpoint }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdb.get(endpoint).then((res) => {
      setMovies(res.data.results);
    });
  }, [endpoint]);

  return (
    <section style={{ margin: '20px 0' }}>
      <h2>{title}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '16px'
      }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

// 🔥 ESTA ES LA PARTE IMPORTANTE
export default MovieGrid;
