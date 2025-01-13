import React from 'react';

const Nav = ({ logo, siteName }) => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#282c34', color: '#fff' }}>
      <img 
        src={logo} 
        alt="Logo" 
        style={{ width: '50px', height: '50px', marginRight: '15px' }} 
      />
      <h1>{siteName}</h1>
    </nav>
  );
};

export default Nav;