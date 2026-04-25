import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const linkStyle = (path) => ({
    textDecoration: 'none',
    color: '#1a1a1a',
    borderBottom: location.pathname === path ? '1px solid #2d3626' : 'none',
    paddingBottom: '2px'
  });

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 5%', alignItems: 'center', backgroundColor: '#f9f8f4' }}>
      <h1 style={{ letterSpacing: '2px', fontSize: '1.5rem', fontWeight: 'bold' }}>ZENITH BONSAI</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/filosofia" style={linkStyle('/filosofia')}>Filosofía</Link>
        <Link to="/galeria" style={linkStyle('/galeria')}>Galería</Link>
        <Link to="/reservas" style={linkStyle('/reservas')}>Reservas</Link>
      </div>
    </nav>
  );
};

export default Navbar;