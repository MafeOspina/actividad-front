import { useState } from 'react';

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    nivel: 'Principiante (Nunca he tenido un Bonsái)',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Datos de la reserva:", formData);
    localStorage.setItem('ultimaReserva', JSON.stringify(formData));
    alert("¡Solicitud enviada con éxito! (Datos guardados en LocalStorage)");
  };

  return (
    <section style={{ padding: '5%', backgroundColor: '#f9f8f4', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '300' }}>Reserva un Taller</h2>
        <p style={{ marginBottom: '2rem' }}>Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>
        
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid #eee' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nombre completo</label>
            <input name="nombre" placeholder="Ej. Ana Silva" onChange={handleChange} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc' }} required />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Correo electrónico</label>
            <input name="email" type="email" placeholder="tu@email.com" onChange={handleChange} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc' }} required />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nivel de experiencia</label>
            <select name="nivel" onChange={handleChange} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc' }}>
              <option>Principiante (Nunca he tenido un Bonsái)</option>
              <option>Intermedio (Tengo experiencia básica)</option>
              <option>Avanzado (Busco perfeccionamiento)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Mensaje (Opcional)</label>
            <textarea name="mensaje" placeholder="¿Qué te gustaría aprender?" onChange={handleChange} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', minHeight: '100px' }}></textarea>
          </div>

          <button type="submit" style={{ backgroundColor: '#2d3626', color: 'white', padding: '1rem', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservas;