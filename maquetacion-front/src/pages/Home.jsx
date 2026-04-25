import "../styles/home.css";

const Home = () => {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <h1>Maquetación</h1>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>Bienvenido a la página</h2>
        <p>Este es el diseño base del proyecto</p>
        <button>Empezar</button>
      </section>

      {/* CARDS */}
      <section className="cards">
        <div className="card">
          <h3>Card 1</h3>
          <p>Contenido de ejemplo</p>
        </div>

        <div className="card">
          <h3>Card 2</h3>
          <p>Contenido de ejemplo</p>
        </div>

        <div className="card">
          <h3>Card 3</h3>
          <p>Contenido de ejemplo</p>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="form-section">
        <h2>Formulario</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const nombre = e.target.nombre.value;
            console.log(nombre);
            localStorage.setItem("nombre", nombre);
          }}
        >
          <input type="text" name="nombre" placeholder="Nombre" />
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 - Proyecto</p>
      </footer>
    </div>
  );
};

export default Home;