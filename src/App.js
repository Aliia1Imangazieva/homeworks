import React from 'react';
import './App.css';
import Nav from './Nav';
import Content from './Content'; 
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav 
        logo="https://via.placeholder.com/50" 
        siteName="Мой сайт" 
      />
      <Content 
        title="Заголовок" 
        content="Это пример длинного текста, который отображается в компоненте Content." 
      />
    </div>
  );
}

export default App;