const CustomButton = ({ text, onClick, type = "button" }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      style={{ 
        backgroundColor: '#2d3626', 
        color: 'white', 
        padding: '1rem 2rem', 
        border: 'none', 
        cursor: 'pointer', 
        fontSize: '1rem',
        transition: 'opacity 0.3s'
      }}
      onMouseOver={(e) => e.target.style.opacity = '0.9'}
      onMouseOut={(e) => e.target.style.opacity = '1'}
    >
      {text}
    </button>
  );
};

export default CustomButton;