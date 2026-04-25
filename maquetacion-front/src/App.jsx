import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Reservas from './pages/Reservas';


function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', color: '#1a1a1a' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/reservas" element={<Reservas />} />
          {/* Ruta por defecto */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;