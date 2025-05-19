import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#F48FB1',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: 0, color: 'white' }}>
        🎬 PinkyMovies
      </h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/favorites" style={linkStyle}>Favoritos</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  textDecoration: 'none'
};

export default Navbar;
