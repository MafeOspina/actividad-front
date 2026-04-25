const BonsaiCard = ({ nombre }) => (
  <div style={{ border: '1px solid #e0e0e0', padding: '4rem 1rem', textAlign: 'center', backgroundColor: 'white' }}>
    <p style={{ color: '#444' }}>{nombre}</p>
  </div>
);

const Galeria = () => {
  const arboles = ["Arce Japonés", "Pino Negro", "Ficus Retusa", "Olmo Chino", "Enebro", "Azalea"];

  return (
    <section style={{ padding: '5%', backgroundColor: '#f9f8f4' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '300' }}>Nuestra Colección</h2>
        <p style={{ color: '#666', maxWidth: '600px', margin: '1rem auto' }}>
          Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {arboles.map(tree => <BonsaiCard key={tree} nombre={tree} />)}
      </div>
    </section>
  );
};

export default Galeria;