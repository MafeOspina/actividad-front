import { useState } from 'react';

const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    nivel: 'Principiante',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos capturados:", formData);
    localStorage.setItem('reservaUsuario', JSON.stringify(formData));
    alert("Solicitud enviada (revisa la consola)");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="nombre" 
        onChange={handleChange} 
        placeholder="Ej. Ana Silva" 
      />
      {/* ... otros campos ... */}
      <button type="submit">Enviar Solicitud</button>
    </form>
  );
};