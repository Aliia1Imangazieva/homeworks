import React, { useState } from "react";
import "./cart.scss";
import CartItem from "./cartItem/CartItem";

import burger from './cartImg/BURGER.png';
import free from './cartImg/FREE.png';
import hotdog from './cartImg/HOTDOG.png';
import icon from './cartImg/free-icon.png';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Супер сырный", weight: "512г", price: 550, quantity: 1, img: burger },
    { id: 2, name: "Картошка фри", weight: "180г", price: 245, quantity: 2, img: free },
    { id: 3, name: "Жгучий хот-дог", weight: "245г", price: 239, quantity: 1, img: hotdog },
  ]);

  const updateQuantity = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      
    <div className="header">
    <h2>Корзина</h2>
    <button className="total-quantity-btn">{totalQuantity}</button> {/* Кнопка для общего количества */}
    </div>
    <div>    <hr />   </div>
    {items.map((item, index) => (
    <React.Fragment key={item.id}>
    <CartItem item={item} onUpdateQuantity={updateQuantity} />
    {index < items.length - 1 && <hr className="divider" />} {/* Черта после каждого элемента, кроме последнего */}
    </React.Fragment>
    ))}
      <div>    <hr />   </div>
      <h3 className="cart-total">
        Итого: <span className="total-value">{total}₽</span>
      </h3>
      <button className="start-quantity-btn">Оформить заказ</button>
      <div className="footer">
      <img src={icon} alt="Бесплатная доставка" />
      <strong className="footer-text">Бесплатная доставка</strong>
      </div>
    </div>
    
  );
};

export default Cart;
