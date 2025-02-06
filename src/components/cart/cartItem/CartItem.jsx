import React, { useState } from "react";
import "./cartItem.scss";



const CartItem = ({ item, onUpdateQuantity }) => {
  return (
    <div className="item">
      <div className="item__image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="item__info">
        <strong>{item.name}</strong>
        <div className="weight">{item.weight}</div>
        <div>{item.price}₽</div>
      </div>
      <div className="item__controls">
      <button className="quantity-btn">
    <span className="minus" onClick={(e) => { e.stopPropagation(); onUpdateQuantity(item.id, -1); }}>-</span>
    <span className="quantity">{item.quantity}</span>
    <span className="plus" onClick={(e) => { e.stopPropagation(); onUpdateQuantity(item.id, 1); }}>+</span>
  </button>
      </div>
    </div>
  );
};

export default CartItem;
