import React, { useState } from 'react';
import "./App.css";
const PizzaMenu = () => {
  // Sample pizza menu data
  const [menuItems] = useState([
    { id: 1, name: 'Margherita', price: 9.99 },
    { id: 2, name: 'Pepperoni', price: 10.99 },
    { id: 3, name: 'Vegetarian', price: 11.99 },
    // Add more menu items as needed
  ]);

  // Function to add a pizza to the cart
  const addToCart = (item) => {
    console.log('Added to cart:', item);
    // Implement your cart management logic here
  };

  return (
    <div>
      <h2>Pizza Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>${item.price.toFixed(2)}</div>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaMenu;
