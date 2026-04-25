import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main style={{ padding: '10% 5%', backgroundColor: '#f9f8f4', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '4rem', fontWeight: '300', marginBottom: '2rem', maxWidth: '600px' }}>
        El arte de la paciencia
      </h2>
      <p style={{ color: '#444', marginBottom: '2rem', maxWidth: '500px', lineHeight: '1.6' }}>
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.
      </p>
      <button 
        onClick={() => navigate('/reservas')}
        style={{ backgroundColor: '#2d3626', color: 'white', padding: '1rem 2rem', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
      >
        Reserva un taller
      </button>
    </main>
  );
};

export default Home;