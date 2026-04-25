const BonsaiCard = ({ nombre }) => {
  return (
    <div style={{ 
      border: '1px solid #e0e0e0', 
      padding: '3rem 1rem', 
      textAlign: 'center', 
      backgroundColor: 'white',
      borderRadius: '4px'
    }}>
      <h4 style={{ fontWeight: '400', color: '#2d3626' }}>{nombre}</h4>
    </div>
  );
};

export default BonsaiCard;