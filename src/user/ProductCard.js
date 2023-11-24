import React, { useState } from 'react';
import './productCard.css';

const ProductCard = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <h2>Название товара</h2>
      <p>Цена: $10</p>
      <div className="quantity-control">
        <button onClick={handleRemove}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <button onClick={() => addToCart({ name: 'Название товара', price: 10, quantity })}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductCard;
