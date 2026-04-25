import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Filosofia from '../pages/Filosofia';
import Galeria from '../pages/Galeria';
import Reservas from '../pages/Reservas';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;