const Filosofia = () => {
  return (
    <main style={{ 
      backgroundColor: '#f9f8f4', 
      minHeight: '80vh', 
      padding: '5% 10%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '900px' }}>
        {/* Título con fidelidad visual al diseño original */}
        <h2 style={{ 
          fontSize: '4rem', 
          fontWeight: '300', 
          color: '#2d3626',
          marginBottom: '2.5rem' 
        }}>
          Menos es más 
        </h2>

        {/* Párrafos basados en el contenido de la imagen proporcionada */}
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: '#333',
          marginBottom: '2rem',
          maxWidth: '700px'
        }}>
          Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales. 
          Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa. 
        </p>

        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: '#333',
          maxWidth: '750px'
        }}>
          En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y 
          cada alambrado debe **tener un propósito**. Buscamos el equilibrio perfecto entre la 
          intervención humana y la expresión salvaje de la naturaleza. 
        </p>
      </div>
    </main>
  );
};

export default Filosofia;