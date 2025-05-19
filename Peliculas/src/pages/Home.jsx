import MovieGrid from '../components/MovieGrid';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#F48FB1' }}>🎀 Bienvenido a PinkyMovies 🎀</h1>

      <MovieGrid title="🎥 Populares" endpoint="/movie/popular" />
      <MovieGrid title="🌟 Mejor calificadas" endpoint="/movie/top_rated" />
      <MovieGrid title="🎬 En cartelera" endpoint="/movie/now_playing" />
    </div>
  );
}

export default Home;
