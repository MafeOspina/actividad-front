const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    console.log(nombre);
    localStorage.setItem("nombre", nombre);
  };

  return (
    <section className="form-section">
      <h2>Formulario</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Form;