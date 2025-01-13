import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f1f1f1', marginTop: '20px' }}>
      <p>&copy; Все права защищены {currentYear} год.</p>
    </footer>
  );
};

export default Footer;