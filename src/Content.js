import React from 'react';


const Content = ({ title, content }) => {
  return (
    <div style={{padding: '20px',textAlign: 'left'}}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Content;