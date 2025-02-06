import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Snacks from './components/snacks/Snacks';
import Cart from './components/cart/Cart';
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import FoodCardList from './components/foodCards/FoodCardList';
import { CartProvider } from './components/foodCards/CartContext';

import { useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Nav />
      <CartProvider>
        <div className='provider'>
          <Cart />
          <Routes>
            <Route path="/" element={<FoodCardList />} />
            <Route path="/snacks" element={<SnackList />} />
            <Route path='/snacks/:id' element={<SingleItem />} />
          </Routes>
        </div>
        </CartProvider>
        <Footer />
    </BrowserRouter>
  );
};

export default App;