import React from 'react';
import './cartPage.css';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.name}</p>
          <p>Цена: ${item.price}</p>
          <p>Количество: {item.quantity}</p>
        </div>
      ))}
      <button className="checkout-button">К оплате</button>
    </div>
  );
};

export default CartPage;
